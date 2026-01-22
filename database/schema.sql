-- Create database
CREATE DATABASE IF NOT EXISTS team_directory
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE team_directory;

-- Create employees table
CREATE TABLE IF NOT EXISTS employees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Role VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Department VARCHAR(50),
    HireDate DATE,
    PhoneNumber VARCHAR(20),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_name (FirstName, LastName),
    INDEX idx_role (Role),
    INDEX idx_department (Department)
) ENGINE=InnoDB;

-- Insert dummy data
INSERT INTO employees (FirstName, LastName, Role, Email, Department, HireDate, PhoneNumber) VALUES
('John', 'Doe', 'Senior Software Engineer', 'john.doe@company.com', 'Engineering', '2020-03-15', '555-0101'),
('Jane', 'Smith', 'Product Manager', 'jane.smith@company.com', 'Product', '2019-07-22', '555-0102'),
('Michael', 'Johnson', 'UX Designer', 'michael.johnson@company.com', 'Design', '2021-01-10', '555-0103'),
('Emily', 'Brown', 'DevOps Engineer', 'emily.brown@company.com', 'Engineering', '2020-11-05', '555-0104'),
('David', 'Martinez', 'Data Analyst', 'david.martinez@company.com', 'Analytics', '2022-02-14', '555-0105'),
('Sarah', 'Wilson', 'Frontend Developer', 'sarah.wilson@company.com', 'Engineering', '2021-06-20', '555-0106'),
('Robert', 'Taylor', 'QA Engineer', 'robert.taylor@company.com', 'Quality Assurance', '2020-09-30', '555-0107'),
('Lisa', 'Anderson', 'Marketing Manager', 'lisa.anderson@company.com', 'Marketing', '2019-04-12', '555-0108');