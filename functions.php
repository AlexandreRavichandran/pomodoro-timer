<?php

/**
 * Function to detect which page the user currently are, to put active class to the right navbar item
 * @param string $pageName
 * @return void
 */
function addActiveClassNavbar(string $pageName)
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
function addCycleBoxes(int $cycle)
{
    for ($i = 1; $i < $cycle + 1; $i++) {
        echo '<li id="cycle ' . $i . '" class="rounded border p-3 m-3 stepNumber">' . $i . '</li>';
    }
}

/**
 * Function to automatically display all pomodoro button on setting page,
 * following the content of the XML file
 *
 * @return void
 */
function showStandardPomodoroButtons()
{
    $xml = simplexml_load_file('data.xml');
    foreach ($xml as $pomodoro => $value) {
        $type = $value['type']->__toString();
        $name = $value->name;
        // the line below is used to manually add 
        $type = '"' . $type . '"';
        echo  "<div class='col-xs-12 col-lg-2 mr-2 mt-4 d-flex justify-content-center'>
                <button onclick='displayPomodoroInformations(" . $type . ")' id='" . $type . "'
                class='btn btn-danger pomodoroButton'>" . $name . "</button>
                </div>";
    }
}
