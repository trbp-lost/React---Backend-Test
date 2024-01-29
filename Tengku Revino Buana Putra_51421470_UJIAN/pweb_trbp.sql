-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2024 at 05:54 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pweb_trbp`
--

-- --------------------------------------------------------

--
-- Table structure for table `kost_trbp`
--

CREATE TABLE `kost_trbp` (
  `id` int(11) NOT NULL,
  `nokamar` varchar(255) NOT NULL,
  `penghuni` varchar(255) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kost_trbp`
--

INSERT INTO `kost_trbp` (`id`, `nokamar`, `penghuni`, `harga`) VALUES
(16, '1', 'Tengku', 1000000),
(17, '2', 'Revino', 2000000),
(18, '3', 'Buana', 3000000),
(19, '4', 'Putra', 4000000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kost_trbp`
--
ALTER TABLE `kost_trbp`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kost_trbp`
--
ALTER TABLE `kost_trbp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
