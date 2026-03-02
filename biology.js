function openBioLesson(topic) {
    const lesson = document.getElementById("lesson-content");

    if (topic === "cells") {
        lesson.innerHTML = `
            <h3>Cells</h3>
            <p>The cell is the basic unit of life.</p>
            <p>All living organisms are made of cells.</p>
        `;
    }

    if (topic === "body") {
        lesson.innerHTML = `
            <h3>Human Body</h3>
            <p>The body has systems like digestive, respiratory, circulatory.</p>
        `;
    }

    if (topic === "plants") {
        lesson.innerHTML = `
            <h3>Plants</h3>
            <p>Plants perform photosynthesis to make food.</p>
        `;
    }
}

function checkBioQuiz() {
    const answer = document.getElementById("bioAnswer").value;
    const result = document.getElementById("bioResult");

    if (answer.toLowerCase() === "cell") {
        result.innerHTML = "✅ Correct!";
        updateBioProgress();
    } else {
        result.innerHTML = "❌ Try again!";
    }
}

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    const bmi = weight / (height * height);

    document.getElementById("bmiResult").innerHTML =
        "Your BMI = " + bmi.toFixed(2);
}

function updateBioProgress() {
    localStorage.setItem("bioProgress", "completed");
    document.getElementById("bioProgressStatus").innerHTML =
        "🎉 Biology Quiz Completed!";
}

window.onload = function() {
    const progress = localStorage.getItem("bioProgress");

    if (progress === "completed") {
        document.getElementById("bioProgressStatus").innerHTML =
            "🎉 You already completed this quiz!";
    }
}