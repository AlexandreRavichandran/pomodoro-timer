<?php $pageName = 'index';
require_once('functions.php');
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POMODORO-timer - Accueil</title>
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="assets/app.css">
</head>

<body>
    <?php require('partials/_header.php'); ?>
    <div class="container mt-2 border-bottom border-white mb-4">
        <h1 class="text-center"> POMODORO-TIMER</h1>
        <h2 class="text-center">La solution pour vos problèmes de concentration</h2>
    </div>
    <div class="container mb-4 d-flex flex-column">
        <div class="row">
            <div class="col-xs-12 col-lg-6 p-4  bg-white rounded ">
                <div class="row">
                    <h2 class="text-center border-bottom border-black pb-2"> Pomodo...quoi? </h2>
                    <p class="paragraph pt-2">La technique POMODORO (ou tout simplement le pomodoro), est une technique de gestion de travail permettant d'optimiser au maximum la concentration. Elle se base sur une alternance entre un temps de travail et un temps de pause, durant un certain nombre de cycle.</p>
                    <p class="paragraph mt-2 text-center">Sceptique ? Essayez ! </p>
                </div>
                <div class="row mt-4">
                    <h2 class="text-center border-bottom border-black  pb-2 ">Fonctionnement</h2>
                    <p class="paragraph pt-2">La technique POMODORO est simple. Il existe differents types de pomodoro dit "standards" :</p>
                    <ul class="list-group text-center pomodoroList">
                        <li class="list-item mb-2"><strong>Pomodoro 25/5</strong>, qui correspond a un enchainement de 25 minutes de temps de travail, avec 5 minutes de pause, le tout 5 fois;</li>
                        <li class="list-item mb-2"><strong>Pomodoro 30/10</strong>, qui correspond a un enchainement de 30 minutes de temps de travail, avec 10 minutes de pause, le tout 5 fois;</li>
                        <li class="list-item mb-2"><strong>Pomodoro 45/15</strong>, qui correspond a un enchainement de 45 minutes de temps de travail, avec 15 minutes de pause, le tout 5 fois;</li>
                        <li class="list-item mb-4"><strong>Pomodoro 50/10</strong>, qui correspond a un enchainement de 50 minutes de temps de travail, avec 10 minutes de pause, le tout 5 fois;</li>
                    </ul>
                    <p class="text-center paragraph">...Mais rien ne vous empeche de vous creer un pomodoro personnalisé! </p>
                </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-xs-12 col-lg-5  bg-white rounded d-flex flex-column align-self-center p-5 ml-2">
                <h2 class="text-center"> Lancer le POMODORO Timer </h2>
                <img src="images/clock.gif" alt="" class="d-block ml-auto mr-auto text-center">
                <a href="pomodoro_set.php" class="btn btn-success d-block me-auto w-50 ms-auto mt-4"> Lancer le POMODORO Timer </a>
            </div>
        </div>
    </div>
    <?php require('partials/_footer.php'); ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="assets/app.js"></script>
</body>

</html>