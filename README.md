# 🛍️ React eShop

A modern, professional e-commerce application built with React, Redux Toolkit, and React Router. Features a clean UI with smooth animations, shopping cart functionality, and a seamless checkout experience.

## ✨ Features

- **Product Catalog** - Browse products with pagination (8 products per page)
- **Product Details** - View detailed information about each product
- **Shopping Cart** - Add/remove products, adjust quantities
- **Checkout** - Complete checkout form with order summary
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Professional fade-in and scale animations
- **Professional UI** - Clean, modern color palette with soft tones
- **State Management** - Redux Toolkit for cart management
- **Client-Side Routing** - React Router for seamless navigation

## 🎨 Tech Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Styling**: CSS3
- **API**: Fake Store API

## 📁 Project Structure
```text
react-eshop/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   │   └── Pagination.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ShoppingCart.jsx
│   │   └── Checkout.jsx
│   ├── services/
│   │   └── productService.js
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone 
cd react-eshop
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open in browser**
## 📦 Available Scripts

### Development
```bash
npm run dev
```
Runs the app in development mode with hot module replacement.

### Build
```bash
npm run build
```
Builds the app for production to the `dist` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally.

## 🎯 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Product listing with pagination |
| `/product/:id` | ProductDetail | Detailed product information |
| `/cart` | ShoppingCart | View and manage cart items |
| `/checkout` | Checkout | Checkout form and order summary |

## 🛒 Features Explained

### Home Page
- Displays 8 products per page
- Smooth product card animations
- Navigation with "Details" and "Add to Cart" buttons
- Pagination controls for browsing products

### Product Details Page
- Full product information
- Product rating and reviews count
- Product category
- "Add to Cart" button to add products to cart
- Cart count updates in real-time

### Shopping Cart
- View all added products
- Adjust product quantities
- Remove items from cart
- View total price
- Proceed to checkout

### Checkout
- Shipping information form
- Payment information form
- Order summary sidebar
- Real-time order total calculation
- Order confirmation message

## 🔄 State Management (Redux)

### Cart Slice
The cart state includes:
- `items` - Array of products in cart
- `totalPrice` - Total price of all items

### Actions
- `addToCart` - Add product to cart
- `removeFromCart` - Remove product from cart
- `updateQuantity` - Update product quantity
- `clearCart` - Clear all items from cart

## 🌐 API Integration

Products are fetched from **Fake Store API**:

### API Endpoints Used
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above (4 columns)
- **Tablet**: 768px - 1023px (3 columns)
- **Mobile**: Below 768px (2 columns)

## 🔐 Data Persistence

- Cart data is stored in Redux store (session-based)
- No backend authentication required
- All data clears on page refresh (as expected)

## 🎯 Pagination Details

- **Products Per Page**: 8
- **Grid Layout**: 4 columns × 2 rows on desktop
- **Consistent**: Same number of products on every page
- **Navigation**: Previous/Next buttons and page numbers

## 📝 Usage Example

### Adding a Product to Cart
1. Browse products on home page
2. Click "Add to Cart" on any product
3. See cart count update in navbar
4. View cart by clicking cart icon

### Completing a Purchase
1. Click "Add to Cart" on desired products
2. Navigate to cart
3. Adjust quantities if needed
4. Click "Checkout"
5. Fill in shipping and payment info
6. Click "Place Order"
7. See order confirmation

## 🐛 Known Limitations

- No backend integration (Fake Store API is read-only)
- No user authentication
- Cart data is not persisted (clears on refresh)
- Test card numbers: Use any 13-19 digit number

## 🔧 Customization

### Change Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-main: #4a90e2;
  --accent-success: #48bb78;
  --accent-danger: #e17055;
}
```

### Change Products Per Page
Edit `src/pages/Home.jsx`:
```javascript
const productsPerPage = 8; // Change this value
```

### Change Grid Columns
Edit `src/App.css`:
```css
.products-grid {
  grid-template-columns: repeat(4, 1fr); /* Change 4 to desired columns */
}
```

## 🔗 Links

- **Live Demo**: [https://react-eshop-demo.vercel.app](https://react-eshop-demo.vercel.app)
- **Fake Store API**: [https://fakestoreapi.com](https://fakestoreapi.com)

---








# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
