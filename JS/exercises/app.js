const employees = [];

function addEmployee(firstName, lastName, position, salary) {
    const employee = {
        firstName,
        lastName,
        position,
        salary
    };
    employees.push(employee);
    console.log(`${firstName} ${lastName} został dodany do bazy danych.`);
}

function removeEmployee(lastName) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].lastName === lastName) {
            employees.splice(i, 1);
            console.log(`${lastName} został usunięty z bazy danych.`);
            return;
        }
    }
    console.log(`Pracownik o nazwisku ${lastName} nie został znaleziony.`);
}