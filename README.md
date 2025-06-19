# Employee System - Examen Técnico Oechsle

Este proyecto contiene los 3 ejercicios solicitados para el examen técnico, desarrollados con **NestJS**, **Node.js** y **React**, conectados a una base de datos **SQL Server** y preparados para ser desplegados con **Docker**.

---

## 📁 Estructura del Proyecto

```
employee-api/        → API REST con NestJS
employee-report/     → App consola que genera y envía un reporte en Excel
employee-frontend/   → Web en React que lista los empleados
docker-compose.yml   → Orquestación de servicios con Docker
```

---

## 🧰 Requisitos

- Docker y Docker Compose
- (Opcional) Node.js y npm si deseas correrlo sin Docker

---

## 🚀 Ejecución con Docker Compose

1. Clona el repositorio o descomprime el proyecto

2. Ejecuta el siguiente comando:

```bash
docker compose up --build
```

3. Accede a los servicios:

- API REST Swagger: http://localhost:3000/api
- Frontend React: http://localhost:3001

---

## ⚙️ Variables de Entorno

### employee-api/.env
```
DB_HOST=sqlserver
DB_PORT=1433
DB_USER=sa
DB_PASSWORD=YourPassword123
DB_DATABASE=EmployeeDB
```

### employee-report/.env (crear manualmente)
```
DB_HOST=sqlserver
DB_PORT=1433
DB_USER=sa
DB_PASSWORD=YourPassword123
DB_DATABASE=EmployeeDB
START_DATE=2021-01-01
END_DATE=2022-12-31
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_app
```

---

## 📤 Subida a DockerHub

Compilar y subir cada componente:

```bash
# API
cd employee-api
docker build -t tu_usuario/employee-api .
docker push tu_usuario/employee-api

# Consola
cd ../employee-report
docker build -t tu_usuario/employee-report .
docker push tu_usuario/employee-report

# Frontend
cd ../employee-frontend
docker build -t tu_usuario/employee-frontend .
docker push tu_usuario/employee-frontend
```

---

## 📬 Reporte por Correo

El script de consola enviará un Excel con los empleados entre las fechas definidas a:

```
franco.paredes@oechsle.pe
```

Asegúrate de usar un correo con autenticación habilitada mediante contraseña de aplicación.

---

## 👨‍💻 Autor

José Luis Augusto Romero Quintana  
[LinkedIn](https://www.linkedin.com/) · [GitHub](https://github.com/)

---
