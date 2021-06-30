<?php
require_once('functions.php');
if (
    !isset($_POST) ||
    htmlspecialchars($_POST['selectedPomodoroWorkTime']) > 59 || htmlspecialchars($_POST['selectedPomodoroWorkTime']) < 1 ||
    htmlspecialchars($_POST['selectedPomodoroRestTime']) > 59 || htmlspecialchars($_POST['selectedPomodoroRestTime']) < 1 ||
    htmlspecialchars($_POST['selectedPomodoroCycle']) > 20 || htmlspecialchars($_POST['selectedPomodoroCycle']) < 1
) {
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
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="assets/css/style.css">
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
            <div class="col d-flex justify-content-center mt-4">
                <button id="pomodoroStartButton" onclick="totalTimer();pomodoroManager(workTime, restTime, cycle)" class="btn btn-primary beforePomodoro"> Demarrer le Pomodoro ! </button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col d-flex justify-content-center mt-4">
                <button onclick="pausePomodoroTimer()" id="pomodoroPauseButton" class="btn btn-warning"> Mettre en pause </button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col d-flex justify-content-center mt-4">
                <button onclick="" id="pomodoroResumeButton" class="btn btn-success"> Reprendre </button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col d-flex justify-content-center mt-4">
                <button onclick="stopPomodoroTimer(<?php echo $selectedPomodoro['cycle'] ?>)" id="pomodoroStopButton" class="btn btn-danger"> Arreter le pomodoro </button>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
        <a id="redirectionNewPomodoro" href="pomodoro_set.php" class="btn btn-primary">Recreer un nouveau pomodoro </a>
    </div>
    <div class="audio">
        <audio id="audio">
            <source src="medias/audio/boucle_end_sound.ogg" type="audio/ogg">
        </audio>
        <button class="d-none" onclick="playAudio()" id="activateAudio"></button>
    </div>
    <?php require('partials/_footer.php') ?>
    <script>
        let workTime = <?php echo $selectedPomodoro['workTime'] ?>;
        let restTime = <?php echo $selectedPomodoro['restTime'] ?>;
        let cycle = <?php echo $selectedPomodoro['cycle'] ?>;
    </script>
</body>

</html>