<?php
require_once('functions.php');
if (!isset($_POST['selectedPomodoroName'])) {
    header('Location:pomodoro_set.php');
}
$selectedPomodoro = [
    "name" => htmlspecialchars($_POST['selectedPomodoroName']),
    "workTime" => htmlspecialchars($_POST['selectedPomodoroWorkTime']),
    "restTime" => htmlspecialchars($_POST['selectedPomodoroRestTime']),
    "cycle" => htmlspecialchars($_POST['selectedPomodoroCycle']),
]
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pomodoro-timer</title>
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="assets/app.css">
</head>

<body>
    <?php require('partials/_header.php') ?>
    <div class="container">
        <div class="row">
            <h1 class="text-center"> POMODORO </h1>
        </div>
    </div>
    <div class="container">
        <div class="row mb-2">
            <ul class="d-flex flex-row flex-wrap justify-content-center">
                <?php addCycleBoxes($selectedPomodoro['cycle']) ?>
            </ul>
        </div>
        <div class="row d-flex justify-content-center">
            <p id="alert" class="p-4 w-75 rounded text-center text-white h4"></p>
        </div>
        <!--<div class="row pictures">
            <img src="http://placehold.it/1000x300" alt="">
        </div>-->
        <div class="row">
            <p id="cycleTimer" class="text-center"><span id="pomodoroCycleHour">00</span> : <span id="pomodoroCycleMinute"><?php echo $selectedPomodoro['workTime'] ?></span> : <span id="pomodoroCycleSecond">00</span></p>
        </div>
        <div class="row">
            <p id="totalTime" class="text-center">Temps total : <span id="pomodoroTotalHour">00</span> : <span id="pomodoroTotalMinute">00</span> : <span id="pomodoroTotalSecond">00</span></p>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-end">
                <button onclick="pomodoroPause('pause')" id="pomodoroPauseButton" class="btn btn-warning"> Mettre en pause </button>
            </div>
            <div class="col d-flex justify-content-start">
                <button id="pomodoroStopButton" class="btn btn-danger"> Arreter le pomodoro </button>
            </div>
        </div>
    </div>
    <?php require('partials/_footer.php') ?>
    <div class="audio">
        <audio id="audio">
            <source src="medias/audio/boucle_end_sound.ogg" type="audio/ogg">
        </audio>
        <button class="d-none" onclick="playAudio()" id="activateAudio"> oui</button>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="assets/app.js"></script>
    <script>
        let workTime = <?php echo $selectedPomodoro['workTime'] ?>;
        let restTime = <?php echo $selectedPomodoro['restTime'] ?>;
        let cycle = <?php echo $selectedPomodoro['cycle'] ?>;
        countdownTimer(workTime, restTime, cycle);
        totalTimer();
    </script>

</body>

</html>