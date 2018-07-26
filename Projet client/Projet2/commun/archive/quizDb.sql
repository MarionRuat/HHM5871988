-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 18 Avril 2018 à 09:04
-- Version du serveur :  5.7.21-0ubuntu0.16.04.1
-- Version de PHP :  7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `quizDb`
--
CREATE DATABASE IF NOT EXISTS `quizDb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `quizDb`;

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `login` varchar(25) DEFAULT NULL,
  `pass` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`id_admin`, `login`, `pass`) VALUES
(1, 'theBoss', 'Sùp3rS3cr3t');

-- --------------------------------------------------------

--
-- Structure de la table `answers`
--

DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `great` tinyint(1) DEFAULT NULL,
  `id_questions` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `answers`
--

INSERT INTO `answers` (`id`, `answer`, `great`, `id_questions`) VALUES
(1, 'la trance', 0, 1),
(2, 'le décrochage', 0, 1),
(3, 'le supersonique', 0, 1),
(4, 'le vortex', 1, 1),
(5, 'il décroche', 1, 2),
(6, 'il accroche', 0, 2),
(7, 'il raccroche', 0, 2),
(8, 'il pend', 0, 2),
(9, 'Une pale qui tourne dans le sens inverse', 0, 3),
(10, 'une pale du rotor arrière', 0, 3),
(11, 'la pale qui fait dos à l\'avancement de la machine', 1, 3),
(12, 'Une pale qui recule', 0, 3),
(13, 'un instrument de mesure des FEN', 0, 4),
(14, 'Un instrument pour vérifier qu\'on est dans la fenêtre ILS', 0, 4),
(15, 'Un rotor arrière caréné', 1, 4),
(16, 'un hublot carré', 0, 4),
(18, 'la Mesure Acoustique de Charge Hypersustentatrice', 0, 5),
(19, 'la vitesse du son', 1, 5),
(20, 'la valeur du Maximum Airlift Cargo Hover', 0, 5),
(21, 'la valeur du Minimum Airlift Cargo Hover', 0, 5),
(22, '90° avant', 1, 6),
(23, 'devant', 0, 6),
(24, 'derrière', 0, 6),
(25, '90° après', 0, 6),
(26, 'prendre une altitude cabine inférieur au niveau 130', 0, 7),
(27, 'Monter au niveau refuge', 0, 7),
(28, 'S\'équiper en oxygène', 1, 7),
(29, 'L\'annoncer aux passagers', 0, 7),
(30, 'à l\'IF', 0, 8),
(31, 'au FAP', 0, 8),
(32, 'au FAF', 0, 8),
(33, 'à l\'IAF', 1, 8),
(34, 'le FL 50', 0, 9),
(35, 'le FL 55', 1, 9),
(36, 'le FL 5000', 0, 9),
(37, 'Le FL 500', 0, 9),
(38, 'vent de travers', 0, 10),
(39, 'face au vent', 0, 10),
(40, 'travers à la houle', 1, 10),
(41, 'face à la houle', 0, 10);

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  `id_quiz` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `questions`
--

INSERT INTO `questions` (`id`, `question`, `id_quiz`) VALUES
(1, 'Dans quel état ce trouve un rotor quand la vitesse de Froude équivaut au taux de descente?', 1),
(2, 'Qu\'advient il quand un profil atteint son incidence maximum?', 1),
(3, 'Qu\'est ce que la pale reculante?', 1),
(4, 'Qu\'est ce qu\'un Fenestron?', 1),
(5, 'Qu\'est ce que le nombre de mach?', 1),
(6, 'L\'action sur un rotor pour le faire varier de façon cyclique doit ce situer...?', 1),
(7, 'Quel est la première action à mener en cas de dépressurisation?', 1),
(8, 'Ou commence le segment d\'approche initial lors d\'une percée de précision?', 1),
(9, 'Quel est le premier niveau utilisable, suivant la règle de la semi-circulaire pour une navigation en VFR au dessus de 5000Ft/sol de bordeaux a Valence?', 1),
(10, 'Quel est l\'axe à privilégier en cas amerrissage?', 1);

-- --------------------------------------------------------

--
-- Structure de la table `Quiz`
--

DROP TABLE IF EXISTS `Quiz`;
CREATE TABLE `Quiz` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(50) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `checked` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Quiz`
--

INSERT INTO `Quiz` (`id`, `title`, `category`, `date`, `checked`) VALUES
(1, 'aeronautique', 'science', '2018-04-17 19:28:29', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Index pour la table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_answers_id_questions` (`id_questions`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_questions_id_quiz` (`id_quiz`);

--
-- Index pour la table `Quiz`
--
ALTER TABLE `Quiz`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT pour la table `Quiz`
--
ALTER TABLE `Quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `FK_answers_id_questions` FOREIGN KEY (`id_questions`) REFERENCES `questions` (`id`);

--
-- Contraintes pour la table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `FK_questions_id_quiz` FOREIGN KEY (`id_quiz`) REFERENCES `Quiz` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
