
# Medical-Agency

![License](https://img.shields.io/badge/license-ISC-green)

## 📝 Description

Medical-Agency is a robust web-based management platform built with Express.js, designed to streamline the administrative operations of medical agencies. This application provides a comprehensive solution for organizing medical catalogs and managing core agency processes through a centralized web interface, ensuring efficient data handling and resource tracking for healthcare providers.

## ✨ Features

- 🕸️ Web


## 🛠️ Tech Stack

- 🚀 Express.js


## 📦 Key Dependencies

```
axios: ^1.11.0
bcryptjs: ^3.0.2
cloudinary: ^2.7.0
cookie-parser: ^1.4.7
cors: ^2.8.5
dotenv: ^17.2.1
express: ^5.1.0
jsonwebtoken: ^9.0.2
mongoose: ^8.17.0
multer: ^2.0.2
streamifier: ^0.1.1
```

## 🚀 Run Commands

- **test**: `npm run test`
- **start**: `npm run start`
- **dev**: `npm run dev`


## 📁 Project Structure

```
.
├── Backend
│   ├── index.js
│   ├── package.json
│   └── src
│       ├── Init
│       │   ├── data.js
│       │   └── insert.js
│       ├── Models
│       │   ├── Medicine.js
│       │   ├── Order.js
│       │   └── UserModel.js
│       ├── Util
│       │   ├── cloudinary.js
│       │   └── jsonWeb.js
│       ├── controllers
│       │   ├── authController.js
│       │   ├── medicineController.js
│       │   └── orderController.js
│       ├── middleware
│       │   ├── multer.js
│       │   └── protect.js
│       └── routes
│           ├── authRoutes.js
│           ├── medicineRoutes.js
│           └── orderRoutes.js
└── Frontend
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.jsx
    │   ├── Constant
    │   │   └── info.js
    │   ├── assets
    │   │   ├── Akupi.jpg
    │   │   ├── Doctor, Medical, Surgeon, Healthcare Animation.json
    │   │   ├── agency.webp
    │   │   ├── generated-image.png
    │   │   ├── inogration.webp
    │   │   ├── inter.webp
    │   │   ├── naman.jpg
    │   │   ├── naman1.jpg
    │   │   └── react.svg
    │   ├── components
    │   │   ├── Admin
    │   │   │   ├── AdminDashboard.jsx
    │   │   │   └── ConfirmModal.jsx
    │   │   ├── Auth
    │   │   │   ├── LoginPage.jsx
    │   │   │   └── RegisterPage.jsx
    │   │   ├── MainComp
    │   │   │   ├── Home.jsx
    │   │   │   ├── HomePage.jsx
    │   │   │   ├── MedicineDetailPage.jsx
    │   │   │   ├── MedicinesGridPage.jsx
    │   │   │   ├── MedicinesList.jsx
    │   │   │   └── QRPlaceholder.jsx
    │   │   ├── NavBar
    │   │   │   └── Navbar.jsx
    │   │   ├── Order
    │   │   │   ├── AdminOrders.jsx
    │   │   │   └── MyOrders.jsx
    │   │   ├── Profile
    │   │   │   └── ProfileDisplay.jsx
    │   │   ├── Settings
    │   │   │   └── SettingsPage.jsx
    │   │   ├── Ui
    │   │   │   └── Particles.jsx
    │   │   └── UploadFrom.jsx
    │   │       ├── CreateMedicineForm.jsx
    │   │       └── UpdateMedicineForm.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── store
    │       ├── authStore.js
    │       ├── medicineStore.js
    │       ├── useOrderStore.js
    │       └── useThemeStore.js
    ├── vercel.json
    └── vite.config.js
```

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/akshatharshit/Medical-Agency.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

## 📜 License

This project is licensed under the ISC License.

---
*This README was generated with ❤️ by ReadmeBuddy*
