
document.getElementById("25/5").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro_25/5")
});
document.getElementById("30/10").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro_30/10")
});
document.getElementById("45/15").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro_45/15")
});
document.getElementById("50/10").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro_50/10")
});















// FUNCTIONS LIBRARY

/**
 * AJAX function to get datas about pomodoro when we click on each button (datas on Json file)
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
 * Function to apply the countdown timer following a workting time, resting time, number of cycles and automatically setted loop
 * 
 * @param {number} timer_working_time 
 * @param {number} timer_restting_time 
 * @param {number} cycle 
 * @param {number} loop  //setted automatically
 * @returns void
 */
function timer(timer_working_time, timer_restting_time, cycle, loop = 1) {
    window.loop = loop;
    if (!window.cycle) {
        window.cycle = 0;
        console.log('initialization')
    }
    if (evenOrNot(window.loop)) {
        document.getElementById('pomodoro_cycle_minute').innerHTML = addZeroWhenUnderTen(timer_restting_time);
        console.log("pause cycle " + window.cycle)
    } else {
        document.getElementById('pomodoro_cycle_minute').innerHTML = addZeroWhenUnderTen(timer_working_time);
        window.cycle++;
        colorCycleBoxes(window.cycle, "current")
        colorCycleBoxes(window.cycle - 1, "done")
        console.log("work cycle " + window.cycle)
    }
    let sec = 00;
    window.inter = setInterval(() => {
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
            } else {
                timer(timer_working_time, timer_restting_time, cycle, window.loop);
            }
        }

    }, 1000);

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
            color = 'green';
            break;
    }
    if (document.getElementById("cycle " + cycle)) {
        document.getElementById("cycle " + cycle).style.backgroundColor = color;
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
