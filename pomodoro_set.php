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
    <?php require('partials/_header.php'); ?>
    <div class="container mt-4 border-bottom mb-4">
        <h1 class="text-center"> POMODORO-TIMER</h1>
    </div>
    <div class="container">
        <p class="paragraph">Voici les POMODORO les plus populaires : </p>
        <div class="row justify-content-center">
            <div class="col-xs-12 col-lg-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="25/5" class="btn btn-danger pomodoroButton"> POMODORO 25/5</button>
            </div>
            <div class="col-xs-12 col-lg-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="30/10" class="btn btn-danger pomodoroButton"> POMODORO 30/10</button>
            </div>
            <div class="col-xs-12 col-lg-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="45/15" class="btn btn-danger pomodoroButton"> POMODORO 45/15</button>
            </div>
            <div class="col-xs-12 col-lg-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="50/10" class="btn btn-danger pomodoroButton"> POMODORO 50/10</button>
            </div>
            <div class="col-xs-12 col-lg-2 mr-2 mt-4 d-flex justify-content-center">
                <button id="personalized" class="btn btn-danger pomodoroButton"> PERSONNALISE </button>
            </div>
        </div>
        <div class="row mt-4">
            <p id="remplir" class="text-center paragraph"> Choisissez un pomodoro pour avoir les détails sur celui ci . </p>
        </div>
        <div class="row m-4" id="personalizedForm">
            <div style="width:95%" class="bg-white rounded pr-2 pl-2 pt-4 pb-5 ml-auto mr-auto">
                <h4 class="text-center">Indiquez les paramètres de votre pomodoro ! </h4>
                <form action="#" class="d-flex justify-content-center mt-4">
                    <table>
                        <tr>
                            <td class="d-flex justify-content-end">
                                <label class="p-2 text-right" for="workTime">Donnez vous une période de travail (en minutes) : </label>
                            </td>
                            <td>
                                <input class="p-2 text-center" min="1" type="number" name="workTime" id="personalizedWorkTime">
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center text-danger" class="errorMessage" id="errorMessageWorkTime" colspan="2">
                            </td>
                        </tr>
                        <tr class="mt-4">
                            <td class="d-flex justify-content-end">
                                <label class="p-2 text-right " for="restTime">Donnez vous une période de pause (en minutes) : </label>
                            </td>
                            <td>
                                <input class="p-2 text-center" min="1" type="number" name="restTime" id="personalizedRestTime">
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center text-danger" class="errorMessage" id="errorMessageRestTime" colspan="2">
                            </td>
                        </tr>
                        <tr>
                            <td class="d-flex justify-content-end">
                                <label class="p-2" for="cycle">Donnez vous un cycle : </label>
                            </td>
                            <td>
                                <input class="p-2 text-center" min="1" type="number" name="cycle" id="personalizedCycle">
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center text-danger" class="errorMessage" id="errorMessageCycle" colspan="2">
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        <div class="row mt-5">
            <table style="width:80%" class="me-auto ms-auto border border-dark p-4 bg-white">
                <tbody>
                    <tr class="mb-2 p-4">
                        <th class="p-4">POMODORO selectionné </th>
                        <td class="text-center selectedPomodoroName p-4">
                        </td>
                    </tr>
                    <tr class="mb-2 p-4">
                        <th class="p-4">Temps de travail (minutes)</th>
                        <td class=" text-center selectedPomodoroWorkTime p-4">
                        </td>
                    </tr>
                    <tr class="mb-2">
                        <th class="p-4">Temps de pause (minutes)</th>
                        <td class=" text-center selectedPomodoroRestTime p-4">

                        </td>
                    </tr>
                    <tr class="mb-2">
                        <th class="p-4">Cycle</th>
                        <td class=" text-center selectedPomodoroCycle p-4">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="row mt-4">
            <p id="pomodoroExplaination" class="paragraph text-center">Ce pomodoro se compose de <span class="selectedPomodoroCycle"></span> cycles. Un cycle se compose de <span class="selectedPomodoroWorkTime"></span> minutes de travail, ainsi que <span class="selectedPomodoroRestTime"></span> minutes de pause.</p>
            <p class="totalTime text-center paragraph">Durée totale du pomodoro :</p>
            <p id="totalTime" class="text-center"></p>
        </div>
        <div class="row">
            <div class="col">
                <form action="pomodoro_timer.php" method="post" id="pomodoroSendingForm" class="d-flex justify-content-center mt-4">
                    <input id="selectedPomodoroName" type="hidden" name="selectedPomodoroName" value="#">
                    <input id="selectedPomodoroWorkTime" type="hidden" name="selectedPomodoroWorkTime" value="#">
                    <input id="selectedPomodoroRestTime" type="hidden" name="selectedPomodoroRestTime" value="#">
                    <input id="selectedPomodoroCycle" type="hidden" name="selectedPomodoroCycle" value="#">
                    <button type="submit" id="submitButton" class="btn btn-primary"> Commencer le Pomodoro</button>
                </form>
            </div>
        </div>
    </div>
    <?php require('partials/_footer.php') ?>
</body>

</html>