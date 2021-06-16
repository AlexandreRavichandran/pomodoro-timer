<?php

/**
 * Function to detect which page the user currently are, to put active class to the right navbar item
 * @param string $pageName
 * @return void
 */
function addActiveClassNavbar($pageName)
{
    if ($_SERVER['REQUEST_URI'] === '/pomodoro-timer/' . $pageName . '.php') {
        echo "active";
    }
}

/**
 * Function to display cycle boxes following the choosen pomodoro
 * @param integer $cycle
 * @return void
 */
function addCycleBoxes($cycle)
{
    for ($i = 1; $i < $cycle + 1; $i++) {
        echo '<li id="cycle ' . $i . '" class="rounded border p-3 m-3 step_number">' . $i . '</li>';
    }
}
