const quantityMarks = 8;

app()

function app() {
  let quantityStudents;
  do {
    quantityStudents = +prompt("Сколько студентов в группе ?");
  } while(isNaN(quantityStudents) || quantityStudents == 0);

  const studentsList = getStudentsName(quantityStudents);

  alert(studentsToString(studentsList));
  
  middScoreAllStudents(studentsList);

  do{
    const menuItem = +prompt(`Выберите операцию:
    1: получить лучшего студента
    2: Сортировать по успеваемости 
    3: Посчитать среднюю оценку для каждого студента
    4: Студенты на отчисление
    5: добавить студента`);

    getResultMenuItem(menuItem, studentsList);
  } while (confirm("Желаете продолжить?"));
  
}

function getStudentsName(quantityStudents) {
  const arrStudentsInfo = [];
  for (let i = 0; i < quantityStudents; i++) {
    let studentsName = prompt("Введите имя студента");
    arrStudentsInfo.push(
      {
        name: studentsName, 
        score: getRandomInt(1, 12)
      }
    );
  }
  return arrStudentsInfo;
}

function getRandomInt(min, max) {
  let arrScore = [];
  for (let i = 0; i < quantityMarks; i++ ) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    arrScore.push(randomNum);
  }
  return arrScore;
}

function middleScore(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return Math.floor(sum/arr.length);
}

function middScoreAllStudents(studentsList) {
  for(let i = 0; i < studentsList.length; i++){
    studentsList[i]['средний бал'] = middleScore(studentsList[i].score);
  }
}

function findBestStudent(studentsList) {
  let maxValue = studentsList[0];
  for(let i = 1; i < studentsList.length; i++){
    if(maxValue.middleScore < studentsList[i].middleScore){
      maxValue = studentsList[i];
    }
  }
  return maxValue;
}

function findBadStudents(studentsList) {
  let tempArr = [];
  for(let i = 0; i < studentsList.length; i++){
    const temp = studentsList[i].middleScore;
    if(temp < 5){
      tempArr.push(studentsList[i])
    }
  }
  return tempArr;
}

function studentToString(student) {
  if(student.middleScore){
    return `${student.name} - оценка: ${student.score} - средний бал: ${student.middleScore} \n`
  } else {
    return `${student.name} - оценка: ${student.score} \n`;
  }
}

function studentsToString(studentsList){
  let studentsOutput = "";
  for(let i = 0; i < studentsList.length; i++){
    studentsOutput += studentToString(studentsList[i]);
  }
  return studentsOutput;
}

function sortStudentsByGrades(studentsList) {
  let numLength = studentsList.length;
  for (let i = 0; i < numLength; i++) {
    for (let o = 1; o < (numLength - i); o++) {
      if (studentsList[o - 1].middleScore > studentsList[o].middleScore) {
        let temp = studentsList[o - 1];
        studentsList[o - 1] = studentsList[o];
        studentsList[o] = temp;
      }
    }
  }
  return studentsList.reverse();
};

function newStudent(studentsList){
  let nameStudent = prompt("Введите имя нового студента");
  let score = getRandomInt(1, 12);
  studentsList.push(
  {
    name: nameStudent, 
    score: score,
    middleScore: middleScore(score)
  });
  return studentsList;
}

function getResultMenuItem(menuItem, studentsList){
  if (menuItem != menuItem || menuItem == 0 || menuItem >= 6) {
    alert("Ошибка, такой операции нет, попробуйте еще.");
  } else if (menuItem <= 5) {
    switch (menuItem) {
      case 1: 
        alert(studentToString(findBestStudent(studentsList)));
        break;
      case 2: 
        alert(studentsToString(sortStudentsByGrades(studentsList)));
        break;
      case 3: 
        alert(studentsToString(studentsList));
        break;
      case 4:
        alert(studentsToString(findBadStudents(studentsList)));
        break;
      case 5: 
        alert(studentsToString(newStudent(studentsList)));
        break;
    }
  }
}