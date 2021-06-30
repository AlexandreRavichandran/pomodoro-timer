// FUNCTIONS LIBRARY
// All Javascript functions used in this website are setted here.


// General functions

/**
 * Function to convert minutes into a hours format (H:i:s)
 * @param {number} totalTime 
 * @param {boolean} separatedValue //set true if the returned hours and minutes have to be separated/in a string
 * @returns mixed
 */
function convertMinutesToHours(totalTime, separatedValue = false) {
    let hours = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;
    if (separatedValue === false) {
        let convertedHours = hours + " h " + minutes + " m";
        return convertedHours;
    } else {
        return convertedHours = [hours, minutes];
    }
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
 * Function to initialize the pomodoro Timer, verify the current cycle, current period (worktime of resttime) and calls timer for 
 * the next period
 * 
 * This function is automatically called when the timer finished a period
 * 
 * @param {number} timerWorkingTime 
 * @param {number} timerResttingTime 
 * @param {number} cycle 
 * @param {number} loop  //setted automatically
 * @returns void
 */
function pomodoroManager(timerWorkingTime, timerResttingTime, cycle, loop = 1) {
    document.getElementById("pomodoroStartButton").style.display = "none";

    //Initialization of the timer, happens when the timer starts
    window.loop = loop;
    if (!window.cycle) {
        window.cycle = 0;
        console.log('initialization')
    }
    // Happens when we are on Pause cycle
    if (evenOrNot(window.loop)) {
        document.getElementById('pomodoroCycleMinute').innerHTML = addZeroWhenUnderTen(timerResttingTime);
        console.log("pause cycle " + window.cycle)
        showAlert("restTime", "workTime");
        clicksoundButton();

        // Happens when we are on working cycle
    } else {
        document.getElementById('pomodoroCycleMinute').innerHTML = addZeroWhenUnderTen(timerWorkingTime);
        window.cycle++;
        colorCycleBoxes(window.cycle, "current")
        colorCycleBoxes(window.cycle - 1, "done")
        console.log("work cycle " + window.cycle)
        showAlert("workTime", "restTime");
        clicksoundButton();

    }

    let sec = 00;
    // The timer 
    timer(sec, timerWorkingTime, timerResttingTime, cycle);


}

/**
 * Function to apply a the timer for one period (worktime of resttime). When the timer stops, il call the pomodoroManager function to check
 * which period to call next
 * @param {number} sec 
 * @param {number} timerWorkingTime 
 * @param {number} timerResttingTime 
 * @param {number} cycle 
 */
function timer(sec, timerWorkingTime, timerResttingTime, cycle) {
    document.getElementById("pomodoroPauseButton").style.display = "block";
    document.getElementById("pomodoroResumeButton").style.display = "none";

    window.inter = setInterval(function () {
        sec--;
        document.getElementById('pomodoroCycleSecond').innerHTML = addZeroWhenUnderTen(sec);
        if (sec < 0) {
            sec = 59;
            document.getElementById('pomodoroCycleSecond').innerHTML = addZeroWhenUnderTen(sec);
            document.getElementById('pomodoroCycleMinute').innerHTML = addZeroWhenUnderTen(document.getElementById('pomodoroCycleMinute').innerHTML - 1);
        }
        //Checking if the current cycle is stopped
        if (document.getElementById('pomodoroCycleSecond').innerHTML == 0 && document.getElementById('pomodoroCycleMinute').innerHTML == 0) {
            clearInterval(inter);
            window.loop++;
            console.log("boucle = " + window.loop)
            //checking if all cycles are done
            console.log(cycle);
            if (window.cycle === cycle) {
                clicksoundButton();
                colorCycleBoxes(window.cycle, "done")
                showAlert("end", "workTime");
                console.log('Pomodoro terminé');
                stopPomodoroTimer(window.cycle);
            } else {
                pomodoroManager(timerWorkingTime, timerResttingTime, cycle, window.loop);
            }
        }

    }, 1000);
}

/**
 * Function to pause the pomodoro timer
 */
function pausePomodoroTimer() {

    clearInterval(window.inter);
    remainingSeconds = document.getElementById('pomodoroCycleSecond').innerHTML;
    document.getElementById('pomodoroResumeButton')
        .setAttribute('onclick', 'timer(' + remainingSeconds + ', workTime, restTime, cycle)')
    document.getElementById('pomodoroResumeButton').style.display = "block";
    document.getElementById('pomodoroPauseButton').style.display = "none";
    console.log('paused');
}

/**
 * Function to apply the timer to display the total pomodoro time
 * This timer never stops, even if the user press the pause button
 */
function totalTimer() {
    let sec = 0;
    let minute = 0;
    let hour = 0;
    let secondSpace = document.getElementById("pomodoroTotalSecond");
    let minuteSpace = document.getElementById('pomodoroTotalMinute');
    let hourSpace = document.getElementById('pomodoroTotalHour');
    window.totalTime = setInterval(function () {
        sec++;
        if (sec > 59) {
            sec = 0;
            minute++;
            if (minute > 59) {
                minute = 0;
                hour++;
                hourSpace.innerHTML = addZeroWhenUnderTen(hour);
            }
            minuteSpace.innerHTML = addZeroWhenUnderTen(minute);
        }
        secondSpace.innerHTML = addZeroWhenUnderTen(sec);



    }, 1000)

}

/**
 * Function to stop the pomodoro timer, the total timer, and show button to create a new pomodoro
 * @param {number} cycle 
 */
function stopPomodoroTimer(cycle) {

    clearInterval(window.totalTime);
    clearInterval(window.inter);
    document.getElementById('pomodoroCycleHour').innerHTML = '00';
    document.getElementById('pomodoroCycleMinute').innerHTML = '00';
    document.getElementById('pomodoroCycleSecond').innerHTML = '00';
    document.getElementById('pomodoroTotalHour').innerHTML = '00';
    document.getElementById('pomodoroTotalMinute').innerHTML = '00';
    document.getElementById('pomodoroTotalSecond').innerHTML = '00';
    for (let i = 0; i < cycle + 1; i++) {
        colorCycleBoxes(i, "done");
    }
    let alertBox = document.getElementById("alert");
    alertBox.style.display = "none";
    document.getElementById("pomodoroStartButton").style.display = "none";
    document.getElementById("pomodoroPauseButton").style.display = "none";
    document.getElementById("pomodoroStopButton").style.display = "none";
    document.getElementById('pomodoroResumeButton').style.display = "none";
    document.getElementById("redirectionNewPomodoro").style.display = "block";
    console.log('ok');
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
 * @param {string} previousStatus 
 */
function showAlert(status, previousStatus) {
    let alert;
    let previousBackground;
    switch (status) {

        case "workTime":
            alert = "Phase de travail !";
            background = "warning"
            break;

        case "restTime":
            alert = "STOP ! Phase de pause ! ";
            background = "success"
            break;

        case "end":
            alert = "POMODORO terminé ! Félicitations ! ";
            background = "danger"
            break;
    }
    switch (previousStatus) {

        case "start":
            previousBackground = "info"
            break;

        case "workTime":
            previousBackground = "warning"
            break;

        case "restTime":
            previousBackground = "success"
            break;

        case "end":
            previousBackground = "danger"
            break;
    }

    let alertBox = document.getElementById("alert");
    alertBox.style.display = "block";
    if (previousStatus != null) {
        alertBox.classList.remove("bg-" + previousBackground);
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
 * @param {string} pomodoroName
 */
function displayPomodoroInformations(pomodoroName) {

    let xhttp = new XMLHttpRequest();

    xhttp.open("GET", "data.xml");

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == "200") {
            let infos = xhttp.responseText;
            let parser = new DOMParser;
            xml = parser.parseFromString(infos, "text/xml");
            let name = xml.querySelector('pomodoro[type="' + pomodoroName + '"] name').innerHTML;
            let worktime = xml.querySelector('pomodoro[type="' + pomodoroName + '"] worktime').innerHTML;
            let resttime = xml.querySelector('pomodoro[type="' + pomodoroName + '"] resttime').innerHTML;
            let cycle = xml.querySelector('pomodoro[type="' + pomodoroName + '"] cycle').innerHTML;
            document.getElementsByClassName("selectedPomodoroName")[0].innerHTML = name;
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName("selectedPomodoroWorkTime")[i].innerHTML = worktime;
                document.getElementsByClassName("selectedPomodoroRestTime")[i].innerHTML = resttime;
                document.getElementsByClassName("selectedPomodoroCycle")[i].innerHTML = cycle;
                document.getElementById("selectedPomodoroName").setAttribute("value", pomodoroName);
                document.getElementById("selectedPomodoroWorkTime").setAttribute("value", worktime);
                document.getElementById("selectedPomodoroRestTime").setAttribute("value", resttime);
                document.getElementById("selectedPomodoroCycle").setAttribute("value", cycle);
                calculateTotalPomodoroTime();
            }
            document.getElementById("personalizedForm").style.display = "none";
            document.getElementById('submitButton').classList.remove('disabled');
        }

    }
    xhttp.send(null);
}

// Form manage functions

/**
 * Function used when user choose to personalize his pomodoro.
 * Useful to update the recap table just below the personalisation form
 * @param {string} field Put the argument with camel case AND Capitalize first Letter (i.e MyVariable or Variable)
 */
function managePersonalizedPomodoroForm(field) {

    document.getElementById("selectedPomodoro" + field).setAttribute("value", Math.round(document.getElementById('personalized' + field).value));

    for (let i = 0; i < 2; i++) {
        document.getElementsByClassName('selectedPomodoro' + field)[i].innerHTML = Math.round(document.getElementById('personalized' + field).value);

    }

}

/**
 * Function to calculate the total pomodoro time 
 * Used when a pomoodoro is choosed or when a pomodoro is setted with personalized form
 * @returns mixed
 */
function calculateTotalPomodoroTime() {
    let workTime = document.getElementsByClassName("selectedPomodoroWorkTime")[0].innerHTML;
    let restTime = document.getElementsByClassName("selectedPomodoroRestTime")[0].innerHTML;
    let cycle = document.getElementsByClassName("selectedPomodoroCycle")[0].innerHTML;
    let totalTime = workTime * cycle + restTime * (cycle - 1);
    if (totalTime >= 0) {
        document.getElementById("totalTime").innerHTML = convertMinutesToHours(totalTime);
    } else {
        document.getElementById("totalTime").innerHTML = '';
    }
}

/**
 * Function used to check if values inputed in the personalized pomodoro form are correct
 * Checked parameters :
 *      - Worktime and Restime must be numbers between 1 and 59 included,
 *      - Cycle must be a number vetween 1 and 20 included
 * @param {string} field Put the argument with camel case AND Capitalize first Letter (i.e MyVariable or Variable)
 * @returns void
 */
function checkValue(field) {
    let elementToCheck = document.getElementById('personalized' + field);
    if (field === 'WorkTime' || field === 'RestTime') {
        if (!isNaN(elementToCheck.value) && (elementToCheck.value <= 0 || elementToCheck.value > 59)) {
            error = 'La période de travail et de pause d\'un cycle doit etre compris entre 1 et 59 minutes.';
            elementToCheck.style.backgroundColor = 'yellow';

        } else if (isNaN(elementToCheck.value)) {
            error = 'Les perodes de travail et de pause doivent etre des nombres.';
            elementToCheck.style.backgroundColor = 'yellow';
        } else {
            error = '';
            elementToCheck.style.backgroundColor = '';
        }
    } else if (field === 'Cycle') {
        if (!isNaN(elementToCheck.value) && (elementToCheck.value <= 0 || elementToCheck.value > 20)) {
            error = 'La valeur du cycle doit etre compris entre 1 et 20 cycles.';
            elementToCheck.style.backgroundColor = 'yellow';
        } else {
            error = '';
            elementToCheck.style.backgroundColor = '';
        }
    }
    document.getElementById('errorMessage' + field).innerHTML = error;
    if (error != '') {
        document.getElementById('submitButton').classList.add('disabled');
    } else {
        document.getElementById('submitButton').classList.remove('disabled');
        managePersonalizedPomodoroForm(field);
        calculateTotalPomodoroTime();
    }
}
