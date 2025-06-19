CREATE DATABASE EmployeeDB
GO

USE EmployeeDB
GO

CREATE TABLE Employee (
    id INT PRIMARY KEY IDENTITY(1,1),
    name VARCHAR(100),
    document_number VARCHAR(8),
    salary DECIMAL(10, 2),
    age INT,
    profile VARCHAR(50),
    admission_date DATE
);
GO

INSERT INTO Employee (name, document_number, salary, age, profile, admission_date) VALUES
('Ana López', '12345678', 3500.00, 30, 'Analista', '2020-02-15'),
('Luis García', '23456789', 4000.00, 32, 'Desarrollador', '2020-05-10'),
('Carlos Ruiz', '34567890', 4200.00, 35, 'QA Tester', '2020-08-20'),
('Sofía Ramos', '45678901', 3800.00, 28, 'Backend Dev', '2020-11-03'),
('Miguel Torres', '56789012', 4600.00, 37, 'Frontend Dev', '2020-12-22'),

('Elena Díaz', '67890123', 3900.00, 29, 'Analista', '2021-01-15'),
('Javier Prado', '78901234', 4100.00, 33, 'Desarrollador', '2021-03-18'),
('Raúl Núñez', '89012345', 4500.00, 36, 'QA Tester', '2021-06-10'),
('Lucía Romero', '90123456', 3700.00, 27, 'Scrum Master', '2021-09-25'),
('Andrés Vega', '01234567', 4800.00, 39, 'DevOps', '2021-12-01'),

('Claudia Pérez', '11223344', 3950.00, 31, 'Backend Dev', '2022-01-20'),
('Mario Gutiérrez', '22334455', 4300.00, 34, 'Frontend Dev', '2022-03-14'),
('Verónica Salas', '33445566', 3850.00, 30, 'Analista', '2022-04-28'),
('Diego Castro', '44556677', 4700.00, 38, 'Desarrollador', '2022-05-09'),
('Natalia León', '55667788', 3600.00, 26, 'Diseñadora UX', '2022-06-17'),
('Héctor Mendoza', '66778899', 4200.00, 35, 'QA Tester', '2022-07-22'),
('Patricia Rivas', '77889900', 4100.00, 32, 'Product Owner', '2022-08-05'),
('Jorge Salinas', '88990011', 4400.00, 33, 'Tech Lead', '2022-09-11'),
('Carmen Bravo', '99001122', 4000.00, 31, 'Backend Dev', '2022-10-29'),
('Renato Silva', '10111213', 4500.00, 37, 'DevOps', '2022-12-15');
GO