const qttStudents = 8;

const studentsArr = studentsMock.getStudentList(qttStudents);

const names = studentsArr.map(val => val.name);

console.log('Transforming names into an array = ');
console.log(names);