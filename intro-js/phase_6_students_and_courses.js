function Student(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstname} ${this.lastname}`;
};

Student.prototype.enroll = function(course) {
  if (this.courses.some(otherCourse => course.conflictsWith(otherCourse))) throw 'cant enroll';
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    course.students.push(this);
  } 
};

Student.prototype.courseload = function() {
  result = {};
  this.courses.forEach(function(course) {
    if (result[course.department] === undefined) result[course.department] = 0;
    result[course.department] += course.credits;
  });
  return result;
};

function Course(name, department, credits, days, block) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];  
  this.days = days;
  this.block = block;
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function(course) {
  return this.block === course.block && this.days.some(function(day) {
    return course.days.includes(day);
  });
};

