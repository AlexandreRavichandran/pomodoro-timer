document.addEventListener("DOMContentLoaded", function (event) {
    displayPomodoroInformations("Pomodoro_25/5");
});

document.getElementById("25/5").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro_25/5");
});
document.getElementById("30/10").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro_30/10");
});
document.getElementById("45/15").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro_45/15");
});
document.getElementById("50/10").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro_50/10");
});















// FUNCTIONS LIBRARY

// General functions

/**
 * Function to convert minutes into a hours format (H:i:s)
 * @param {number} total_time 
 * @returns string
 */
function convertMinutesToHours(total_time) {
    let hours = Math.floor(total_time / 60);
    let minutes = total_time % 60;

    let converted_hours = hours + " h " + minutes + " m.";
    return converted_hours;
}

/**
 * Function to check whether a number is even or odd (useful to distinguish worktime and resttime on pomodoro timer)
 * Typically, odd loop = worktime ; even loop = resttime
 * @param {number} number 
 * @returns boolean
 */
function evenOrNot(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Function to add a "0" before number when the number is strictly smaller than 10
 * @param {number} number
 * @returns mixed
 */
function addZeroWhenUnderTen(number) {
    if (number < 10) {
        return "0" + number;

    } else {
        return number;
    }
}

// Timer functions 

/**
 * Function to apply the countdown timer following a workting time, resting time, number of cycles and automatically setted loop
 * 
 * @param {number} timer_working_time 
 * @param {number} timer_restting_time 
 * @param {number} cycle 
 * @param {number} loop  //setted automatically
 * @returns void
 */
function countdownTimer(timer_working_time, timer_restting_time, cycle, loop = 1) {
    window.loop = loop;
    if (!window.cycle) {
        window.cycle = 0;
        console.log('initialization')
    }
    if (evenOrNot(window.loop)) {
        document.getElementById('pomodoro_cycle_minute').innerHTML = addZeroWhenUnderTen(timer_restting_time);
        console.log("pause cycle " + window.cycle)
        showAlert("resttime", "worktime");
        clicksoundButton();

    } else {
        document.getElementById('pomodoro_cycle_minute').innerHTML = addZeroWhenUnderTen(timer_working_time);
        window.cycle++;
        colorCycleBoxes(window.cycle, "current")
        colorCycleBoxes(window.cycle - 1, "done")
        console.log("work cycle " + window.cycle)
        showAlert("worktime", "restime");
        clicksoundButton();

    }
    let sec = 00;
    window.inter = setInterval(function () {
        sec--;
        document.getElementById('pomodoro_cycle_second').innerHTML = addZeroWhenUnderTen(sec);
        if (sec < 0) {
            sec = 59;
            document.getElementById('pomodoro_cycle_second').innerHTML = addZeroWhenUnderTen(sec);
            document.getElementById('pomodoro_cycle_minute').innerHTML = addZeroWhenUnderTen(document.getElementById('pomodoro_cycle_minute').innerHTML - 1);
        }
        if (document.getElementById('pomodoro_cycle_second').innerHTML == 0 && document.getElementById('pomodoro_cycle_minute').innerHTML == 0) {
            clearInterval(inter);
            window.loop++;
            console.log("boucle = " + window.loop)
            if (window.cycle === cycle) {
                console.log(window.cycle);
                colorCycleBoxes(window.cycle, "done")
                console.log('pomodoro done');
                showAlert("end", "worktime");
                clearInterval(window.total_time);
            } else {
                countdownTimer(timer_working_time, timer_restting_time, cycle, window.loop);
            }
        }

    }, 1000);

}

/**
 * Function to apply the timer to display the total pomodoro time
 */
function totalTimer() {
    let sec = 0;
    let minute = 0;
    let hour = 0;
    let second_space = document.getElementById("pomodoro_total_second");
    let minute_space = document.getElementById('pomodoro_total_minute');
    let hour_space = document.getElementById('pomodoro_total_hour');
    window.total_time = setInterval(function () {
        sec++;
        if (sec > 59) {
            sec = 0;
            minute++;
            if (minute > 59) {
                minute = 0;
                hour++;
                hour_space.innerHTML = addZeroWhenUnderTen(hour);
            }
            minute_space.innerHTML = addZeroWhenUnderTen(minute);
        }
        second_space.innerHTML = addZeroWhenUnderTen(sec);



    }, 1000)

}

// Design functions

/**
 * Function to style a cycle box when a pomodoro cycle is completed
 * @param {number} cycle 
 * @param {string} status
 * @returns void
 */
function colorCycleBoxes(cycle, status) {
    switch (status) {
        case "current":
            color = 'yellow';
            break;

        case "done":
            color = '#AAFB7B';
            break;
    }
    if (document.getElementById("cycle " + cycle)) {
        document.getElementById("cycle " + cycle).style.backgroundColor = color;
    }
}

/**
 * Function to update the alert following the current loop
 * The previous status variable is useful to delete the previous background
 * @param {string} status 
 * @param {string} previous_status 
 */
function showAlert(status, previous_status) {
    let alert;
    let previous_background;
    switch (status) {

        case "worktime":
            alert = "Phase de travail !";
            background = "warning"
            break;

        case "resttime":
            alert = "STOP ! Phase de pause ! ";
            background = "success"
            break;

        case "end":
            alert = "POMODORO terminé ! Félicitations ! ";
            background = "danger"
            break;
    }
    switch (previous_status) {

        case "start":
            previous_background = "info"
            break;

        case "worktime":
            previous_background = "warning"
            break;

        case "resttime":
            previous_background = "success"
            break;

        case "end":
            previous_background = "danger"
            break;
    }

    let alertBox = document.getElementById("alert");
    alertBox.style.display = "block";
    if (previous_status != null) {
        alertBox.classList.remove("bg-" + previous_background);
    }
    alertBox.classList.add("bg-" + background);
    alertBox.innerHTML = alert;
}

// Audio functions 

/**
 * Function used to play the audio file when a loop is done 
 */
function playAudio() {
    let audio = document.getElementById("audio");
    audio.play();
}

/**
 * Function used to simulate a user's interaction, to play the audio.
 * (Google's policy forbid website to play audios without a user toggle it, so this function simulate a user's interaction)
 * https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
 */
function clicksoundButton() {
    let button = document.getElementById("activateAudio");
    button.click();
}

// AJAX functions 

/**
 * AJAX function to get datas about pomodoro when we click on each button (datas on JSON file)
 * @param {string} pomodoro_name
 */
function displayPomodoroInformations(pomodoro_name) {

    let xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "pomodoroinformations.json");

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == "200") {
            let infos = JSON.parse(xhttp.responseText);
            document.getElementsByClassName("selected_pomodoro_name")[0].innerHTML = infos[pomodoro_name]["name"];
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName("selected_pomodoro_worktime")[i].innerHTML = infos[pomodoro_name]["worktime"];
                document.getElementsByClassName("selected_pomodoro_restime")[i].innerHTML = infos[pomodoro_name]["resttime"];
                document.getElementsByClassName("selected_pomodoro_cycle")[i].innerHTML = infos[pomodoro_name]["cycle"];
                document.getElementById("selected_pomodoro_name").setAttribute("value", pomodoro_name);
                document.getElementById("selected_pomodoro_worktime").setAttribute("value", infos[pomodoro_name]["worktime"]);
                document.getElementById("selected_pomodoro_restime").setAttribute("value", infos[pomodoro_name]["resttime"]);
                document.getElementById("selected_pomodoro_cycle").setAttribute("value", infos[pomodoro_name]["cycle"]);
                let total_time = (infos[pomodoro_name]["worktime"] * infos[pomodoro_name]["cycle"] + infos[pomodoro_name]["resttime"] * (infos[pomodoro_name]["cycle"] - 1))
                document.getElementById("total_time").innerHTML = convertMinutesToHours(total_time);
            }
        }

    }
    xhttp.send(null);
}
















