let choice = prompt("Qual área você quer seguir? Front-end ou Back-end?");

if (choice === "Front-end") {
    let choiceTwo = prompt("Quer aprender React ou Vue?");
    if (choiceTwo === "React") {
        let finalChoice = prompt("Quer se especializar ou virar FullStack?");
        if (finalChoice === "especializar") {
            alert("Vamos de React então!!");
        } else if (finalChoice === "FullStack") {
            alert("Vamos de FullStack então!!");
        }
    } else if (choiceTwo === "Vue") {
        let finalChoice = prompt("Quer se especializar ou virar FullStack?");
        if (finalChoice === "especializar") {
            alert("Vamos de Vue então!!");
        } else if (finalChoice === "FullStack") {
            alert("Vamos de FullStack então!!");
        }
    }
} else if (choice === "Back-end") {
    let choiceTwo = prompt("Quer aprender C# ou Java?");
    if (choiceTwo === "C#") {
        let finalChoice = prompt("Quer se especializar ou virar FullStack?");
        if (finalChoice === "especializar") {
            alert("Vamos de C# então!!");
        } else if (finalChoice === "FullStack") {
            alert("Vamos de FullStack então!!");
        }
    } else if (choiceTwo === "Java") {
        let finalChoice = prompt("Quer se especializar ou virar FullStack?");
        if (finalChoice === "especializar") {
            alert("Vamos de Java então!!");
        } else if (finalChoice === "FullStack") {
            alert("Vamos de FullStack então!!");
        }
    }
}
