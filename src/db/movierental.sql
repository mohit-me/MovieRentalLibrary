-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 25, 2013 at 11:54 AM
-- Server version: 5.5.24-log
-- PHP Version: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `movierental`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE IF NOT EXISTS `address` (
  `username` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `zipcode` int(6) NOT NULL,
  KEY `username` (`username`),
  KEY `username_2` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`username`, `address`, `city`, `state`, `zipcode`) VALUES
('mohit', 'E-23', 'Delhi', 'India', 110017),
('astha', 'E-23', 'Geetanjali Enclave', 'Idia', 100100),
('abc', '11', 'Delhi', 'India', 110019),
('qwerty', 'qwerty', 'Delhi', 'inidn', 110290),
('kartik', 'C1', 'Delhi', 'Delhi', 100093);

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE IF NOT EXISTS `branches` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `bcode` varchar(30) NOT NULL,
  `branchname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `zipcode` varchar(6) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  PRIMARY KEY (`bid`),
  UNIQUE KEY `bcode` (`bcode`),
  UNIQUE KEY `bcode_2` (`bcode`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`bid`, `bcode`, `branchname`, `email`, `address`, `city`, `state`, `zipcode`, `mobile`) VALUES
(1, 'BR101', 'CP', 'cp@clover.com', 'A1 CP', 'Delhi', 'India', '110001', '9810198101'),
(2, 'BR102', 'NSIT', 'nsit@clover.com', 'Nsit', 'Dwarka', 'India', '110081', '9810998109');

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE IF NOT EXISTS `complaint` (
  `username` varchar(50) NOT NULL,
  `videoid` int(11) NOT NULL,
  PRIMARY KEY (`username`,`videoid`),
  KEY `videoid` (`videoid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `complaint`
--

