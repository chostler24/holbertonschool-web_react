interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 = { firstName: 'Rick', lastName: 'Sanchez', age: 69, location: 'C-137'};
const student2 = { firstName: 'Morty', lastName: 'Smith', age: 14, location: 'C-137'};
const studentsList : Array<Student> = [student1, student2];

function CreateTable(table: HTMLTableElement, studentsList: Array<Student>) {
  for (const student of studentsList) {
    let row = table.insertRow();
    const firstName = row.insertCell();
    const location = row.insertCell();
    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;
  }
  document.body.appendChild(table);
}

let table = document.createElement('table');
CreateTable(table, studentsList);
