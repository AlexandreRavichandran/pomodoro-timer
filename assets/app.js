function fillTable(pomodoro_selected_name, pomodoro_selected_worktime, pomodoro_selected_restime, pomodoro_selected_cycle) {

    let pomodoro_name = document.getElementById('pomodoro_name');
    let pomodoro_worktime = document.getElementById('pomodoro_worktime');
    let pomodoro_restime = document.getElementById('pomodoro_restime');
    let pomodoro_cycle = document.getElementById('pomodoro_cycle');

    pomodoro_selected_name.innerHTML = pomodoro_name.value;
    pomodoro_selected_worktime.innerHTML = pomodoro_worktime.value;
    pomodoro_selected_restime.innerHTML = pomodoro_restime.value;
    pomodoro_selected_cycle.innerHTML = pomodoro_cycle.value;
}

document.getElementById("")