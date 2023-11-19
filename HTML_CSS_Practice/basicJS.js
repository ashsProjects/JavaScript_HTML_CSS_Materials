//Ctrl + Alt + N to run

//Hypotenuse Calculator
document.getElementById("submit").onclick = function() {
    a = Number(document.getElementById("sideA").value);
    b = Number(document.getElementById("sideB").value);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("sideC").innerHTML = "Side C: " + c;
}

//Counter Program
let count = 0;
document.getElementById("decreaseBtn").onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetButton").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

//Random Variable
document.getElementById("randSubmit").onclick = function() {
    let upper = Number(document.getElementById("upper").value);
    let lower = Number(document.getElementById("lower").value);

    let rand = Math.floor(Math.random() * upper) + lower;
    
    document.getElementById("randResult").innerHTML = "Random Number: " + rand;
}

//Checking if a check box is checked
document.getElementById("petSubmit").onclick = function() {
    if (document.getElementById("dog").checked && document.getElementById("cat").checked
        && document.getElementById("pig").checked) {
        document.getElementById("petResults").innerHTML = "\nYou have a dog, cat, and pig!\n";
    }
    else if (document.getElementById("dog").checked && document.getElementById("cat").checked) {
        document.getElementById("petResults").innerHTML = "\nYou have a dog and cat!\n";
    }
    else if (document.getElementById("cat").checked && document.getElementById("pig").checked) {
        document.getElementById("petResults").innerHTML = "\nYou have a cat and pig!\n";
    }
    else if (document.getElementById("pig").checked && document.getElementById("dog").checked) {
        document.getElementById("petResults").innerHTML = "\nYou have a dog and pig!\n";
    }
    else {
        if (document.getElementById("dog").checked == true) {
            document.getElementById("petResults").innerHTML = "\nYou have a dog!\n";
        }
        if (document.getElementById("cat").checked == true) {
            document.getElementById("petResults").innerHTML = "\nYou have a cat!\n";
        }
        if (document.getElementById("pig").checked == true) {
            document.getElementById("petResults").innerHTML = "\nYou have a pig!\n";
        }
    }

}

//Guessing Game
let randNum = Math.floor(Math.random() * 100 + 1);
let counter = 1;
document.getElementById("guessSubmit").onclick = function() {
    if (document.getElementById("guess").value > randNum) {
        document.getElementById("guessResult").innerHTML = "Lower";
        counter++;
    }
    else if (document.getElementById("guess").value < randNum) {
        document.getElementById("guessResult").innerHTML = "Higher";
        counter++;
    }
    else if (document.getElementById("guess").value == randNum) {
        document.getElementById("guessResult").innerHTML = `You got it! The number is ${randNum}. It took you ${counter} guesses.`; 
        document.getElementById("guessResult").style.color = "green";
        
    }
}
document.getElementById("guessReset").onclick = function() {
    randNum = Math.floor(Math.random() * 100 + 1);
    document.getElementById("guessResult").innerHTML = "";
    document.getElementById("guess").value = "";
    counter = 0;
}

//Temperature Converter
document.getElementById("celsius").oninput = function() {
    let temp = document.getElementById("celsius").value * 9/ 5 + 32;
    document.getElementById("fahrenheit").value = temp;
}
document.getElementById("fahrenheit").oninput = function() {
    let temp = (document.getElementById("fahrenheit").value - 32) * (5/9);
    console.log(temp);
    document.getElementById("celsius").value = temp;
}

//


