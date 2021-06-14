
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
 * @param {integer} total_time 
 */
function convertMinutesToHours(total_time) {
    let hours = Math.floor(total_time / 60);
    let minutes = total_time % 60;

    let converted_hours = hours + " h " + minutes + " m.";
    return converted_hours;
}

/**
 *  * Function to set a timer for one cycle
 * @param {integer} worktime 
 * @param {integer} resttime 
 */
function timer() {
    let sec = 00;
    let inter = setInterval(() => {
        sec--;
        document.getElementById('pomodoro_cycle_second').innerHTML = sec;
        if (sec < 0) {
            sec = 59;
            document.getElementById('pomodoro_cycle_second').innerHTML = sec;
            document.getElementById('pomodoro_cycle_minute').innerHTML--;
        }
        if (document.getElementById('pomodoro_cycle_second').innerHTML == 0 && document.getElementById('pomodoro_cycle_minute').innerHTML == 0) {
            clearInterval(inter);
        }
    }, 1000);

}