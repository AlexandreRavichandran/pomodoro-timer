-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 17 juin 2021 à 18:21
-- Version du serveur :  5.7.24
-- Version de PHP : 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pomodoro-timer`
--

-- --------------------------------------------------------

--
-- Structure de la table `pomodoro`
--

CREATE TABLE `pomodoro` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `work_time` int(11) NOT NULL,
  `rest_time` int(11) NOT NULL,
  `cycle` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pomodoro`
--

INSERT INTO `pomodoro` (`id`, `name`, `work_time`, `rest_time`, `cycle`) VALUES
(1, '25/5', 25, 5, 5),
(2, '30/10', 30, 10, 5),
(3, '45/15', 45, 15, 5),
(4, '50/10', 50, 10, 5);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `pomodoro`
--
ALTER TABLE `pomodoro`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `pomodoro`
--
ALTER TABLE `pomodoro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
