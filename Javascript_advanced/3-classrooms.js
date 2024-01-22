function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }
  students = [];
  for (i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1));
  }
  return students;
}

const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
