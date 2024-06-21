
const name = document.querySelector('.name');
const sex = document.querySelector('.sex');
const dateOfBirth = document.querySelector('.dateOfBirth');
const order = document.querySelector('.order');

const btn = document.querySelector('.btn');
const sortNameBtn = document.querySelector('.sortNameBtn');
const sortSexBtn = document.querySelector('.sortSexBtn');
const sortAgeBtn = document.querySelector('.sortAgeBtn');

const warning = document.querySelector('.warning');
const outStnt = document.querySelector('.outStnt');
const outStnts = document.querySelector('.outStnts');

const currDate = new Date();
const currYear = currDate.getFullYear();
const currMonth = currDate.getMonth() + 1;
const currDay = currDate.getDate();


let students = [];



let createStud = (name, sex, age) => {
    return {
        name: name,
        sex: sex,
        age: age,
    }
}


let addStud = (event) => {
    event.preventDefault();
    let nameVal = name.value.trim();
    let sexVal = sex.value;
    let dateOfBirthVal = dateOfBirth.value;
    if (nameVal === '' || dateOfBirthVal === '') {
        let warngMsg = 'Error! All fields must be filled in!';
        warning.innerHTML = warngMsg;
        return;
    }
    warning.innerHTML = '';

    let inpYear = dateOfBirthVal.slice(0, 4);
    let inpMonth = dateOfBirthVal.slice(5, 7);
    let inpDay = dateOfBirthVal.slice(8);
    let ageYear = currYear - inpYear;
    let ageMonth = currMonth - inpMonth;
    if (ageMonth < 0) {
        ageYear = ageYear - 1;
    }
    let ageDay = currDay - inpDay;
    if (ageMonth === 0 && ageDay < 0) {
        ageYear = ageYear - 1;
    }
    let age = ageYear;

    let student = createStud(nameVal, sexVal, age);

    students.push(student);

    outStnt.innerHTML = `You just added a student: <br>
                         <br> Name: ${student.name}
                         <br> Sex: ${student.sex}
                         <br> Age: ${student.age}`;



    student = {};

    let result = '';

    for (i = 0; i < students.length; i++) {
        let num = i + 1;
        result += `${num}.  ${students[i].name}  ${students[i].sex}  ${students[i].age} <br>`
    }

    outStnts.innerHTML = result;

}
btn.addEventListener("click", addStud);


let sortStudName = () => {
    students.sort((a, b) => {
        let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (!order.checked) {
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            if (nameA === nameB) {
                return a.age - b.age
            }

        } else {

            if (nameA > nameB)
                return -1;
            if (nameA < nameB)
                return 1;
            if (nameA === nameB) {
                return b.age - a.age
            }
        }
    })

    let result = '';

    for (i = 0; i < students.length; i++) {
        let num = i + 1;
        result += `${num}.  ${students[i].name}  ${students[i].sex}  ${students[i].age} <br>`
    }

    outStnts.innerHTML = result;

}

sortNameBtn.addEventListener("click", sortStudName);


let sortStudSex = () => {
    students.sort((a, b) => {
        let sexA = a.sex.toLowerCase(), sexB = b.sex.toLowerCase();
        if (!order.checked) {
            if (sexA < sexB)
                return -1;
            if (sexA > sexB)
                return 1;
            if (sexA === sexB) {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
            }
        } else {
            if (sexA > sexB)
                return -1;
            if (sexA < sexB)
                return 1;
            if (sexA === sexB) {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA > nameB)
                    return -1;
                if (nameA < nameB)
                    return 1;
            }
        }

    })

    let result = '';

    for (i = 0; i < students.length; i++) {
        let num = i + 1;
        result += `${num}.  ${students[i].name}  ${students[i].sex}  ${students[i].age} <br>`
    }

    outStnts.innerHTML = result;

}

sortSexBtn.addEventListener("click", sortStudSex);


let sortStudAge = () => {
    students.sort((a, b) => {

        if (!order.checked) {
            if (a.age === b.age) {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
            }
            return a.age - b.age

        } else {
            if (a.age === b.age) {
                let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA > nameB)
                    return -1;
                if (nameA < nameB)
                    return 1;
            }
        }

        return b.age - a.age
    })

    let result = '';

    for (i = 0; i < students.length; i++) {
        let num = i + 1;
        result += `${num}.  ${students[i].name}  ${students[i].sex}  ${students[i].age} <br>`
    }

    outStnts.innerHTML = result;

}

sortAgeBtn.addEventListener("click", sortStudAge);