# 🛍️ Shopify E-commerce Web

A sleek and responsive e-commerce frontend built with React and Vite. This application allows users to browse products, add them to a cart, and manage cart items—all without a backend. It leverages React's Context API for global state management and React Props for dynamic product rendering.

https://rishijain21-shopify-e-commerce-web-3qhc.vercel.app/

## ✨ Features

* **Frontend-Only Architecture**: No backend integration; all data is managed on the client side.
* **Product Display**: Showcases products with images, names, prices, and descriptions using React Props.
* **Shopping Cart Functionality**: Users can add products to the cart, adjust quantities, and remove items.
* **Global State Management**: Utilizes React's Context API to manage cart state across components.
* **Responsive Design**: Ensures optimal viewing on various devices, from desktops to mobile phones.
* **Component-Based Structure**: Clean and modular codebase with reusable components.

## 🛠️ Technologies Used

* **React**: For building dynamic user interfaces.
* **Vite**: For fast and efficient development and build processes.
* **React Context API**: For managing global state (cart functionality).
* **React Props**: For passing data to components.
* **CSS Modules / Tailwind CSS**: For styling components 

## 📁 Project Structure

```
ecommerce/
├── frontend
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   └── vite.svg
│   ├── README.md
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   ├── images (various .avif, .webp, .jpg, .png, .jfif)
│   │   │   ├── all_product.js
│   │   │   ├── data.js
│   │   │   ├── newcollections.js
│   │   ├── components/
│   │   │   ├── Breadcrumbs/
│   │   │   │   ├── Breadcrumbs.css
│   │   │   │   └── Breadcrumbs.jsx
│   │   │   ├── cartItems/
│   │   │   │   ├── cartItem.css
│   │   │   │   └── CartItem.jsx
│   │   │   ├── Discription/
│   │   │   │   ├── Discription.css
│   │   │   │   └── Discription.jsx
│   │   │   ├── Footer/
│   │   │   │   ├── FooterItem.css
│   │   │   │   └── FooterItem.jsx
│   │   │   ├── hero/
│   │   │   │   ├── hero.css
│   │   │   │   └── Hero.jsx
│   │   │   ├── items/
│   │   │   │   ├── item.css
│   │   │   │   └── item.jsx
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.css
│   │   │   │   └── Navbar.jsx
│   │   │   ├── newCollection/
│   │   │   │   ├── Newcollections.jsx
│   │   │   │   └── newCollectionsCSS.css
│   │   │   ├── newsletter/
│   │   │   │   ├── Newsletter.jsx
│   │   │   │   └── newsletterStyle.css
│   │   │   ├── offers/
│   │   │   │   ├── offer.css
│   │   │   │   └── Offer.jsx
│   │   │   ├── popular/
│   │   │   │   ├── popular.css
│   │   │   │   └── popular.jsx
│   │   │   ├── ProductDisplay/
│   │   │   │   ├── productDisplay.css
│   │   │   │   └── ProductDisplay.jsx
│   │   │   └── RelatedProducts/
│   │   │       ├── RelatedProducts.css
│   │   │       └── RelatedProducts.jsx
│   │   ├── context/
│   │   │   └── ShopContext.jsx
│   │   ├── CSS/
│   │   │   ├── loginSignup.css
│   │   │   └── ShopCategory.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages/
│   │       ├── cart.jsx
│   │       ├── loginsignup.jsx
│   │       ├── products.jsx
│   │       ├── shop.jsx
│   │       └── shopCategory.jsx
│   └── vite.config.js
```



## 🚀 Getting Started

### Prerequisites

* Node.js and npm installed on your machine.

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
## 📸 Screenshots
![image](https://github.com/user-attachments/assets/4aef9738-1bba-42ea-8664-a473294d3729)

![image](https://github.com/user-attachments/assets/a2731385-d002-4290-8755-6263551af850)

![image](https://github.com/user-attachments/assets/bb847d0e-566b-456e-8d7d-69870965e621)
![image](https://github.com/user-attachments/assets/1475de7d-b5ee-4556-a2a9-7533012ed3a2)
![image](https://github.com/user-attachments/assets/2562254a-f832-44da-baa4-072b53c8d17e)

![image](https://github.com/user-attachments/assets/a5a49256-4712-48ff-9031-0fae3d78bfb9)
![image](https://github.com/user-attachments/assets/a0e9728a-8fb5-4f52-b2e3-674181c4ba02)
## 🧠 Learnings and Concepts

* **React Props**: Used for passing product data to components like `ProductCard`.
* **React Context API**: Implemented in `CartContext.jsx` to manage cart state globally.
* **State Management**: Handled using React's `useState` and `useContext` hooks.
* **Component Reusability**: Created reusable components for products, cart, and navigation.([Stack Overflow][4])



