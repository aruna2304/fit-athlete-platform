function startAssessment() {
    alert("Welcome to FITFORGE! Your fitness assessment is starting.");
}


function calculateResult() {

    const sprint =
        Number(document.getElementById("sprint").value);

    const pushups =
        Number(document.getElementById("pushups").value);

    const jump =
        Number(document.getElementById("jump").value);

    const endurance =
        Number(document.getElementById("endurance").value);


    // Check whether all values are entered

    if (!sprint || !pushups || !jump || !endurance) {

        alert(
            "Please enter all your fitness results."
        );

        return;
    }


    // Convert fitness results into scores

    const speedScore =
        Math.min(
            100,
            Math.max(
                0,
                (18 - sprint) * 10
            )
        );


    const strengthScore =
        Math.min(
            100,
            pushups * 3
        );


    const powerScore =
        Math.min(
            100,
            jump * 2
        );


    const enduranceScore =
        Math.min(
            100,
            endurance * 6
        );


    // Sport-specific scores

    const athletics =
        Math.round(
            speedScore * 0.4 +
            powerScore * 0.3 +
            enduranceScore * 0.3
        );


    const football =
        Math.round(
            speedScore * 0.3 +
            strengthScore * 0.3 +
            enduranceScore * 0.4
        );


    const basketball =
        Math.round(
            powerScore * 0.5 +
            speedScore * 0.3 +
            strengthScore * 0.2
        );


    // Create recommendation list

    const sports = [

        `Athletics - ${athletics}%`,

        `Football - ${football}%`,

        `Basketball - ${basketball}%`

    ];


    // Save assessment information

    localStorage.setItem(
        "fitnessSprint",
        sprint
    );

    localStorage.setItem(
        "fitnessPushups",
        pushups
    );

    localStorage.setItem(
        "fitnessJump",
        jump
    );

    localStorage.setItem(
        "fitnessEndurance",
        endurance
    );


    // Save recommended sports for Dashboard

    localStorage.setItem(
        "recommendedSports",
        JSON.stringify(sports)
    );


    // Open results page

    window.location.href =
        "result.html?sports=" +
        encodeURIComponent(
            sports.join(", ")
        );
}