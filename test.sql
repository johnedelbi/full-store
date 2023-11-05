-- What is SQL?
            -- SQL stands for Structured Query Language.
            -- SQL is a language used to retrieve and manipulate data in a RDMS.

-- What is RDBMS?
            -- Relational Database Tables where data is stored in tables.

-- what is BATABASE?
                -- databases are used to store and manage the data objects that are related to one another
-- TABLE?
        -- table is a fundamental structure used for storing and organizing data.
        -- It's a collection of related data entries and consists of rows and columns.
-- what is FIELD(COLUMN)?
                -- Each column represents a specific attribute or piece of information related to the data stored in the table.
-- RECORD(ROW)?
        -- a single data entry or instance containing a collection of related information in a table.
-- what is OPERATORS?
        --  operators are symbols or keywords used to perform operations on data. They include comparison, arithmetic, logical, and string operators among others.
-- DATA TYPES
        -- There are three main types of SQL data types available : 
                                --  String
                                -- Numeric
                                -- Date and Time
-- DATABASE CREATE , DROP, USE:

-- CREATE DATABASE test;
-- DROP DATABASE test;
-- USE test;


-- TABLE CREATE , DROP, RENAME

-- USE test;
-- CREATE TABLE CUSTOMERS(
--    ID          INT NOT NULL,
--    NAME        VARCHAR (20) NOT NULL,
--    AGE         INT  CHECK(AGE>=18) NOT NULL,
--    ADDRESS     CHAR (25),
--    SALARY      DECIMAL (18, 2),
--    PRIMARY KEY (ID)
-- );

-- USE test;
-- RENAME TABLE CUSTOMERS to CUSTOMERS21;

-- USE test;
-- DROP TABLE CUSTOMERS

-- INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) VALUES
-- (1, 'JOE', 21, 'ALEPPO', 6500.00 ),
-- (2, 'DAVID', 33, 'PARIS', 6500.00 ),
-- (3, 'CELINA', 80, 'BRUXELLES', 6500.00 ),
-- (4, 'JIMMY', 36, 'SYRIA', 6500.00 ),
-- (5, 'ADEL', 27, 'DAMASCUS', 8500.00 ),
-- (6, 'SAMIR', 37, 'AL-HASAKA', 4500.00 );
-- SELECT * FROM CUSTOMERS;


-- UPDATE CUSTOMERS SET ADDRESS = 'AMSTERDAM' WHERE ID = 6;
-- SELECT * FROM CUSTOMERS

-- DELETE FROM CUSTOMERS WHERE ID > 4;
-- SELECT * FROM CUSTOMERS;

-- SELECT * FROM CUSTOMERS 
-- WHERE AGE IN ('80', '36');


-- SELECT * FROM CUSTOMERS 
-- WHERE AGE BETWEEN '35' AND '80';

-- SELECT COUNT(*) FROM CUSTOMERS;

-- SELECT AVG(AGE) FROM CUSTOMERS;

-- SELECT * FROM CUSTOMERS 
-- WHERE SALARY < 6600 OR AGE < 25;


-- SELECT * FROM CUSTOMERS 
-- WHERE NAME LIKE '%N%';


-- SELECT * FROM CUSTOMERS LIMIT 2;


-- SELECT * FROM CUSTOMERS ORDER BY SALARY DESC


-- CONSTRAINTS
-- CREATE TABLE orders (
--    ID INT PRIMARY KEY AUTO_INCREMENT ,
--    CUSTOMER_ID INT ,
--    name VARCHAR (20) NOT NULL,
--    price INT DEFAULT 18,
--    address VARCHAR (25),
--     FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMERS(ID)
-- );

-- INSERT INTO orders (CUSTOMER_ID, name, price, address) VALUES
-- (1, 'Margherita', 18, '123 Main St'),
-- (2, 'Pepperoni', 18, '456 Elm St'),
-- (1, 'Vegetarian', 18, '789 Oak St'),
-- (3, 'Hawaiian', 18, '101 Pine St'),
-- (2, 'Supreme', 18, '210 Maple St'),
-- (3, 'BBQ Chicken', 18, '15 Cedar St'),
-- (1, 'Mushroom', 18, '88 Walnut St'),
-- (2, 'Meat Lovers', 18, '72 Birch St'),
-- (3, 'Pineapple Jalapeno', 18, '33 Spruce St'),
-- (1, 'Buffalo Chicken', 18, '50 Sycamore St');
-- SELECT * FROM orders;


-- SELECT customers.NAME, orders.name AS 'order' , orders.address 
-- FROM customers
-- INNER JOIN orders
-- on customers.`ID` = orders.`CUSTOMER_ID`;


-- SELECT customers.NAME, orders.name AS 'order' , orders.address 
-- FROM customers
-- left JOIN orders
-- on customers.`ID` = orders.`CUSTOMER_ID`;

-- SELECT customers.NAME, orders.name AS 'order' , orders.address 
-- FROM customers
-- RIGHT JOIN orders
-- on customers.`ID` = orders.`CUSTOMER_ID`;

-- ALTER TABLE orders
-- ADD INDEX idx_name (name);


/*
INJECTION
COMMIT
ROLLBACK
*/