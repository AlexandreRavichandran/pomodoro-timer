<?php $pageName = 'pomodoro';
require_once('functions.php');
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POMODORO-timer - pomodoro</title>
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="assets/app.css">

</head>

<body>
    <?php include_once('partials/_header.php'); ?>
    <div class="container mt-4 border-bottom mb-4">
        <h1 class="text-center"> POMODORO-TIMER</h1>
    </div>
    <div class="container">
        <p class="paragraph">Voici les POMODORO les plus populaires : </p>
        <div class="row justify-content-center">
            <div class="col-xs-12 col-md-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="25/5" class="btn btn-danger pomodoroButton"> POMODORO 25/5</button>
            </div>
            <div class="col-xs-12 col-md-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="30/10" class="btn btn-danger pomodoroButton"> POMODORO 30/10</button>
            </div>
            <div class="col-xs-12 col-md-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="45/15" class="btn btn-danger pomodoroButton"> POMODORO 45/15</button>
            </div>
            <div class="col-xs-12 col-md-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="50/10" class="btn btn-danger pomodoroButton"> POMODORO 50/10</button>
            </div>
            <div class="col-xs-12 col-md-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="personalized" class="btn btn-danger pomodoroButton"> PERSONNALISE </button>
            </div>
        </div>
        <div class="row mt-4">
            <p id="remplir" class="text-center paragraph"> Choisissez un pomodoro pour avoir les détails sur celui ci . </p>
            <p id="pomodoro_explaination" class="paragraph">Ce pomodoro se compose de <span class="selected_pomodoro_cycle"></span> cycles. Un cycle se compose de <span class="selected_pomodoro_worktime"></span> minutes de travail, ainsi que <span class="selected_pomodoro_restime"></span> minutes de pause.</p>
        </div>
        <div class="row mt-5">
            <table class="me-auto ms-auto border border-dark w-50 p-4 bg-white">
                <tbody>
                    <tr class="mb-2 p-4">
                        <th class="p-4">POMODORO selectionné </th>
                        <td class=" text-center selected_pomodoro_name p-4"></td>
                    </tr>
                    <tr class="mb-2 p-4">
                        <th class="p-4">Temps de travail (minutes)</th>
                        <td class=" text-center selected_pomodoro_worktime p-4"></td>
                    </tr>
                    <tr class="mb-2">
                        <th class="p-4">Temps de pause (minutes)</th>
                        <td class=" text-center selected_pomodoro_restime p-4"></td>
                    </tr>
                    <tr class="mb-2">
                        <th class="p-4">Cycle</th>
                        <td class=" text-center selected_pomodoro_cycle p-4"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row mt-4">
            <p class="total_time text-center paragraph">Durée totale du pomodoro :</p>
            <p id="total_time" class="text-center"></p>
        </div>
        <div class="row">
            <div class="col">
                <form action="pomodoro_timer.php" method="post" id="pomodoro_sending_form" class="d-flex justify-content-center mt-4">
                    <input id="selected_pomodoro_name" type='hidden' name='selected_pomodoro_name' value='#'>
                    <input id="selected_pomodoro_worktime" type='hidden' name='selected_pomodoro_worktime' value='#'>
                    <input id="selected_pomodoro_restime" type='hidden' name='selected_pomodoro_resttime' value='#'>
                    <input id="selected_pomodoro_cycle" type='hidden' name='selected_pomodoro_cycle' value='#'>
                    <button type='submit' class=" btn btn-primary"> Commencer le Pomodoro</button>
                </form>
            </div>
        </div>
    </div>
    <?php include('partials/_footer.php') ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="assets/app.js"></script>
</body>

</html>