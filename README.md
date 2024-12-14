# Catalogue de Produits

This is a web application for managing a product catalog. The app is built with **Angular** (frontend) and **Spring Boot** (backend).

---

## Features
- List products by category.
- Add a new product with its category.
- Filter products by category.
- Responsive design with Bootstrap.

---

## Technology Stack
### Frontend
- **Angular**: Tested with Angular 19.0.5
- **Bootstrap**: Version 5

### Backend
- **Java**: Version 17
- **Spring Boot**: Version 3.4.0
- **Maven**: Version 3.8+

---

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js**: Tested with Node.js v22.12.0 (compatible with v18+)
- **Angular CLI**: Version 15 or later
- **Java Development Kit (JDK)**: Version 17
- **Maven**: Version 3.8+

---

# 1. Project Setup

### Clone the Repository

```bash
git clone https://github.com/ismail01100/Gestion_Produit_catalogue.git
```

---

# 2. Backend Setup
 ```bash
cd Gestion_Produit_catalogue
```
##  Run the backend
```bash
mvn spring-boot:run
```
## Verify the backend is running:
```bash
Access the backend at: http://localhost:8080
```
---
# 3. Frontend Setup
  ### Navigate to the frontend folder (vscode )
  ```bash
cd 02_frontend  
```
### Install dependencies
```bash
npm install
```
### Start the frontend server
```bash
ng serve

```
## Verify the frontend is running:
```bash
Access the frontend at: http://localhost:4200
```
---
##  Note
### Create database and in "application.properties" for the first time it should be "create" not "update"
``` bash
spring.jpa.hibernate.ddl-auto=create
```
---
# 4. API Endpoints
- **GET /api/produits**: Fetch all products
  ``` bash
   http://localhost:8080/api/produits
   ```
- **GET /api/produits/{idCategorie}**: Fetch products by category ID.
  ``` bash
   http://localhost:8080/api/produits/1
   ```
- **POST /api/ajoutProduit**: Add a new product.
  ``` bash
   http://localhost:8080/api/ajoutProduit
   ```
- **GET /api/categories**: Fetch all categories.
  ``` bash
   http://localhost:8080/api/categories
   ```
<div>
   La page d'acceuille : 
   
   <img src="https://github.com/user-attachments/assets/d564e1e4-56a9-43e6-9d28-b4d0efe910ce" >
   
   Le Filtrage par categorie:
   
   <img src="https://github.com/user-attachments/assets/e284b511-dbfd-48f2-be07-e8954b1e3965" >

   La page d'ajout :
   
   <img src="https://github.com/user-attachments/assets/2404f827-21f0-4f5f-afc6-89ed841c5d3f" >
   
   La verification:
   
   <img src="https://github.com/user-attachments/assets/b6b18b77-d1c2-4e36-b633-93cf4eea464f" >

   
</div>

