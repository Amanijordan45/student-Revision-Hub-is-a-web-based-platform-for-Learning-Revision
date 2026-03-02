function openLesson(topic) {
    const lessonContent = document.getElementById("lesson-content");

    if (topic === "algebra") {
        lessonContent.innerHTML = `
            <h3>Algebra Lesson</h3>
            <p>Example: Solve 2x + 4 = 10</p>
            <p>2x = 6</p>
            <p>x = 3</p>
        `;
    }

    if (topic === "geometry") {
        lessonContent.innerHTML = `
            <h3>Geometry Lesson</h3>
            <p>Area of rectangle = length × width</p>
        `;
    }

    if (topic === "trigonometry") {
        lessonContent.innerHTML = `
            <h3>Trigonometry Lesson</h3>
            <p>sin²θ + cos²θ = 1</p>
        `;
    }
}

function checkQuiz() {
    const answer = document.getElementById("quizAnswer").value;
    const result = document.getElementById("quizResult");

    if (answer == 30) {
        result.innerHTML = "✅ Correct!";
        updateProgress();
    } else {
        result.innerHTML = "❌ Try again!";
    }
}

function calculate() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const sum = n1 + n2;
    document.getElementById("calcResult").innerHTML = "Result: " + sum;
}

function updateProgress() {
    localStorage.setItem("mathProgress", "completed");
    document.getElementById("progressStatus").innerHTML =
        "🎉 Math Quiz Completed!";
}

window.onload = function() {
    const progress = localStorage.getItem("mathProgress");

    if (progress === "completed") {
        document.getElementById("progressStatus").innerHTML =
            "🎉 You already completed this quiz!";
    }
}