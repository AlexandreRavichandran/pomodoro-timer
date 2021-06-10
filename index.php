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
    <?php include_once('partials/_header.php'); ?>
    <div class="container mt-2 border-bottom mb-4">
        <h1 class="text-center"> POMODORO-TIMER</h1>
        <h2 class="text-center">La solution pour vos problèmes de concentration</h2>
    </div>
    <div class="container mb-4">
        <div class="row">
            <div class="col bg-primary">
                <h2 class="text-center"> Pomodo...quoi? </h2>
                <p>La technique POMODORO (ou tout simplement le pomodoro), est une technique de gestion de travail permettant d'optimiser les temps de travail et les temps de pause afin d'optimiser au maximum la concentration </p>
                <h2 class="text-center">Fonctionnement</h2>
                <p>La technique POMODORO est simple. Il existe differents types de pomodoro</p>
            </div>
            <div class="col bg-secondary">
                <h2 class="text-center"> Lancer le POMODORO Timer </h2>
                <img src="images/clock.gif" alt="" class="d-block ml-auto mr-auto text-center">
                <a href="pomodoro.php" class="btn btn-success d-block ml-auto w-50 mr-auto mt-4"> Lancer le POMODORO Timer </a>
            </div>
        </div>
    </div>
    <?php include_once('partials/_footer.php'); ?>
    <script src="assets/app.js"></script>
</body>

</html>