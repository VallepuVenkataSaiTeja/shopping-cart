# Shopping Cart

A responsive e-commerce shopping cart application built with React, Vite, Tailwind CSS, and React Router.

## Overview

This project demonstrates a basic online shopping experience with:
- Product listing page
- Product detail page
- Cart page with quantity management and order summary
- Persistent cart using `localStorage`
- Client-side routing and 404 fallback page

## Features

- Browse all products on the home page
- View detailed product information with `useParams`
- Add products to the cart from the home page and product details page
- Prevent duplicate cart items by disabling the Add button if already added
- Increment, decrement, and remove items from the cart
- Display cart totals and item counts
- Save cart contents in browser `localStorage`
- Handle invalid routes with a 404 page

## Technologies

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- ESLint

## Project Structure

- `src/App.jsx` - application routes setup
- `src/pages/productList` - product listing page
- `src/pages/productDetails` - product details page
- `src/pages/cartList` - shopping cart page
- `src/components/context` - global state management for products and cart
- `src/not-found` - 404 page

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local Vite development URL shown in the terminal.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Notes

- The cart state is saved automatically in `localStorage`, so cart items persist on page reload.
- Routing uses React Router, so URLs like `/product-details/:id` display the correct item details.
- The app includes a fallback route for invalid URLs.

## License

This project is open source and can be adapted for learning or portfolio use.
