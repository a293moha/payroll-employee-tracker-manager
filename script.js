// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn'); 
// Collect employee data
// TODO: Get user input to create and return an array of employee objects
const collectEmployees = function() {  
}
let count = 0;
let continueAdd = true;
while (continueAdd && count < 10) {
  const firstName = prompt('Enter First Name');
  if (firstName === null) break;
  const lastName = prompt('Enter Last Name');
  if (lastName === null) break;
  const salary = prompt('Enter Salary');
  if (salary === null) break;

  continueAdd = confirm("do you want to add more?");
  if(!continueAdd){
  }
}

//console.log(employees); (not needed)
//progress=> was able to make enter first name, last name and salary, continue and then repeat adding data.
//need to ensure cancel works and data appears. (works)


// Display the average salary
// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("no more employees to calculate the average salary");
    return;
  }

  let totalSalary= employeesArray.reduce((total, employee) => total + employee.salary);
  let averageSalary = totalSalary / employeesArray.length;
  console.log(averageSalary);
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // ***line 51 of mini project*** 
  



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
}
