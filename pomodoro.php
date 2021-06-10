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
                <button id="10/5" class="btn btn-danger"> POMODORO 25/5</button>
            </div>
            <div class="col">
                <button class="btn btn-danger"> POMODORO 30/10</button>
            </div>
            <div class="col">
                <button class="btn btn-danger"> POMODORO 45/15</button>
            </div>
            <div class="col">
                <button class="btn btn-danger"> POMODORO 50/10</button>
            </div>
        </div>
        <div class="row mt-5">
            <table class="me-auto ms-auto border ">
                <tbody class="p-4">
                    <tr>
                        <th>POMODORO selectionné </th>
                        <td id="pomodoro_name"></td>
                    </tr>
                    <tr>
                        <th>Temps de travail (minutes)</th>
                        <td id="pomodoro_worktime"></td>
                    </tr>
                    <tr>
                        <th>Temps de pause (minutes)</th>
                        <td id="pomodoro_restime"></td>
                    </tr>
                    <tr>
                        <th>Definissez un cycle</th>
                        <td id="pomodoro_cycle"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>