# 🍴 RESTful API MongoDB Project

## 📖 Project Description
Tattler is a database for managing restaurant information, designed as part of a project where users can register, rate, and comment on restaurants.  
This project uses **MongoDB** as the main database system.

## ⚙️ Installation and Usage Instructions

1. Install MongoDB Community Server and MongoDB Compass.
2. Clone this repository in the command line:
   git clone https://github.com/Jesusale1234/RESTfulAPI.git
3. Use the MongoDB Compass CLI to create the database as follows:
   <img width="1816" height="596" alt="Captura de pantalla 2025-10-07 115858" src="https://github.com/user-attachments/assets/5c13e587-46cb-4bd7-91c2-d11f3974c752" />
   The name of the database should be: "tattlerprogramDB".
   <img width="1366" height="234" alt="Captura de pantalla 2025-10-07 120102" src="https://github.com/user-attachments/assets/227e7ac0-7c33-449d-b314-98d905c327f5" />
   The collection should be named "restaurants".
   I defined the following indexes:
   <img width="1377" height="385" alt="image" src="https://github.com/user-attachments/assets/d95e9aed-1aa8-4d2f-8e7a-bedd83b1af06" />

4. The MongoDB database should be included correctly. Define the following text as a CSV file:
    name,category,location,rating
    Tacos Don Juan,Mexican,Mexico City,4.5
    Sushi Kyo,Japanese,Tokyo,4.7
    La Pizzeria,Italian,Rome,4.3

5. Install the required dependencies on your computer by typing the following command in your command line: npm i express mongoose nodemon dotenv
6. Write the command "npm init" in your command line to create the project and define your preferences.
7. Download the project and open it in an IDE of your preference.
8. Download Postman to use the functionalities of the API.
9. Write the command "npm start" in your command line to start the project.
10. Use the multiple routes to make use of the API in Postman (you should locate in the Body menu, raw submenu to change some of the parameters). The routes are the following, with an example included:
    - POST localhost:3000/api/post (Upload restaurants to the database)
      <img width="1282" height="905" alt="Captura de pantalla 2025-10-09 181527" src="https://github.com/user-attachments/assets/abcb18c4-a43f-4494-ac0a-68cfa6ea3713" />

    - GET localhost:3000/api/getAll (Show the total of restaurants included in the database)
      <img width="1277" height="896" alt="Captura de pantalla 2025-10-09 181719" src="https://github.com/user-attachments/assets/01ebd70f-7f20-40fe-905f-5c0b4f37edb8" />
      
    - GET localhost:3000/api/getOne/... (Get a single restaurant's information by providing the ID of the restaurant instead of the points.)
      <img width="1271" height="896" alt="Captura de pantalla 2025-10-09 181810" src="https://github.com/user-attachments/assets/6d4b5ead-bce4-4f35-906d-d0186603843b" />

    - PATCH localhost:3000/api/update/... (Update a single restaurant's information by providing the ID and the parameters that will be modified).
      <img width="1277" height="893" alt="Captura de pantalla 2025-10-09 182030" src="https://github.com/user-attachments/assets/11bc604f-8585-42e3-92e0-f75ecfdcfdb3" />

    - DELETE localhost:3000/api/delete/... (Delete a single restaurant by providing the ID of the restaurant instead of the points.)
      <img width="1267" height="866" alt="Captura de pantalla 2025-10-09 182158" src="https://github.com/user-attachments/assets/695600d9-a676-4dcc-905a-25b32fb3c1ce" />

11. Check if the methods have been done in MongoDB Compass.


Version 2.0: RESTful API created and functional with MongoDB database.

Version 1.0: GitHub repository created and MongoDB database created.

  

   
