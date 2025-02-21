function calculateStudentGrade(score) {
  // Start coding here
  if(score <= 100 && score >= 90) {
    return "A";
  }
  else if(score <= 89 && score >= 80) {
    return "B";
  }
  else if(score <= 79 && score >= 70) {
    return "C";
  }
  else if(score <= 69 && score >= 60) {
    return "D";
  }
  else {
    return "F";
  }
}

// Example case
let johnGrade = calculateStudentGrade(30);
let lisaGrade = calculateStudentGrade(73);
let janeGrade = calculateStudentGrade(80);
let jjGrade = calculateStudentGrade(60);
let alexGrade = calculateStudentGrade(90);

console.log(`John grade is ${johnGrade}`);
console.log(`Lisa grade is ${lisaGrade}`);
console.log(`Jane grade is ${janeGrade}`);
console.log(`JJ grade is ${jjGrade}`);
console.log(`Alex grade is ${alexGrade}`);
