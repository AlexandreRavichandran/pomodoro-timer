//EVENT LISTENERS 
// All javascript interactions are setted here. Don't forget to require the app.js file first.

document.addEventListener("DOMContentLoaded", function (event) {
    displayPomodoroInformations("25/5");
});

document.getElementById("25/5").addEventListener("click", function () {
    displayPomodoroInformations("25/5");
});

document.getElementById("30/10").addEventListener("click", function () {
    displayPomodoroInformations("30/10");
});

document.getElementById("45/15").addEventListener("click", function () {
    displayPomodoroInformations("45/15");
});

document.getElementById("50/10").addEventListener("click", function () {
    displayPomodoroInformations("50/10");
});

document.getElementById("personalized").addEventListener('click', function () {
    document.getElementById("personalizedForm").style.display = "block";
    document.getElementById("personalizedForm").classList.add = "d-flex justify-content-center";
    document.getElementsByClassName("selectedPomodoroName")[0].innerHTML = "Personnalisé";
    document.getElementsByClassName("selectedPomodoroWorkTime")[0].innerHTML = "";
    document.getElementsByClassName("selectedPomodoroRestTime")[0].innerHTML = "";
    document.getElementsByClassName("selectedPomodoroCycle")[0].innerHTML = "";
    checkValue('WorkTime');
    checkValue('RestTime');
    checkValue('Cycle');
    calculateTotalPomodoroTime();
})

document.getElementById("personalizedRestTime").addEventListener('input', function () {
    checkValue('RestTime');
})

document.getElementById("personalizedWorkTime").addEventListener('input', function () {
    checkValue('WorkTime');
})

document.getElementById("personalizedCycle").addEventListener('input', function () {
    checkValue('Cycle');
})