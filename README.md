
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




<div align="center">

![Banner](https://capsule-render.vercel.app/api?type=waving&color=00ff41&height=200&section=header&text=Medical-Agency&fontSize=70&fontAlignY=38&desc=Medical%20Agency%20Catalog%20and%20mangement&descAlignY=61&descAlign=62)

[![GitHub Stars](https://img.shields.io/github/stars/akshatharshit/Medical-Agency?style=for-the-badge&logo=github&logoColor=white&color=0969da)](https://github.com/akshatharshit/Medical-Agency/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/akshatharshit/Medical-Agency?style=for-the-badge&logo=git&logoColor=white&color=8250df)](https://github.com/akshatharshit/Medical-Agency/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/akshatharshit/Medical-Agency?style=for-the-badge&logo=github&logoColor=white&color=e5534b)](https://github.com/akshatharshit/Medical-Agency/issues)
[![GitHub License](https://img.shields.io/github/license/akshatharshit/Medical-Agency?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=2da44e)](https://github.com/akshatharshit/Medical-Agency/blob/main/LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/akshatharshit/Medical-Agency?style=for-the-badge&logo=git&logoColor=white&color=f9826c)](https://github.com/akshatharshit/Medical-Agency/commits)

![JavaScript](https://img.shields.io/badge/JavaScript-f1e05a?style=for-the-badge&logo=javascript&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-563d7c?style=for-the-badge&logo=css&logoColor=white) ![HTML](https://img.shields.io/badge/HTML-e34c26?style=for-the-badge&logo=html&logoColor=white)

### [🌐 Live Demo](https://medical-agency.vercel.app)

</div>

<br>
<p align="center"><img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="divider" width="100%" /></p>
<br>

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="icon" width="25" height="25" /> **📖 Overview**

**Medical-Agency** is a 🖥️ frontend application.

Medical Agency Catalog and mangement

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="icon" width="25" height="25" /> **🛠️ Tech Stack**

**Languages:**
- JavaScript — 99.1%
- CSS — 0.6%
- HTML — 0.2%

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="icon" width="25" height="25" /> **🏗️ Project Structure**

<details>
<summary><b>📁 Toggle Directory Tree</b></summary>
<br>
```bash
├── 📁 Backend
│   ├── 📁 src
│   │   ├── 📁 controllers
│   │   ├── 📁 Init
│   │   ├── 📁 middleware
│   │   ├── 📁 Models
│   │   ├── 📁 routes
│   │   └── 📁 Util
│   ├── 📄 .gitignore
│   ├── 📄 index.js
│   ├── 📄 package-lock.json
│   └── 📄 package.json
├── 📁 Frontend
│   ├── 📁 public
│   │   └── 📄 vite.svg
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   ├── 📁 components
│   │   ├── 📁 Constant
│   │   ├── 📁 store
│   │   ├── 📄 App.jsx
│   │   ├── 📄 index.css
│   │   └── 📄 main.jsx
│   ├── 📄 .gitignore
│   ├── 📄 eslint.config.js
│   ├── 📄 index.html
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   ├── 📄 README.md
│   ├── 📄 vercel.json
│   └── 📄 vite.config.js
└── 📄 README.md
```
</details>

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="icon" width="25" height="25" /> **🚀 Getting Started**

### Prerequisites

### Installation

```bash
# Clone the repository
git clone https://github.com/akshatharshit/Medical-Agency.git

# Navigate to project directory
cd Medical-Agency

```

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="icon" width="25" height="25" /> **🤝 Contributing**

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contributors

<table>
<tr>
<td align="center"><a href="https://github.com/akshatharshit"><img src="https://avatars.githubusercontent.com/u/152872166?v=4" width="60" alt="akshatharshit"/><br/><sub><b>akshatharshit</b></sub></a></td>
</tr>
</table>

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="icon" width="25" height="25" /> **📄 License**

This project does not currently specify a license.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Rocket.png" alt="icon" width="25" height="25" /> **💬 Support & Contact**

If you found this project helpful, please consider giving it a ⭐ on [GitHub](https://github.com/akshatharshit/Medical-Agency)!

For support, business inquiries, or to report an issue, please open an issue in the repository or contact the maintainer.

<br>
<p align="center"><img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png" alt="divider" width="100%" /></p>
<br>

<p align="center">Made with ❤️ by <a href="https://github.com/akshatharshit"><b>@akshatharshit</b></a></p>
