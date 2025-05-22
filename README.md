# 🛍️ Shopify E-commerce Web (Frontend Only)

A sleek and responsive e-commerce frontend built with React and Vite. This application allows users to browse products, add them to a cart, and manage cart items—all without a backend. It leverages React's Context API for global state management and React Props for dynamic product rendering.([DEV Community][1])

## ✨ Features

* **Frontend-Only Architecture**: No backend integration; all data is managed on the client side.
* **Product Display**: Showcases products with images, names, prices, and descriptions using React Props.
* **Shopping Cart Functionality**: Users can add products to the cart, adjust quantities, and remove items.
* **Global State Management**: Utilizes React's Context API to manage cart state across components.
* **Responsive Design**: Ensures optimal viewing on various devices, from desktops to mobile phones.
* **Component-Based Structure**: Clean and modular codebase with reusable components.([Medium][2])

## 🛠️ Technologies Used

* **React**: For building dynamic user interfaces.
* **Vite**: For fast and efficient development and build processes.
* **React Context API**: For managing global state (cart functionality).
* **React Props**: For passing data to components.
* **CSS Modules / Tailwind CSS**: For styling components (choose based on your implementation).([FreeCodeCamp][3])

## 📁 Project Structure

```
rishijain21-Shopify-E-commerce-Web/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── Cart.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```



## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed on your machine.([DEV Community][1])

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/rishijain21/rishijain21-Shopify-E-commerce-Web.git
   cd rishijain21-Shopify-E-commerce-Web
   ```



2. **Install dependencies**:

   ```bash
   npm install
   ```



3. **Start the development server**:

   ```bash
   npm run dev
   ```



The application will be available at `http://localhost:5173`.

## 🧠 Learnings and Concepts

* **React Props**: Used for passing product data to components like `ProductCard`.
* **React Context API**: Implemented in `CartContext.jsx` to manage cart state globally.
* **State Management**: Handled using React's `useState` and `useContext` hooks.
* **Component Reusability**: Created reusable components for products, cart, and navigation.([Stack Overflow][4])

## 📸 Screenshots


