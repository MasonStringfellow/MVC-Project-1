function onPageLoad() {
    //wire up all event handlers
    document.getElementById("createBtn").onclick = onCreateBtnClicked;
    document.getElementById("cancelBtn").onclick = onCancelBtnClicked;
    document.getElementById("newBtn").onclick = onNewBtnClicked;

    //populate the table
    var items = modelGetAllStudents();
    for(var i = 0; i < items.length; i++){
        addTableItem(items[i]);
    }
    // clear input form 
    clearInputForm();
}

function onNewBtnClicked(){
    document.getElementById("formTitle").innerText = "Create New Student";

    document.getElementById("studentListArea").style.display = "none";
    document.getElementById("studentTable").style.display = "none";
    document.getElementById("studentEditArea").style.display = "block";
}


function onCancelBtnClicked(){
    clearInputForm();
}

function onCreateBtnClicked() {
    if (!validateControls()){
        return;
    }

    var form = document.forms["editForm"];
    // if(form.genderMaleRadio.checked){
    //     var gen = form.genderMaleRadio.checked
    // }
    // else{
    //     gen = form.genderFemaleRadio.checked
    // }
    var newStudent = modelCreateStudent(
        form.firstNameEdit.value,
        form.lastNameEdit.value,
        form.genderMaleRadio.checked,
        parseInt(form.uvuIdEdit.value),
        form.raceEdit.value,
        parseInt(form.ageEdit.value),
        form.isVeteran.checked
        
    );

    addTableItem(newStudent);
    
    clearInputForm();
}

function addTableItem(student){
    var table = document.getElementById("studentTable");

    var row = table.insertRow(table.rows.length);
    row.id = 'row' + student.id;

    var cell = row.insertCell(0);
    cell.innerText = student.uvuId;

    var cell = row.insertCell(1);
    cell.innerText = student.lastName + ", " + student.firstName;
    
    var cell = row.insertCell(2 );
    cell.innerText = student.gender? "Male" : "Female"

}

function validateControls() {
    var form = document.forms["editForm"];
    var isValidated = true;

    if (form.firstNameEdit.value === ""){
        document.getElementById("firstNameError").innerText = "First name is required.";
        isValidated = false;
    }
    else{
        document.getElementById("firstNameError").innerText = "";
    }

    if (form.lastNameEdit.value === ""){
        document.getElementById("lastNameError").innerText = "Last name is required.";
        isValidated = false;
    }
    else{
        document.getElementById("lastNameError").innerText = "";
    }

    if(!form.genderMaleRadio.checked && !form.genderFemaleRadio.checked){
        document.getElementById("genderError").innerText = "Gender is required."
        isValidated =false;
    }
    else{
        document.getElementById("genderError").innerText = "";
    }

    if (form.uvuIdEdit.value === ""){
        document.getElementById("uvuIdError").innerText = "UVU ID is required.";
        isValidated = false;
    }
    else if(isNaN(parseInt(form.uvuIdEdit.value))){
        document.getElementById("uvuIdError").innerText = "UVU ID must be a number.";
        isValidated = false;
    }
    else if (form.uvuIdEdit.value.length !== 8){
        document.getElementById("uvuIdError").innerText = "UVU ID must be 8 digits.";
        isValidated = false;
    }
    else{
        document.getElementById("uvuIdError").innerText = "";
    }

    if(!form.raceEdit.selectedIndex === -1){
        document.getElementById("raceError").innerText = "Race is required.";
        isValidated = false;
    }
    else{
        document.getElementById("raceError").innerText = "";
    }

    if (form.ageEdit.value === ""){
        document.getElementById("ageError").innerText = "Age is required.";
        isValidated = false;
    }
    else if(isNaN(parseInt(form.ageEdit.value))){
        document.getElementById("ageError").innerText = "Age must be a number.";
        isValidated = false;
    }
    else if(parseInt(form.ageEdit.value) < 1 || parseInt(form.ageEdit.value) > 110){
        document.getElementById("ageError").innerText = "Must be inside valid age range(1-110).";
        isValidated = false;
    }
    else{
        document.getElementById("ageError").innerText = "";
    }
    return isValidated;
}

function clearInputForm(){
    //hide the form, show the contact list
    document.getElementById("studentEditArea").style.display = "none";
    document.getElementById("studentTable").style.display = "table";
    document.getElementById("studentListArea").style.display = "block";

    //clear out all the controls on the form

    var form = document.forms["editForm"];

    form.firstNameEdit.value = "";
    document.getElementById("firstNameError").innerText = "";

    form.lastNameEdit.value = "";
    document.getElementById("lastNameError").innerText = "";

    form.genderMaleRadio.check = false;
    form.genderFemaleRadio.checked = false;
    document.getElementById("genderError").innerText = "";

    form.uvuIdEdit.value = "";
    document.getElementById("uvuIdError").innerText = "";

    form.raceEdit.selectedIndex = -1;
    document.getElementById("raceError").innerText = "";

    form.ageEdit.value = "";
    document.getElementById("ageError").innerText = "";

    form.isVeteran.checked = false;
}