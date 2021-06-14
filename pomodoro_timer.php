<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="assets/app.css">
</head>

<body>
    <div class="container mt-4">
        <div class="row">
            <h1 class="text-center"> POMODORO </h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <ul class="d-flex flex-row justify-content-center">
                <li class="rounded border p-3 m-3 step_number">1</li>
                <li class="rounded border p-3 m-3 step_number">2</li>
                <li class="rounded border p-3 m-3 step_number">3</li>
                <li class="rounded border p-3 m-3 step_number">4</li>
                <li class="rounded border p-3 m-3 step_number">5</li>
            </ul>
        </div>
        <div class="row">
            <img src="http://placehold.it/1000x300" alt="">
        </div>
        <div class="row">
            <p id="cycle_timer" class="text-center"><span id="pomodoro_cycle_hour"></span> : <span id="pomodoro_cycle_minute">1</span> : <span id="pomodoro_cycle_second"></span></p>
        </div>
        <div class="row">
            <p class="text-center">Temps total : <span id="total_time"> <span id="pomodoro_total_hour"></span> : <span id="pomodoro_total_minute"></span> : <span id="pomodoro_total_second"></span></span></p>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-end">
                <button id="pomodoro_pause_button" class="btn btn-warning"> Mettre en pause </button>
            </div>
            <div class="col d-flex justify-content-start">
                <button id="pomodoro_stop_button" class="btn btn-danger"> Arreter le pomodoro </button>
            </div>
        </div>
    </div>

    <script src="assets/app.js"></script>
    <script>
        let worktime = <?php echo htmlspecialchars($_POST['selected_pomodoro_worktime']) ?>;
        let resttime = <?php echo htmlspecialchars($_POST['selected_pomodoro_resttime']) ?>;
        let cycle = <?php echo htmlspecialchars($_POST['selected_pomodoro_cycle']) ?>;
        timer();
    </script>

</body>

</html>