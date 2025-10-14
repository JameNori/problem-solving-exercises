function getPassedStudents(students) {
  let passStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 50) {
      passStudents.push(students[i].name);
    }
  }
  return passStudents
}

let result1 = getPassedStudents([
  { name: "A", score: 80 },
  { name: "B", score: 45 },
  { name: "C", score: 60 },
]);
console.log(result1);
