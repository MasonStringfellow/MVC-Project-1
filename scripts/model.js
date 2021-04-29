
var studentList = [];

var nextStudentId = 1000;

function Student(firstName, lastName, gender, uvuId, race, age, isVeteran){
    this.id = nextStudentId++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.uvuId = uvuId;
    this.race = race;
    this.age = age;
    this.isVeteran = isVeteran;

    this.sortableName = function() {
        return this.lastName + ", "+ this.firstName;
    }
};

function modelCreateStudent(firstName, lastName, gender, uvuId, race, age, isVeteran){
    var newStudent = new Student(firstName, lastName, gender, uvuId,race, age, isVeteran);
    studentList.push(newStudent);
    return newStudent;
};

function modelGetAllStudents(){
    return studentList;
};



function modelGetStudent(id){
    for (x in studentList){
        if (studentList[x].id === id){
            return studentList[x];
        }
    }
    return undefined;
}
