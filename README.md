# Team Directory Application

A full-stack employee directory application built with **ColdFusion** (REST API) and **React** (Frontend).

## 🚀 Features

- RESTful API with ColdFusion
- Modern React frontend with Vite
- MySQL database with 8 sample employees
- Real-time search functionality
- Responsive design
- CORS handling
- Security best practices (prepared statements, input sanitization)

## 🏗️ Project Structure
```
team-directory/
├── backend/
│   ├── Application.cfc      # CORS and app configuration
│   └── index.cfm           # REST API endpoint
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── SearchBar.jsx
│   │   │   └── EmployeeCard.jsx
│   │   ├── hooks/          # Custom React hooks
│   │   │   └── useEmployees.js
│   │   ├── services/       # API service layer
│   │   │   └── api.js
│   │   ├── App.jsx         # Main app component
│   │   └── App.css         # Styles
│   ├── .env               # Environment variables
│   └── package.json
└── database/
    └── schema.sql         # Database schema and seed data


```

## 📋 Prerequisites

- **Lucee Express** or **ColdFusion 2021+**
- **MySQL 8.0+**
- **Node.js 18+**

## 🛠️ Setup Instructions

### 1. Database Setup
```bash
# Login to MySQL
mysql -u root -p

# Run the SQL commands
CREATE DATABASE team_directory;
USE team_directory;

# Create table and insert data (see database/schema.sql)
```

### 2. Backend Setup (ColdFusion/Lucee)
 **Download and extract Lucee Express:**
   - https://download.lucee.org/
   - Extract to: `C:\lucee-express\`
   - 
1. Copy the `backend` folder to Lucee webapps:
```
   C:\lucee-express\webapps\ROOT\team-directory\
```

2. Make sure MySQL JDBC driver is in:
```
   C:\lucee-express\lib\mysql-connector-j-8.x.x.jar
```

3. Update MySQL password :
```in cmd:
mysql> ALTER USER ;
```

4. Start Lucee:
```bash
   cd C:\lucee-express
   start.bat
```

5. Test API:
```
   http://localhost:8888/team-directory/index.cfm
```

### 3. Frontend Setup (React)
```bash
cd frontend

# Install dependencies
npm install

# Create .env file
echo VITE_API_BASE_URL=http://localhost:8888/team-directory/index.cfm > .env

# Run development server
npm run dev
```

The app will open at `http://localhost:5173`

## 🎯 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees.cfc?method=getEmployees` | Get all employees |
| GET | `/api/employees.cfc?method=getEmployees&search=john` | Get one employee


### Example Response
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "fullName": "John Doe",
      "role": "Senior Software Engineer",
      "email": "john.doe@company.com",
      "department": "Engineering",
      "hireDate": "2020-03-15",
      "phoneNumber": "555-0101"
    }
  ],
  "count": 8
}
```

## 🏗️ Project Structure
```
team-directory/
├── backend/
│   ├── Application.cfc      # CORS and app configuration
│   └── index.cfm           # REST API endpoint
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── SearchBar.jsx
│   │   │   └── EmployeeCard.jsx
│   │   ├── hooks/          # Custom React hooks
│   │   │   └── useEmployees.js
│   │   ├── services/       # API service layer
│   │   │   └── api.js
│   │   ├── App.jsx         # Main app component
│   │   └── App.css         # Styles
│   ├── .env               # Environment variables
│   └── package.json
└── database/
    └── schema.sql         # Database schema and seed data


```

## 🔒 Security Features

- **SQL Injection Prevention:** Using JDBC prepared statements
- **CORS Configuration:** Proper cross-origin headers
- **Input Sanitization:** Search terms are sanitized
- **Error Handling:** Graceful error handling without exposing sensitive data
- **Environment Variables:** Sensitive configs in .env files

## 💻 Technologies Used

- **Backend:** ColdFusion/Lucee, MySQL 8.0
- **Frontend:** React 18, Vite 6
- **Styling:** Custom CSS with modern design
- **Architecture:** REST API, Component-based UI

## 🧪 Testing

**Test Backend API:**
```bash
# Get all employees
curl http://localhost:8888/api/employees.cfc?method=getEmployees

# Search employees
curl "http://localhost:8888/api/employees.cfc?method=getEmployees&search=john"

```

**Test Frontend:**
1. Open http://localhost:5173
2. Try searching for different terms
3. Verify all employee cards display

### 1. Important points to note


- Used correct path for password.txt:
```
  C:\lucee-express\lucee-server\context\password.txt
```
- File contained only the password (no variable name)
--

 Define `CATALINA_HOME` in system variables
 CATALINA_HOME=C:\lucee-express\bin\start.bat


- Placed JBDC driver in correct location:
```
  C:\lucee-express\lib\mysql-connector-j-8.x.x.jar
```

## 🎓 Key Implementation Details

### React Patterns Used
- **Custom Hooks:** `useEmployees` for data management
- **State Management:** `useState` for local state
- **Side Effects:** `useEffect` for API calls
- **Memoization:** `useCallback` to prevent unnecessary re-renders
- **Debouncing:** Search input debounced to 300ms

### ColdFusion Best Practices
- Prepared statements for SQL queries
- Proper error handling and logging
- CORS headers for secure cross-origin requests
- Clean JSON responses
- Connection pooling with JDBC

## 👨‍💻 Author

Created for MED49 Solutions Inc. - ColdFusion Intern Position

## 📄 License

MIT License
