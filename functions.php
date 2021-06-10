<?php
function addActiveClassNavbar($pageName)
{
    if ($_SERVER['REQUEST_URI'] === '/pomodoro-timer/' . $pageName . '.php') {
        echo "active";
    }
}
