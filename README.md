# React Ecommerce App

An ecommerce app built using React that allows users to browse through a list of products, view the details of a product, add it to a cart, and move items between the cart and wishlist. The app is built using React and ReactDOM, with React Router for navigation, Axios for making API requests, and Material-UI for UI components.

## 🌱 Features

The app includes the following features:

- Browse through a list of products with titles, prices and links to view details of individual products.
- View details of a product, including title, category, price, and description.
- Add a product to the cart with a specified quantity between 1 and 10.
- Move a product from the cart to the wishlist, and vice versa.
- Remove a product from the cart or wishlist.
- Filter products by category.

## 🛠️ Implementation

The app is structured as follows:

- The main App component, which sets up the routing for the app and manages the cart and wishlist state.
- The ProductList component, which displays a list of products and allows filtering by category.
- The ProductDetails component, which displays details of a single product.
- The Cart component, which displays the items in the cart and allows moving items to the wishlist or removing them from the cart.
- The Wishlist component, which displays the items in the wishlist and allows moving items to the cart or removing them from the wishlist.
- The ProductFilter component, which allows filtering products by category.
- The ProductService module, which provides methods for fetching products from the API.
- The useCachedData hook, which caches API responses in local storage to speed up subsequent page loads.

## 🔮 Future Improvements

Some possible improvements to the app include:

- Implementing a backend server with a database to store the products and user information.
- Implementing user authentication and authorization to allow users to log in and view their cart and wishlist across sessions.
- Implementing a checkout process to complete the purchase of products.
- Implementing more sophisticated filtering and sorting options for the product list.
- Adding a search bar to search for products by name or description.
- Adding more detailed product information, such as images and reviews.

## 📚 Development:

### Install dependencies:

> `npm install`

### Run the application:

> `npm start`

## 🙌 Contribution:

- Open to enhancements & bug fixes. Feel free to contribute!

## 🔐 License:

- Distributed under the MIT License.

