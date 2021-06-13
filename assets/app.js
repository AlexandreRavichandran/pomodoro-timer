
document.getElementById("25/5").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro 25/5")
});
document.getElementById("30/10").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro 30/10")
});
document.getElementById("45/15").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro 45/15")
});
document.getElementById("50/10").addEventListener("click", function () {
    displayPomodoroInformations("Pomodoro 50/10")
});

function displayPomodoroInformations(pomodoro_name) {

    let xhttp = new XMLHttpRequest();
    xhttp.overrideMimeType("application/json");
    xhttp.open("GET", "pomodoroinformations.json");

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == "200") {
            let infos = JSON.parse(xhttp.responseText);
            document.getElementsByClassName("selected_pomodoro_name")[0].innerHTML = pomodoro_name;
            for (let i = 0; i < 2; i++) {
                document.getElementsByClassName("selected_pomodoro_worktime")[i].innerHTML = infos[pomodoro_name]["worktime"];
                document.getElementsByClassName("selected_pomodoro_restime")[i].innerHTML = infos[pomodoro_name]["resttime"];
                document.getElementsByClassName("selected_pomodoro_cycle")[i].innerHTML = infos[pomodoro_name]["cycle"];
            }
        }

    }
    xhttp.send(null);
}




