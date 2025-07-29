# Task 8: User Authentication

This project implements a secure user authentication system using **NextAuth** and integrates it with custom backend API endpoints for user registration and login. The goal is to build a functional and user-friendly authentication flow with clean UI and best practices.

## 🔐 Features

- Signup and Signin pages with proper UI and form validation
- API integration with Akil backend for:
  - User registration (`/Signup`)
  - Email verification (`/verify)
  - User login (`/api/auth/signin`)
- Secure storage of access tokens
- Client-side form validation
- Responsive design and accessibility features

---

## 📸 Screenshots

### 📝 Signup Page

<img width="1886" height="865" alt="Screenshot 2025-07-29 202853" src="https://github.com/user-attachments/assets/0e502337-9a54-4153-bc43-c41beee0c021" />


> Users can create an account with full validation, and their information is sent to the backend for processing.

---

### 🔑 Signin Page

<img width="1882" height="849" alt="Screenshot 2025-07-29 202838" src="https://github.com/user-attachments/assets/b8e92286-99ac-4e82-b3e0-8f13ed802866" />


> Users can log in using their credentials. The access token is securely stored and used for future authenticated requests.

---
### verify page
<img width="1846" height="823" alt="Screenshot 2025-07-29 203145" src="https://github.com/user-attachments/assets/f7b9c1dd-0698-49dc-9dfa-2bdd6836c547" />
<img width="1477" height="691" alt="Screenshot 2025-07-29 203212" src="https://github.com/user-attachments/assets/8f02cd74-02cc-4753-88b1-2702772b17fc" />


---
---
<img width="1846" height="810" alt="Screenshot 2025-07-29 203304" src="https://github.com/user-attachments/assets/33df6671-92e7-4290-8e7a-0441fade43bf" />

<img width="1678" height="630" alt="Screenshot 2025-07-29 203243" src="https://github.com/user-attachments/assets/2e10bfbe-89d3-483f-a979-9a1c25ddbd5f" />
<img width="1846" height="810" alt="Screenshot 2025-07-29 203304" src="https://github.com/user-attachments/assets/1dea5f3f-87ba-4c93-bbda-58815eae8047" />


---




## ⚙️ Technologies Used

- **NextAuth.js**
- **React**
- **Next.js**
- **Tailwind CSS**
- **TypeScript**
- **Fetch API**
- **axios**

---

## 🔗 API Endpoints

Base URL: `https://akil-backend.onrender.com`

| Endpoint        | Method | Description                  |
|-----------------|--------|------------------------------|
| `/signup`       | POST   | Registers a new user         |
| `/verify-email` | POST   | Verifies email with OTP      |
| `/login`        | POST   | Authenticates existing user  |

### 📤 Sample Payloads

#### Signup
```json
{
  "name": "Izzat Engida",
  "email": "izzat.engida@a2sv.org",
  "password": "123456789",
  "confirmPassword": "123456789",
  "role": "user"
}

Login

{
  "email": "izzat.engida@a2sv.org",
  "password": "123456789"
}

Verify Email

{
  "email": "izzat.engida@a2sv.org",
  "OTP": "123456"
}

✅ Validation Rules

    Email must be valid and non-empty

    Confirm password must match password

    All fields are required

    Feedback is shown for both success and error states


📝 How to Run Locally

    Clone the repo:

git clone https://github.com/Izzat-Engida/task8.git
cd task8

Install dependencies:

npm install

Add .env.local file:

NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_ID=your_id
GOOGLE_Secret=your_secret

Start the development server:

npm run dev
