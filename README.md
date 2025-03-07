# Student_Management_System


## 📌 Overview

The **Student Management System** is a mobile application built with **React Native** for the frontend and **NestJS with MongoDB** for the backend. It provides role-based navigation, allowing **admins** to manage students and attendance, while **users** can view student lists and attendance records.

## 🎯 Features

### 🛠️ Admin Panel:
- Add new students.
- Update or delete student records.
- View a list of all students.
- Add attendance (mark present/absent for a date).

### 👥 User Panel:
- View the list of students.
- View attendance records (date-wise presence status).

## 🏗️ Tech Stack
- **Frontend:** React Native  
- **Backend:** NestJS  
- **Database:** MongoDB  
- **Styling:** CSS (React Native Stylesheets)  

## 🚀 Installation and Setup

### 📌 Prerequisites:
- Node.js & npm installed  
- MongoDB installed & running  
- React Native CLI (or Expo for managed workflow)  



### 1. Clone the repository:
   ```bash
   git clone git@github.com:Krishnapushpan/Student_Management.git
   cd React-Native
   ```

### 💻 Backend Setup (NestJS)

```bash
cd Backend
npm install
npm run start:dev
```

### 📱 Frontend Setup (React Native)
```bash
cd Myapp
npm install
npx expo start
```
**Open the application in your browser**:

	 http://localhost:8081/
