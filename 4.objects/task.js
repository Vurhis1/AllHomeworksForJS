function Student (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);



Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}
 
Student.prototype.addMarks = function (...marksToAdd) {
  if(this.marks !== undefined) {
     this.marks.push(...marksToAdd);
  }
}
 
Student.prototype.getAverage = function(){
  if(this.marks !== undefined) {
      return this.marks.reduce((a, b) => a + b, 0) / this.marks.length || 0;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function(reason){
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

