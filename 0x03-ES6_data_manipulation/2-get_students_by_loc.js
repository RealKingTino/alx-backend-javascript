function getStudentsByLocation(students, city) {
  const studentsInCity = students.filter((student) => student.location === city);

  return studentsInCity;
}

export default getStudentsByLocation;
