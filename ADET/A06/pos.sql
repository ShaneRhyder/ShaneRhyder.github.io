-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2025 at 01:59 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pos`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(11) NOT NULL,
  `categoryName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`) VALUES
(1, 'Drinks'),
(2, 'Canned Foods'),
(3, 'Pasta'),
(4, 'Snacks'),
(5, 'Dairy'),
(6, 'Bakery'),
(7, 'Condiments'),
(8, 'Frozen Foods'),
(9, 'Instant Noodles');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(4) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `name` varchar(40) NOT NULL,
  `isAvailable` varchar(6) NOT NULL DEFAULT 'true',
  `code` varchar(20) NOT NULL,
  `price` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `isAvailable`, `code`, `price`) VALUES
(1, 1, 'Coke RG', 'true', 'CKRG', 20),
(2, 1, 'Coke MD', 'true', 'CKMD', 30),
(3, 1, 'Coke LG', 'true', 'CKLG', 38),
(4, 1, 'Sprite RG', 'true', 'SPRTRG', 20),
(5, 1, 'Sprite MD', 'true', 'SPRTMD', 30),
(6, 1, 'Sprite LG', 'true', 'SPRTLG', 38),
(7, 1, 'Royal RG', 'true', 'RYLRG', 20),
(8, 1, 'Royal MD', 'true', 'RYLMD', 30),
(9, 1, 'Royal LG', 'true', 'RYLLG', 38),
(10, 1, 'Water 500ML', 'true', 'WTR500ML', 10),
(11, 1, 'Water 1L', 'true', 'WTR1L', 18),
(12, 1, 'Pepsi RG', 'true', 'PEPSRG', 20),
(13, 1, 'Pepsi MD', 'true', 'PEPSMD', 30),
(14, 1, 'Pepsi LG', 'true', 'PEPSLG', 38),
(15, 1, 'Fanta RG', 'true', 'FNTRG', 20),
(16, 1, 'Fanta MD', 'true', 'FNTMD', 30),
(17, 1, 'Fanta LG', 'true', 'FNTLG', 38),
(18, 1, 'Iced Tea RG', 'true', 'ICTRG', 18),
(19, 1, 'Iced Tea LG', 'true', 'ICTLG', 28),
(20, 1, 'Lemonade RG', 'true', 'LMNRG', 20),
(21, 1, 'Lemonade LG', 'true', 'LMNLG', 30),
(22, 1, 'Energy Drink CAN', 'true', 'ENGYCAN', 35),
(23, 1, 'Chocolate Milk SML', 'true', 'CHOMSML', 20),
(24, 1, 'Chocolate Milk LRG', 'true', 'CHOMLRG', 35),
(25, 2, 'Corned Beef', 'true', 'CRNBF', 35),
(26, 2, 'Spam', 'true', 'SPM', 90),
(27, 2, 'Tuna', 'true', 'TUNA', 30),
(28, 2, 'Pork and Beans', 'true', 'PBEANS', 25),
(29, 2, 'Chicken Afritada', 'true', 'CHICKAFR', 50),
(30, 2, 'Beef Stew', 'true', 'BFS', 60),
(31, 2, 'Mackerel', 'false', 'MCKRL', 28),
(32, 2, 'Vienna Sausage', 'true', 'VNSG', 20),
(33, 2, 'Luncheon Meat', 'true', 'LNMT', 70),
(34, 2, 'Sardines', 'true', 'SRDNS', 18),
(35, 3, 'Lasagna', 'true', 'LSGN', 85),
(36, 3, 'Carbonara', 'true', 'CRBN', 75),
(37, 3, 'Baked Ziti', 'true', 'BK ZTI', 85),
(38, 3, 'Mac and Cheese', 'true', 'MAC', 60),
(39, 3, 'Fettuccine Alfredo', 'true', 'FTT', 75),
(40, 3, 'Pesto', 'true', 'PST', 70),
(41, 3, 'Spaghetti Meatballs', 'true', 'SPMB', 90),
(42, 3, 'Seafood Pasta', 'true', 'SFD', 95),
(43, 3, 'Tuna Pasta', 'true', 'TNP', 70),
(44, 4, 'Chips SML', 'true', 'CHPSSML', 15),
(45, 4, 'Chips MDM', 'true', 'CHPSMDM', 25),
(46, 4, 'Chips LRG', 'true', 'CHPSLRG', 38),
(47, 4, 'Cookies BOX', 'true', 'CKSBOX', 50),
(48, 4, 'Cookies PKG', 'true', 'CKSPKG', 20),
(49, 4, 'Fries SML', 'true', 'FRYSSML', 25),
(50, 4, 'Fries MDM', 'true', 'FRYSMDM', 35),
(51, 4, 'Fries LRG', 'true', 'FRYSLRG', 50),
(52, 4, 'Nachos RGL', 'true', 'NCHSRGL', 35),
(53, 4, 'Popcorn SML', 'true', 'PCRNSML', 20),
(54, 4, 'Popcorn LRG', 'true', 'PCRNLRG', 30),
(55, 4, 'Crackers PK', 'true', 'CRKPK', 15),
(56, 4, 'Pretzels BG', 'true', 'PTZLBG', 28),
(57, 4, 'Peanuts 100G', 'true', 'PNT100G', 15),
(58, 4, 'Chicharon SML', 'true', 'CHCHSML', 20),
(59, 4, 'Tortilla Chips BG', 'true', 'TCHBG', 40),
(60, 5, 'Milk 500ML', 'true', 'MLK500ML', 25),
(61, 5, 'Milk 1L', 'true', 'MLK1L', 48),
(62, 5, 'Cheese 100G', 'true', 'CHS100G', 35),
(63, 5, 'Cheese 200G', 'true', 'CHS200G', 65),
(64, 5, 'Yogurt SML', 'true', 'YGTSML', 18),
(65, 5, 'Yogurt MDM', 'true', 'YGTMDM', 30),
(66, 5, 'Butter 250G', 'true', 'BTR250G', 65),
(67, 5, 'Cream 250ML', 'true', 'CRM250ML', 35),
(68, 5, 'Ice Cream PNT', 'true', 'ICRMPNT', 75),
(69, 6, 'Bread', 'true', 'BRD', 30),
(70, 6, 'Croissant', 'true', 'CRS', 40),
(71, 6, 'Donut', 'true', 'DNT', 25),
(72, 6, 'Muffin', 'true', 'MFN', 30),
(73, 6, 'Ensaymada', 'true', 'ENS', 30),
(74, 6, 'Pandesal', 'true', 'PNDS', 15),
(75, 6, 'Baguette', 'true', 'BGTT', 45),
(76, 7, 'Ketchup', 'true', 'KTCH', 20),
(77, 7, 'Mayonnaise', 'true', 'MYO', 28),
(78, 7, 'Soy Sauce', 'true', 'SOY', 12),
(79, 7, 'Vinegar', 'true', 'VNGR', 12),
(80, 7, 'Hot Sauce', 'true', 'HTSC', 30),
(81, 7, 'Fish Sauce', 'true', 'FSHSC', 15),
(82, 8, 'Hotdog', 'true', 'HTDG', 45),
(83, 8, 'Frozen Nuggets', 'true', 'NUG', 65),
(84, 8, 'Longganisa', 'true', 'LNG', 55),
(85, 8, 'Tocino', 'true', 'TCN', 60),
(86, 8, 'Siomai', 'true', 'SMI', 50),
(87, 9, 'Lucky Me Pancit Canton Original', 'true', 'LMPCO', 14),
(88, 9, 'Lucky Me Pancit Canton Calamansi', 'true', 'LMPCAL', 14),
(89, 9, 'Lucky Me Pancit Canton Chilimansi', 'true', 'LMPCCM', 14),
(90, 9, 'Lucky Me Pancit Canton Extra Hot', 'true', 'LMPCXH', 14),
(91, 9, 'Lucky Me Instant Mami Beef', 'true', 'LMIMBF', 10),
(92, 9, 'Lucky Me Instant Mami Chicken', 'true', 'LMIMCH', 10),
(93, 9, 'Nissin Ramen Beef', 'true', 'NSNRMBF', 16),
(94, 9, 'Nissin Ramen Seafood', 'true', 'NSNRMSF', 16),
(95, 9, 'Payless Xtra Big Chicken', 'true', 'PXLCH', 18),
(96, 9, 'Payless Xtra Big Hot Chili', 'true', 'PXLHC', 18),
(97, 9, 'Quickchow Beef', 'true', 'QCWB', 10),
(98, 9, 'Quickchow Chicken', 'true', 'QCWC', 10),
(99, 9, 'Quickchow Shrimp', 'true', 'QCWS', 10),
(100, 9, 'Maggi Chicken Noodles', 'true', 'MGGCN', 12),
(101, 9, 'Maggi Curry Noodles', 'true', 'MGGCR', 12),
(102, 9, 'Samyang Hot Chicken Ramen', 'true', 'SMYNGHC', 50),
(103, 9, 'Samyang 2x Spicy Ramen', 'true', 'SMYNG2X', 60),
(104, 9, 'Ottogi Jin Ramen Mild', 'true', 'OTTJRM', 45),
(105, 9, 'Ottogi Jin Ramen Spicy', 'true', 'OTTJRS', 45),
(106, 9, 'Indomie Mi Goreng', 'true', 'INDMG', 17);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
