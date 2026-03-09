const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/calculate-gpa", (req, res) => {

    const grades = req.body.grades;
    const credits = req.body.credits;

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {

        totalPoints += grades[i] * credits[i];
        totalCredits += credits[i];

    }

    const gpa = totalPoints / totalCredits;

    res.json({ gpa: gpa.toFixed(2) });

});


app.post("/calculate-cgpa", (req, res) => {

    const gpas = req.body.gpas;
    let sum = 0;
    for (let i = 0; i < gpas.length; i++) {
        sum += gpas[i];
    }

    const cgpa = sum / gpas.length;
    res.json({ cgpa: cgpa.toFixed(2) });

});


app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});