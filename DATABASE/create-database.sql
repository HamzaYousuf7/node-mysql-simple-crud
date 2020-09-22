DROP DATABASE IF EXISTS `crud_operation`;
CREATE DATABASE `crud_operation`; 
USE `crud_operation`;



CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  
  PRIMARY KEY (`product_id`)
) ;