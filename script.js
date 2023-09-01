const employees = [];

function addEmployee( name, surname, salary, position) {
    const employee = {
        name,
        surname,
        salary,
        position
    };
    employees.push(employee);
    console.log('${name} został dodany do listy pracowników');
}

function removeEmployee(surname){
    for(let i =0; i < employees.length; i++){
        if (employees[i].surname === surname)
        employees.splice(i, 1);
        console.log(surname + ' został wyjebany')
        return;
    }
}