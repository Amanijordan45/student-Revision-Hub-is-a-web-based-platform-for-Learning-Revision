function openPhysicsLesson(topic) {
    const lesson = document.getElementById("lesson-content");

    if (topic === "motion") {
        lesson.innerHTML = `
            <h3>Motion</h3>
            <p>Speed = Distance / Time</p>
        `;
    }

    if (topic === "force") {
        lesson.innerHTML = `
            <h3>Force</h3>
            <p>Force = Mass × Acceleration</p>
            <p>F = m × a</p>
        `;
    }

    if (topic === "energy") {
        lesson.innerHTML = `
            <h3>Energy</h3>
            <p>Kinetic Energy = 1/2 × m × v²</p>
        `;
    }
}

function checkPhysicsQuiz() {
    const answer = document.getElementById("physicsAnswer").value;
    const result = document.getElementById("physicsResult");

    if (answer.toLowerCase() === "f = m x a" || answer.toLowerCase() === "f=mx a" || answer.toLowerCase() === "f=ma") {
        result.innerHTML = "✅ Correct!";
        updatePhysicsProgress();
    } else {
        result.innerHTML = "❌ Try again! (Hint: F = ? × ?)";
    }
}

function calculateForce() {
    const m = parseFloat(document.getElementById("mass").value);
    const a = parseFloat(document.getElementById("acceleration").value);

    const force = m * a;

    document.getElementById("forceResult").innerHTML = "Force = " + force + " N";
}

function updatePhysicsProgress() {
    localStorage.setItem("physicsProgress", "completed");
    document.getElementById("physicsProgressStatus").innerHTML =
        "🎉 Physics Quiz Completed!";
}

window.onload = function() {
    const progress = localStorage.getItem("physicsProgress");

    if (progress === "completed") {
        document.getElementById("physicsProgressStatus").innerHTML =
            "🎉 You already completed this quiz!";
    }
}
