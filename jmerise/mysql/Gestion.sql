-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: Gestion
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `Gestion`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `Gestion` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `Gestion`;

--
-- Table structure for table `Reservation`
--

DROP TABLE IF EXISTS `Reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reservation` (
  `num_reservation` int(11) NOT NULL AUTO_INCREMENT,
  `num_salle` int(11) DEFAULT NULL,
  `num_dossier` int(11) DEFAULT NULL,
  `heure_debut` datetime DEFAULT NULL,
  `heure_fin` datetime DEFAULT NULL,
  PRIMARY KEY (`num_reservation`),
  KEY `num_salle` (`num_salle`),
  KEY `num_dossier` (`num_dossier`),
  CONSTRAINT `Reservation_ibfk_1` FOREIGN KEY (`num_salle`) REFERENCES `Salle` (`num_salle`),
  CONSTRAINT `Reservation_ibfk_2` FOREIGN KEY (`num_dossier`) REFERENCES `utilisateurs` (`num_dossier`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reservation`
--

LOCK TABLES `Reservation` WRITE;
/*!40000 ALTER TABLE `Reservation` DISABLE KEYS */;
INSERT INTO `Reservation` VALUES (1,1,1,'2018-04-03 20:40:58','2018-04-03 21:30:00'),(2,1,2,'2018-04-10 09:00:00','2018-04-10 10:00:00'),(3,1,3,'2018-04-11 09:00:00','2018-04-11 10:00:00'),(4,5,4,'2018-04-12 11:00:00','2018-04-12 14:00:00'),(5,5,5,'2018-04-25 10:00:00','2018-04-25 11:00:00'),(6,3,6,'2018-04-19 09:00:00','2018-04-19 12:00:00'),(7,6,7,'2018-04-23 11:00:00','2018-04-23 12:00:00'),(8,6,8,'2018-04-25 11:00:00','2018-04-25 12:00:00'),(9,6,9,'2018-04-25 09:00:00','2018-04-25 12:00:00'),(10,6,10,'2018-04-23 11:00:00','2018-04-23 12:00:00');
/*!40000 ALTER TABLE `Reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Salle`
--

DROP TABLE IF EXISTS `Salle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Salle` (
  `num_salle` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`num_salle`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Salle`
--

LOCK TABLES `Salle` WRITE;
/*!40000 ALTER TABLE `Salle` DISABLE KEYS */;
INSERT INTO `Salle` VALUES (1,'Dojo'),(2,'Reunion'),(3,'Repos'),(4,'Cuisine'),(5,'Bureau'),(6,'OpenSapce');
/*!40000 ALTER TABLE `Salle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilisateurs` (
  `num_dossier` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(50) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `adresse` varchar(50) DEFAULT NULL,
  `langage` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`num_dossier`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateurs`
--

LOCK TABLES `utilisateurs` WRITE;
/*!40000 ALTER TABLE `utilisateurs` DISABLE KEYS */;
INSERT INTO `utilisateurs` VALUES (1,'Marion','Ruat','Bordeaux',NULL),(2,'Caroline','Collery','Bordeaux',NULL),(3,'Lorie','Pester','Plessis-Bouchard',NULL),(4,'Léodagan','De Carmélide','Carmélide',NULL),(5,'Calogrenant','De Calédonie','Calédonie',NULL),(6,'Alexandre','Lorion','La Rochelle','Javascript'),(7,'Aurelien','Barbier','Montlucon','PHP'),(8,'Google','Pechai','Mountain View',NULL),(9,'Maylis','Doucet','Bordeaux',NULL),(10,'Missi','Ahya','Bordeaux',NULL);
/*!40000 ALTER TABLE `utilisateurs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-04 12:35:13
