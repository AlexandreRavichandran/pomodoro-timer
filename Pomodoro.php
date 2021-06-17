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
            $db = new PDO('mysql:host=localhost;dbname=pomodoro-timer;charset=utf8', 'root', 'root');
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

    public function addnewPomodoro(string $name, int $worktime, int $resttime, int $cycle)
    {
        $postData = $this->db->prepare('INSERT INTO pomodoro(name,work_time,rest_time,cycle) VALUES(:name,:work_time,:rest_time,cycle)');
        $postData->execute([
            'name' => $name,
            'work_time' => $worktime,
            'rest_time' => $resttime,
            'cycle' => $cycle
        ]);
    }
}
