function startAssessment() {
    alert("Welcome to FITFORGE! Your fitness assessment is starting.");
}
function calculateResult() {
    const sprint = Number(document.getElementById("sprint").value);
    const pushups = Number(document.getElementById("pushups").value);
    const jump = Number(document.getElementById("jump").value);
    const endurance = Number(document.getElementById("endurance").value);

    if (!sprint || !pushups || !jump || !endurance) {
        alert("Please enter all your fitness results.");
        return;
    }

    let sports = [];

    if (sprint <= 14) {
        sports.push("Athletics");
    }

    if (jump >= 40) {
        sports.push("Basketball");
    }

    if (pushups >= 20) {
        sports.push("Football");
    }

    if (endurance >= 10) {
        sports.push("Long-distance Running");
    }

    if (sports.length === 0) {
        sports.push("General Fitness");
    }
    window.location.href = "result.html?sports=" + encodeURIComponent(sports.join(", "));
    
}