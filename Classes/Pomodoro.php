<?php

class Pomodoro
{
    private $db;


    public function __construct()
    {
        $this->db = $this->dbconnect();
    }


    private function dbconnect()
    {
        try {
            // To test, you have to use this db connection function
            $db = new PDO('mysql:host=localhost;dbname=pomodoro-timer;charset=utf8', 'root', 'root');
            //$db = new PDO('mysql:host=' . $_ENV['HOST'] . ';dbname=' .  $_ENV['DB_NAME'] . ';charset=utf8', $_ENV['USERNAME'], $_ENV['PASSWORD']);
        } catch (Exception $e) {
            echo 'Une erreur s\'est produite' . $e->getMessage();
        }
        return $db;
    }


    public function getPomodoroInformations(string $name)
    {
        $getData = $this->db->prepare('SELECT * FROM pomodoro WHERE name = :name');
        $getData->execute([
            'name' => $name
        ]);
        return $getData->fetch();
    }

    public function addNewPomodoro(string $name, int $workTime, int $restTime, int $cycle)
    {
        $postData = $this->db->prepare('INSERT INTO pomodoro(name,work_time,rest_time,cycle) VALUES(:name,:work_time,:rest_time,cycle)');
        $postData->execute([
            'name' => $name,
            'work_time' => $workTime,
            'rest_time' => $restTime,
            'cycle' => $cycle
        ]);
    }

}
