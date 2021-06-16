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
        <div class="row">
            <p>Voici les POMODORO les plus populaires : </p>
            <div class="col">
                <button id="25/5" class="btn btn-danger"> POMODORO 25/5</button>
            </div>
            <div class="col">
                <button id="30/10" class="btn btn-danger"> POMODORO 30/10</button>
            </div>
            <div class="col">
                <button id="45/15" class="btn btn-danger"> POMODORO 45/15</button>
            </div>
            <div class="col">
                <button id="50/10" class="btn btn-danger"> POMODORO 50/10</button>
            </div>
            <div class="col">
                <button id="personalized" class="btn btn-danger"> PERSONNALISE </button>
            </div>
        </div>
        <div class="row mt-4">
            <p id="remplir" class="text-center"> Choisissez un pomodoro pour avoir les détails sur celui ci . </p>
            <p id="pomodoro_explaination">Ce pomodoro se compose de <span class="selected_pomodoro_cycle"></span> cycles. Un cycle se compose de <span class="selected_pomodoro_worktime"></span> minutes de travail, ainsi que <span class="selected_pomodoro_restime"></span> minutes de pause.</p>
        </div>
        <div class="row mt-5">
            <table class="me-auto ms-auto border w-50">
                <tbody class="p-4">
                    <tr class="mb-2">
                        <th>POMODORO selectionné </th>
                        <td class=" text-center selected_pomodoro_name"></td>
                    </tr>
                    <tr class="mb-2">
                        <th>Temps de travail (minutes)</th>
                        <td class=" text-center selected_pomodoro_worktime"></td>
                    </tr>
                    <tr class="mb-2">
                        <th>Temps de pause (minutes)</th>
                        <td class=" text-center selected_pomodoro_restime"></td>
                    </tr>
                    <tr class="mb-2">
                        <th>Cycle</th>
                        <td class=" text-center selected_pomodoro_cycle"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row mt-4">
            <p class="total_time text-center">Durée totale du pomodoro : <span id="total_time"></span></p>
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
    <script src="assets/app.js"></script>
</body>

</html>