INSERT INTO `complaint` (`username`, `videoid`) VALUES
('qwerty', 2),
('qwerty', 3);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE IF NOT EXISTS `employees` (
  `eid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `bcode` varchar(30) NOT NULL,
  `salary` int(11) NOT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`eid`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`eid`, `username`, `bcode`, `salary`, `role`) VALUES
(1, 'abc', 'BR101', 1000000, 'manager'),
(2, 'qwerty', 'BR101', 10000, 'employee');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `budget` varchar(20) NOT NULL,
  `actor1` varchar(30) NOT NULL,
  `actor2` text NOT NULL,
  `actor3` varchar(30) NOT NULL,
  `actor4` varchar(30) NOT NULL,
  `actor5` varchar(30) NOT NULL,
  `director` varchar(30) NOT NULL,
  `languages` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `plot` text NOT NULL,
  `poster` varchar(50) NOT NULL,
  `imdbrating` float NOT NULL,
  `releasedate` varchar(20) NOT NULL,
  `runtime` varchar(20) NOT NULL,
  `tagline` varchar(100) NOT NULL,
  `readmore` varchar(50) NOT NULL,
  `writer` varchar(50) NOT NULL,
  `year` int(11) NOT NULL,
  `genre1` varchar(20) NOT NULL,
  `genre2` varchar(20) NOT NULL,
  `genre3` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`mid`),
  UNIQUE KEY `title` (`title`),
  KEY `mid` (`mid`),
  KEY `title_2` (`title`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`mid`, `title`, `budget`, `actor1`, `actor2`, `actor3`, `actor4`, `actor5`, `director`, `languages`, `location`, `plot`, `poster`, `imdbrating`, `releasedate`, `runtime`, `tagline`, `readmore`, `writer`, `year`, `genre1`, `genre2`, `genre3`) VALUES
(1, 'The Avengers', '$220,000,000', 'Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson', 'Joss Whedon', 'English / Russian', 'Pittsburgh, Pennsylvania, USA', 'Nick Fury is director of S.H.I.E.L.D, an international peace keeping agency. The agency is a whos who of Marvel Super Heroes, with Iron Man, The Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When global security is threatened by Loki and his cohorts, Nick Fury and his team will need all their powers to save the world from disaster.â€¦', 'posters/0848228.jpg', 8.3, '27 April 2012  (Indi', '143 min', 'n/A', 'http://www.imdb.com/title/tt0848228/', 'Joss Whedon / Zak Penn', 2012, 'Action', 'NaN', 'NaN'),
(2, 'The Dark Knight', '$185,000,000', 'Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine', 'Maggie Gyllenhaal', 'Christopher Nolan', 'English / Mandarin', '2 International Finance Centre, Central, Hong Kong, China', 'Batman raises the stakes in his war on crime. With the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the city streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as The Joker.â€¦', 'posters/0468569.jpg', 9, '18 July 2008  (India', '152 min', 'Welcome to a world without rules.', 'http://www.imdb.com/title/tt0468569/', 'Jonathan Nolan / Christopher Nolan', 2008, 'Action', 'Crime', 'Drama'),
(3, 'Batman Begins', '$150,000,000', 'Christian Bale', 'Michael Caine', 'Liam Neeson', 'Katie Holmes', 'Gary Oldman', 'Christopher Nolan', 'English / Urdu / Mandarin', 'Coalhouse Fort, East Tilbury, Essex, England, UK', 'When his parents were killed, millionaire playboy Bruce Wayne relocates to Asia when he is mentored by Henri Ducard and Ras Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as Batman. But it doesnt stay quiet for long.â€¦', 'posters/0372784.jpg', 8.3, '17 June 2005  (India', '140 min', 'n/A', 'http://www.imdb.com/title/tt0372784/', 'Bob Kane / David S. Goyer', 2005, 'Action', 'Adventure', 'Crime'),
(4, 'The Dark Knight Rises', '$230,000,000', 'Christian Bale', 'Gary Oldman', 'Tom Hardy', 'Joseph Gordon-Levitt', 'Anne Hathaway', 'Christopher Nolan', 'English', 'Stansted Airport, Essex, England, UK', 'Despite his tarnished reputation after the events of The Dark Knight, in which he took the rap for Dents crimes, Batman feels compelled to intervene to assist the city and its police force which is struggling to cope with Banes plans to destroy the city.â€¦', 'posters/1345836.jpg', 8.6, '20 July 2012  (India', '165 min', 'A Fire Will Rise', 'http://www.imdb.com/title/tt1345836/', 'Jonathan Nolan / Christopher Nolan', 2012, 'Action', 'Crime', 'Thriller'),
(5, 'Argo', '$44,500,000', 'Ben Affleck', 'Bryan Cranston', 'Alan Arkin', 'John Goodman', 'Victor Garber', 'Ben Affleck', 'English / Persian', 'McLean, Virginia, USA', 'In 1979, the American embassy in Iran was invaded by Iranian revolutionaries and several Americans were taken hostage. However, six managed to escape to the official residence of the Canadian Ambassador and the CIA was eventually ordered to get them out of the country. With few options, exfiltration expert Tony Mendez devised a daring plan: to create a phony Canadian film project looking to shoot in Iran and smuggle the Americans out as its production crew. With the help of some trusted Hollywood contacts, Mendez created the ruse and proceed to Iran as its associate producer. However, time was running out with the Iranian security forces closing in on the truth while both his charges and the White House had grave doubts about the operation themselves.â€¦', 'posters/1024648.jpg', 7.9, '19 October 2012  (In', '120 min', 'The movie was fake. The mission was real.', 'http://www.imdb.com/title/tt1024648/', 'Chris Terrio / Tony Mendez', 2012, 'Drama', 'History', 'Thriller'),
(6, 'Silver Linings Playbook', '$21,000,000', 'Bradley Cooper', 'Jennifer Lawrence', 'Robert De Niro', 'Jacki Weaver', 'Chris Tucker', 'David O. Russell', 'English', 'Norristown, Pennsylvania, USA', 'Against medical advice and without the knowledge of her husband Pat Solatano Sr., caring Dolores Solatano discharges her adult son, Pat Solatano Jr., from a Maryland mental health institution after his minimum eight month court ordered stint. The condition of the release includes Pat Jr. moving back in with his parents in their Philadelphia home. Although Pat Jr.s institutionalization was due to him beating up the lover of his wife Nikki, he was diagnosed with bipolar disorder. Nikki has since left him and has received a restraining order against him. Although he is on medication (which he doesnt take because of the way it makes him feel) and has mandatory therapy sessions, Pat Jr. feels like he can manage on the outside solely by healthy living and looking for the "silver linings" in his life. His goals are to get his old job back as a substitute teacher, but more importantly reunite with Nikki. He finds there are certain instances where he doesnt cope well, however no less so ...â€¦', 'posters/1045658.jpg', 7.9, '7 December 2012  (In', '122 min', 'Watch for the signs', 'http://www.imdb.com/title/tt1045658/', 'David O. Russell / Matthew Quick', 2012, 'Comedy', 'Drama', 'Romance'),
(7, 'The Artist', '$15,000,000', 'Jean Dujardin', 'BÃ©rÃ©nice Bejo', 'John Goodman', 'James Cromwell', 'Penelope Ann Miller', 'Michel Hazanavicius', 'English', 'Fremont Mansion - 56 Fremont Place, Los Angeles, California, USA', 'Outside a movie premiere, enthusiastic fan Peppy Miller literally bumps into the swashbuckling hero of the silent film, George Valentin. The star reacts graciously and Peppy plants a kiss on his cheek as they are surrounded by photographers. The headlines demand: "Whos That Girl?" and Peppy is inspired to audition for a dancing bit-part at the studio. However as Peppy slowly rises through the industry, the introduction of talking-pictures turns Valentins world upside-down.â€¦', 'posters/1655442.jpg', 8.1, '24 February 2012  (I', '100 min', 'n/A', 'http://www.imdb.com/title/tt1655442/', 'Michel Hazanavicius', 2011, 'Comedy', 'Drama', 'Romance'),
(8, 'Titanic', '$200,000,000', 'Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane', 'Kathy Bates', 'Frances Fisher', 'James Cameron', 'English / French / German / Swedish / Italian / Russian', 'Santa Clarita, California, USA', '84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancÃ©, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.â€¦', 'posters/0120338.jpg', 7.6, '13 March 1998  (Indi', '194 min', 'Collide With Destiny.', 'http://www.imdb.com/title/tt0120338/', 'James Cameron', 1997, 'Drama', 'Romance', 'NaN'),
(9, 'Avatar', '$237,000,000', 'Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang', 'Michelle Rodriguez', 'James Cameron', 'English / Spanish', 'Hamakua Coast, Hawaii, USA', 'When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridges intentions of driving off the native humanoid "Navi" in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers intel for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Navi people with the use of an "avatar" identity. While Jake begins to bond with the native tribe and quickly falls in love with the beautiful alien Neytiri, the restless Colonel moves forward with his ruthless extermination tactics, forcing the soldier to take a stand - and fight back in an epic battle for the fate of Pandora.â€¦', 'posters/0499549.jpg', 8, '18 December 2009  (I', '162 min', 'Enter the World', 'http://www.imdb.com/title/tt0499549/', 'James Cameron', 2009, 'Action', 'Adventure', 'Fantasy'),
(10, 'The Shawshank Redemption', '$25,000,000', 'Tim Robbins', 'Morgan Freeman', 'Bob Gunton', 'William Sadler', 'Clancy Brown', 'Frank Darabont', 'English', 'Ashland, Ohio, USA', 'Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to life imprisonment for the murder of his wife and her lover. Set in the 1940s, the film shows how Andy, with the help of his friend Red, the prison entrepreneur, turns out to be a most unconventional prisoner.â€¦', 'posters/0111161.jpg', 9.3, '14 October 1994  (US', '142 min', 'Fear can hold you prisoner. Hope can set you free.', 'http://www.imdb.com/title/tt0111161/', 'Stephen King / Frank Darabont', 1994, 'Crime', 'Drama', 'NaN');

-- --------------------------------------------------------

--
-- Table structure for table `movie_review`
--

CREATE TABLE IF NOT EXISTS `movie_review` (
  `mid` int(11) NOT NULL DEFAULT '0',
  `username` varchar(50) NOT NULL DEFAULT 'admin',
  `REVIEW` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`mid`,`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie_review`
--

INSERT INTO `movie_review` (`mid`, `username`, `REVIEW`) VALUES
(2, 'mohit', 'The dark Knight');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  `dateofbirth` varchar(12) NOT NULL,
  `newsletter` varchar(20) NOT NULL,
  `referral` varchar(20) NOT NULL,
  `account_type` varchar(20) NOT NULL,
  `issuecount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `username_2` (`username`),
  KEY `username_3` (`username`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `password`, `username`, `email`, `mobile`, `dateofbirth`, `newsletter`, `referral`, `account_type`, `issuecount`) VALUES
(1, 'Mohit', 'Manaktala', '4e16a414bb6478119d96b16687dc7d9a', 'mohit', 'mohitmanaktala13@gmail.com', '9871098007', '12-07-1989', 'yes', 'Friend', 'admin', 0),
(2, 'Astha', 'Manaktala', '4e16a414bb6478119d96b16687dc7d9a', 'astha', 'mohitmanaktala13@gmail.com', '9810198101', '12-08-1999', 'yes', 'Friend', 'user', 10),
(3, 'Abc', 'Def', '4e16a414bb6478119d96b16687dc7d9a', 'abc', 'mohitmanaktala@gmail.com', '9871098090', '12-22-1992', 'yes', 'None', 'manager', 0),
(4, 'xyz', 'qwerty', 'e118ecaa21f96651c3151aa72f78cc07', 'qwerty', 'qwerty@gmail.com', '9090909090', '11-11-1999', 'yes', 'None', 'employee', 22),
(5, 'kartik', 'chadha', '4e16a414bb6478119d96b16687dc7d9a', 'kartik', 'kartikchadha@gmail.com', '9810198101', '09-21-1992', 'yes', 'Friend', 'user', 2);

--
-- Triggers `users`
--
DROP TRIGGER IF EXISTS `Fine`;
DELIMITER //
CREATE TRIGGER `Fine` BEFORE UPDATE ON `users`
 FOR EACH ROW Update user_rented inner join video on
user_rented.videoid=video.videoid Set 
Fine=video.rent*DATEDIFF(CURDATE(),date_of_return) Where
DATEDIFF(CURDATE(),date_of_return)>days_issue
//
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user_cart`
--

CREATE TABLE IF NOT EXISTS `user_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `videoid` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`,`videoid`),
  KEY `user_id` (`username`),
  KEY `movie_id` (`videoid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

-- --------------------------------------------------------

--
-- Table structure for table `user_purchases`
--

CREATE TABLE IF NOT EXISTS `user_purchases` (
  `USERNAME` varchar(30) NOT NULL DEFAULT '',
  `MID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`USERNAME`,`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_rating`
--

CREATE TABLE IF NOT EXISTS `user_rating` (
  `USERNAME` varchar(30) NOT NULL DEFAULT '',
  `MID` int(11) NOT NULL DEFAULT '0',
  `RATING` int(11) DEFAULT NULL,
  PRIMARY KEY (`USERNAME`,`MID`),
  KEY `MID` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_rating`
--

INSERT INTO `user_rating` (`USERNAME`, `MID`, `RATING`) VALUES
('mohit', 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `user_rented`
--

CREATE TABLE IF NOT EXISTS `user_rented` (
  `username` varchar(50) NOT NULL,
  `videoid` int(11) NOT NULL,
  `date_of_rent` date NOT NULL,
  `date_of_return` date NOT NULL,
  `days_issue` int(11) NOT NULL,
  `rent_due` int(11) NOT NULL,
  `fine` int(11) NOT NULL,
  PRIMARY KEY (`videoid`),
  KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='user_rented';

--
-- Dumping data for table `user_rented`
--

INSERT INTO `user_rented` (`username`, `videoid`, `date_of_rent`, `date_of_return`, `days_issue`, `rent_due`, `fine`) VALUES
('astha', 3, '2013-04-22', '2013-04-23', 1, 100, 200);

-- --------------------------------------------------------

--
-- Table structure for table `user_watchlist`
--

CREATE TABLE IF NOT EXISTS `user_watchlist` (
  `username` varchar(30) NOT NULL DEFAULT '',
  `MID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`username`,`MID`),
  KEY `MID` (`MID`),
  KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_wishlist`
--

CREATE TABLE IF NOT EXISTS `user_wishlist` (
  `USERNAME` varchar(30) NOT NULL DEFAULT '',
  `MID` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`USERNAME`,`MID`),
  KEY `USERNAME` (`USERNAME`),
  KEY `MID` (`MID`),
  KEY `USERNAME_2` (`USERNAME`),
  KEY `MID_2` (`MID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE IF NOT EXISTS `video` (
  `videoid` int(11) NOT NULL AUTO_INCREMENT,
  `movieid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `bcode` varchar(30) NOT NULL,
  `cost` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `cond` int(11) NOT NULL DEFAULT '1',
  `rent` int(11) NOT NULL,
  `issues` int(11) NOT NULL DEFAULT '0',
  `complaint` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`videoid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`videoid`, `movieid`, `title`, `type`, `bcode`, `cost`, `status`, `cond`, `rent`, `issues`, `complaint`) VALUES
(1, 1, 'The Avengers', 'BluRay', 'BR101', 2000, 0, 1, 200, 2, 0),
(2, 1, 'The Avengers', 'DVD', 'BR101', 1000, 1, 1, 100, 1, 2),
(3, 4, 'The Dark Knight Rises', 'DVD', 'BR101', 1000, 1, 1, 100, 2, 1),
(4, 4, 'The Dark Knight Rises', 'BluRay', 'BR101', 2000, 0, 1, 200, 7, 0),
(5, 3, 'Batman Begins', 'DVD', 'BR101', 1000, 0, 1, 100, 0, 0),
(6, 10, 'The Shawshank Redemption', 'BluRay', 'BR101', 1000, 0, 1, 100, 0, 0),
(7, 1, 'The Avengers', 'DVD', 'BR101', 1000, 0, 1, 100, 0, 0);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `complaint`
--
ALTER TABLE `complaint`
  ADD CONSTRAINT `complaint_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `complaint_ibfk_2` FOREIGN KEY (`videoid`) REFERENCES `video` (`videoid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `movie_review`
--
ALTER TABLE `movie_review`
  ADD CONSTRAINT `movie_review_ibfk_1` FOREIGN KEY (`MID`) REFERENCES `movies` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_cart`
--
ALTER TABLE `user_cart`
  ADD CONSTRAINT `user_cart_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_cart_ibfk_2` FOREIGN KEY (`videoid`) REFERENCES `video` (`videoid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_rating`
--
ALTER TABLE `user_rating`
  ADD CONSTRAINT `user_rating_ibfk_1` FOREIGN KEY (`MID`) REFERENCES `movies` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_rented`
--
ALTER TABLE `user_rented`
  ADD CONSTRAINT `user_rented_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_watchlist`
--
ALTER TABLE `user_watchlist`
  ADD CONSTRAINT `user_watchlist_ibfk_1` FOREIGN KEY (`MID`) REFERENCES `movies` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_watchlist_ibfk_2` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_wishlist`
--
ALTER TABLE `user_wishlist`
  ADD CONSTRAINT `user_wishlist_ibfk_1` FOREIGN KEY (`USERNAME`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_wishlist_ibfk_2` FOREIGN KEY (`MID`) REFERENCES `movies` (`mid`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
