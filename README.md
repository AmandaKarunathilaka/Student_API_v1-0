#### **📚 Student Management API (Node.js + Express + MongoDB)**



##### **🚀Project Overview**



This project define a simple and beginner-friendly RESTful API that developed to manage student information. It's built using Node.js, Express and MonogoDB by following the clean architecture(MVC architecture). The main goal of this system is to understand how backend development works by performing basic operations such as create, read, update, delete on student records.



##### 

##### **🛠️Technologies Used**



* Node.js - Server-side runtime environment
* Express.js - Web framework for building APIs
* MongoDB - NoSQL database
* Mongoose - ODM(Object Data Modeling) for MongoDB
* Postman(API testing)





##### ⚙️**Features**



This API provides the following functionalities:



* Add a new student to the database
* View all students
* View a specific student by ID
* Update student details
* Delete a student record





##### **🔐Middleware Implementation**



In this project, there are several middleware used for handling requests before they reach the main logic.



1. CORS (Cross-Origin Resource Sharing)
* This allow for external applications (like frontend apps) to communicate with this API.
2. JSON parser -  Used to read incoming JSON data from requests
3. MongoDB Sanitization - Used to prevent NoSQL injection attacks by cleaning user inputs.
4. Custom Request Validation - Ensures required fields (name and email) are provided before processing requests.





##### 📂**Project Structure**





STUDENT-API/

│

├── node\_modules/                # Installed project dependencies

│

├── src/

│   ├── config/

│   │   └── db.js               # MongoDB connection setup

│   │

│   ├── controllers/

│   │   └── studentController.js  # Handles CRUD logic for students

│   │

│   ├── middleware/

│   │   ├── errorHandler.js     # Global error handling middleware

│   │   └── validate.js         # Request validation middleware

│   │

│   ├── models/

│   │   └── studentModel.js     # Mongoose schema \& model

│   │

│   ├── routes/

│   │   └── studentRoutes.js    # API route definitions

│   │

│   ├── services/               # Optional business logic layer

│   │

│   └── app.js                  # Express app configuration (middleware, routes)

│

├── .env                        # Environment variables (DB URI, PORT, etc.)

├── package.json                # Project metadata and dependencies

├── package-lock.json           # Dependency lock file

├── README.md                   # Project documentation

├── server.js                   # Entry point (starts the server)







##### **🧪API Endpoints**



🔹 Create Student



&#x09;POST /api/students



🔹 Get All Students



&#x09;GET /api/students



🔹 Get Student by ID



&#x09;GET /api/students/



🔹 Update Student



&#x09;PUT /api/students/



🔹 Delete Student



&#x09;DELETE /api/students/







##### **🧰 Setup Instructions**





###### 1️⃣ Install Dependencies



###### MongoDB Setup (Atlas)

###### 2️⃣ Create MongoDB Account

&#x09;- Go to: https://www.mongodb.com/

&#x09;- Click Sign Up

&#x09;- Create a free account

&#x09;

###### 3️⃣ Create a Cluster

&#x09;- After login, click Create → Cluster

&#x09;- Choose Free Tier (Shared Cluster)

&#x09;- Select a cloud provider (AWS is fine)

&#x09;- Click Create Cluster



###### 4️⃣ Create Database User

&#x09;- Go to Database Access

&#x09;- Click Add New Database User

&#x09;- Set:

&#x09;     Username: (e.g., admin)

&#x09;     Password: (choose a strong password)

&#x09;- Click Create User



###### 5️⃣ Allow Network Access

&#x09;- Go to Network Access

&#x09;- Click Add IP Address

&#x09;- Select:

&#x09;       Allow Access from Anywhere (0.0.0.0/0)

&#x09;- Click Confirm



###### 6️⃣ Get Connection String

&#x09;- Go to Clusters

&#x09;- Click Connect

&#x09;- Choose Drivers

&#x09;- Copy the connection string



###### 7️⃣ Configure .env File



&#x09;- Create a .env file in the root folder:



###### 🔍 View Data

&#x09;- Open your database (e.g., studentDB)

&#x09;- Click the collection (e.g., students)

&#x09;- You will see inserted documents



###### 🚀 Run the Project



🧪 Test API (Postman)







##### 🌐 Database





* MongoDB (local or Atlas)
* Managed using Mongoose ODM







##### ✅ Conclusion



This project demonstrates a basic but secure backend API with:



&#x09;- Proper routing

&#x09;- MVC structure

&#x09;- Middleware integration

&#x09;- Database connectivity





##### 👩‍💻 Author



Amanda Karunathilaka

