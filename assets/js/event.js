//EVENT LISTENERS 

// All javascript interactions are setted here. Don't forget to require the app.js file first.

let init = function () {

    document.getElementById("personalized").addEventListener('click', function () {
        document.getElementById("personalizedForm").style.display = "block";
        document.getElementById("personalizedForm").classList.add = "d-flex justify-content-center";
        document.getElementsByClassName("selectedPomodoroName")[0].innerHTML = "Personnalis√©";
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
}

document.addEventListener("DOMContentLoaded", init)