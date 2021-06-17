<?php
require('Pomodoro.php');
$name = htmlspecialchars($_GET['name']);
$p = new Pomodoro;
$getData = $p->getPomodoroInformations($name);
echo json_encode($getData);