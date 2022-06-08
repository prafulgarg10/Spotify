-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: localhost    Database: spotify
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Artist`
--

DROP TABLE IF EXISTS `Artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Artist` (
  `Bio` varchar(200) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `AName` char(20) NOT NULL,
  PRIMARY KEY (`AName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Artist`
--

LOCK TABLES `Artist` WRITE;
/*!40000 ALTER TABLE `Artist` DISABLE KEYS */;
INSERT INTO `Artist` VALUES ('Arijit Singh is an Indian singer and music composer','1987-04-25','Arijit Singh'),('Arijit Singh is an Indian singer and music composer','1987-04-25','Arijit Singh 1'),('Arijit Singh is an Indian singer and music composer','1987-04-25','Arijit Singh 2'),('Arijit Singh is an Indian singer and music composer','1987-04-25','Arijit Singh 3'),('Armaan Malik is an Indian singer, songwriter.','1995-06-22','Armaan Malik'),('Armaan Malik is an Indian singer, songwriter.','1995-06-22','Armaan Malik 1'),('Armaan Malik is an Indian singer, songwriter.','1995-06-22','Armaan Malik 2'),('Armaan Malik is an Indian singer, songwriter.','1995-06-22','Armaan Malik 3'),('Shreya Ghoshal is an Indian singer and television personality.','1984-03-12','Shreya Ghoshal'),('Shreya Ghoshal is an Indian singer and television personality.','1984-03-12','Shreya Ghoshal 1'),('Shreya Ghoshal is an Indian singer and television personality.','1984-03-12','Shreya Ghoshal 2'),('Shreya Ghoshal is an Indian singer and television personality.','1984-03-12','Shreya Ghoshal 3');
/*!40000 ALTER TABLE `Artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Rate`
--

DROP TABLE IF EXISTS `Rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Rate` (
  `Email` varchar(20) NOT NULL,
  `SName` char(30) NOT NULL,
  `Rating` int DEFAULT NULL,
  PRIMARY KEY (`Email`,`SName`),
  KEY `fk4` (`SName`),
  CONSTRAINT `fk3` FOREIGN KEY (`Email`) REFERENCES `User` (`Email`),
  CONSTRAINT `fk4` FOREIGN KEY (`SName`) REFERENCES `Songs` (`SName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Rate`
--

LOCK TABLES `Rate` WRITE;
/*!40000 ALTER TABLE `Rate` DISABLE KEYS */;
INSERT INTO `Rate` VALUES ('abc@gmail.com','Agar Tum Saath Ho',5),('abc@gmail.com','De Taali',4),('abc@gmail.com','Dhokha',3),('abc1@gmail.com','Dhokha',4);
/*!40000 ALTER TABLE `Rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sing`
--

DROP TABLE IF EXISTS `Sing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sing` (
  `AName` char(20) NOT NULL,
  `SName` char(30) NOT NULL,
  PRIMARY KEY (`AName`,`SName`),
  KEY `fk2` (`SName`),
  CONSTRAINT `fk1` FOREIGN KEY (`AName`) REFERENCES `Artist` (`AName`),
  CONSTRAINT `fk2` FOREIGN KEY (`SName`) REFERENCES `Songs` (`SName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sing`
--

LOCK TABLES `Sing` WRITE;
/*!40000 ALTER TABLE `Sing` DISABLE KEYS */;
INSERT INTO `Sing` VALUES ('Arijit Singh','Agar Tum Saath Ho'),('Arijit Singh 1','Dhokha'),('Arijit Singh','Mere Yaara'),('Shreya Ghoshal','Pal'),('Armaan Malik','Rehna Tere Pass'),('Arijit Singh 3','Soch Liya'),('Armaan Malik','Soch Liya'),('Armaan Malik','Tum Aaogey'),('Arijit Singh 2','Tum Hi Ho'),('Shreya Ghoshal','You');
/*!40000 ALTER TABLE `Sing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Songs`
--

DROP TABLE IF EXISTS `Songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Songs` (
  `Cover` varchar(50) DEFAULT NULL,
  `DOR` date DEFAULT NULL,
  `SName` char(30) NOT NULL,
  PRIMARY KEY (`SName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Songs`
--

LOCK TABLES `Songs` WRITE;
/*!40000 ALTER TABLE `Songs` DISABLE KEYS */;
INSERT INTO `Songs` VALUES ('https://google.com','2014-05-01','Agar Tum Saath Ho'),('https://google.com','2014-05-01','De Taali'),('https://google.com','2014-05-01','Dhokha'),('https://google.com','2014-05-01','Gulabi'),('https://google.com','2014-05-01','Mere Yaara'),('https://google.com','2014-05-01','Muskurane Ki Wajah'),('https://google.com','2014-05-01','Pal'),('https://google.com','2014-05-01','Rehna Tere Pass'),('https://google.com','2014-05-01','Soch Liya'),('https://google.com','2014-05-01','Tum Aaogey'),('https://google.com','2014-05-01','Tum Hi Ho'),('https://google.com','2014-05-01','You');
/*!40000 ALTER TABLE `Songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `Email` varchar(20) NOT NULL,
  `Name` char(20) DEFAULT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('abc@gmail.com','Praful'),('abc1@gmail.com','Garg');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-08 11:20:03
