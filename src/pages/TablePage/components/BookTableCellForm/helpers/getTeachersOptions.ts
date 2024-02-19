export const getTeachersOptions = (teachers: UserDto[]) =>
  teachers.map((teacher) => ({ label: teacher.name, value: teacher.id }))
