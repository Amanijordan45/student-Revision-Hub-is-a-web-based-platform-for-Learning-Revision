function openChemLesson(topic) {
    const lesson = document.getElementById("lesson-content");

    if (topic === "atoms") {
        lesson.innerHTML = `
            <h3>Atoms</h3>
            <p>Atoms are the basic building blocks of matter.</p>
            <p>They contain protons, neutrons and electrons.</p>
        `;
    }

    if (topic === "acids") {
        lesson.innerHTML = `
            <h3>Acids & Bases</h3>
            <p>Acids release H+ ions in water.</p>
            <p>Bases release OH- ions.</p>
        `;
    }

    if (topic === "periodic") {
        lesson.innerHTML = `
            <h3>Periodic Table</h3>
            <p>The periodic table organizes elements by atomic number.</p>
        `;
    }
}

function checkChemQuiz() {
    const answer = document.getElementById("chemAnswer").value;
    const result = document.getElementById("chemResult");

    if (answer.toUpperCase() === "H2O") {
        result.innerHTML = "✅ Correct!";
        updateChemProgress();
    } else {
        result.innerHTML = "❌ Try again!";
    }
}

function calculateMolarMass() {
    const hydrogen = 1 * 2;
    const oxygen = 16;
    const total = hydrogen + oxygen;

    document.getElementById("molarResult").innerHTML =
        "Molar Mass of H₂O = " + total + " g/mol";
}

function updateChemProgress() {
    localStorage.setItem("chemProgress", "completed");
    document.getElementById("chemProgressStatus").innerHTML =
        "🎉 Chemistry Quiz Completed!";
}

window.onload = function() {
    const progress = localStorage.getItem("chemProgress");

    if (progress === "completed") {
        document.getElementById("chemProgressStatus").innerHTML =
            "🎉 You already completed this quiz!";
    }
}