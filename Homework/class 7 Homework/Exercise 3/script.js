let students = [];

function saveStudent() {
    let student = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
    };

    students.push(student);
    console.log(students);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";
}