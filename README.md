# 🚀 Full-Stack Blog & Authentication System

This project is a **Blog Application** with authentication, CRUD operations, and listing/data management features.  
It demonstrates fundamental full-stack development skills using **React (frontend)** and a backend (Appwrite/other service).  

---

## 📌 Features

### 1. 🔑 Authentication System
- Basic **username/password login** functionality.
- Libraries (e.g., JWT, bcrypt, or Passport.js) are optional.
- Architectural decision documented in `design_notes.md`.

### 2. 📝 CRUD Operations (Blog App)
Users can:
- ➕ **Add blog**
- 🗑️ **Delete blog**
- ✏️ **Edit & Update blog**
- 👀 **View blog**

**Field Types Implemented:**
- ✅ **Text field** – Blog Title, Content  
- ✅ **Enum (dropdown selection)** – Blog Status (Active/Inactive)  
- ✅ **Boolean field** – Published (Yes/No)  
- ✅ **Calculated field** – Estimated Reading Time (derived from word count & average reading speed)

### 3. 📂 Listing & Data Management
- ✅ **Pagination** (5–10 items per page)  
- ✅ **Filtering** (e.g., by status: active/inactive)  
    
  - Sorting (newest/oldest first)  
  - Search functionality  

---

## 🛠️ Implementation Details

- **Backend:** Node.js + Express (or Appwrite if preferred)  
- **Frontend:** React.js (with React Router & Redux Toolkit for state management)  
- **Database:** MongoDB / Appwrite Database  
- **Authentication:** Session/JWT-based auth  

---

## 🌍 Hosting

The project can be deployed on **free platforms - Vercel**:
Here is Project link **(myassignment-two.vercel.app)**
 

---

