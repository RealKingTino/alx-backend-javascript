function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter(student => student.location === city);

  const updatedStudents = studentsInCity.map(student => {
    const newGrade = newGrades.find(grade => grade.studentId === student.id);

    const grade = newGrade ? newGrade.grade : 'N/A';

    return { ...student, grade };
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;
