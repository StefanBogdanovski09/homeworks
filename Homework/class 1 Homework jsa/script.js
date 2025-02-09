async function getNamesData() {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
        );
        const students = await response.json();

        const studentNames = students.map(
            (student) => `${student.firstName} ${student.lastName}`
        );
        console.log("Student names:", studentNames);

        const sortByAverageGrade = students.sort(
            (a, b) => a.averageGrade - b.averageGrade
        );
        console.log("Average grade:", sortByAverageGrade);

        const studentsAboveGrade3 = students.filter(
            (student) => student.averageGrade > 3
        );
        console.log("Students with grade higher than 3:", studentsAboveGrade3);

        const femaleWithGrade5 = students.filter(
            (student) => student.gender === "Female" && student.averageGrade === 5
        );
        console.log("Female students with average grade of 5:", femaleWithGrade5);
        //
        const maleStudents = students.filter(
            (students) =>
                students.gender === "Male" &&
                students.firstName &&
                students.lastName &&
                students.city === "Skopje" &&
                students.age > 18
        );
        console.log("Male students who live in Skopje:", maleStudents);

        const averageGradeOfFemale = students
            .filter((student) => student.gender === "Female" && student.age > 24)
            .map((student) => student.averageGrade);
        const averageGrade =
            averageGradeOfFemale.reduce((acc, grade) => acc + grade, 0) /
            averageGradeOfFemale.length;
        console.log("Average grades of female students:", averageGrade);

        const maleStudentsB = students.filter(
            (student) =>
                student.gender === "Male" &&
                student.firstName.startsWith("B") &&
                student.averageGrade > 2
        );
        console.log("Male students:", maleStudentsB);


    } catch (error) {
        console.error("Error", error);
    }
}
getNamesData();