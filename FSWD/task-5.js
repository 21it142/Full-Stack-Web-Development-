const fs = require('fs');
const readline = require('readline');

// Create a readline interface to prompt for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for employee information
function promptEmployeeData() {
  return new Promise((resolve, reject) => {

    rl.question('Enter employee name: ', (name) => {
      rl.question('Enter employee ID: ', (id) => {
        rl.question('Enter employee department: ', (department) => {
            rl.question('Enter employee age : ', (age) => {
        //   r1.question('Enter Your Age:',(age)=>{
            const employee = {
                name: name,
                id: id,
                department: department,
                age:age
              };
              resolve(employee);
         });
        });
      });
    });
  });
}

// Write employee data to file
function writeDataToFile(data) {
  fs.writeFile('employee-data.json', JSON.stringify(data), (err) => {
    // if (err) {
    //   console.error('Error writing to file:', err);
    // } else {
    //   console.log('Employee data has been written to employee-data.json');
    // }
    rl.close();
  });
}

// Main function to prompt user and write data to file
async function main() {
  const employeeData = await promptEmployeeData();
  writeDataToFile(employeeData);
}

// Call the main function
main();