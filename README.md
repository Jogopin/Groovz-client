
# Groovz-Client 

<p align="center">
  <img src="https://res.cloudinary.com/dnvhmjaoc/image/upload/c_fit,h_300,w_900/v1692269864/Groovz_srodcp.png" alt="Logo">
</p>

Welcome to the Groovz client repository! This project is an e-commerce application designed for headphones and speakers enthusiasts. Beyond being a virtual store, it serves as a practical example of full-stack development. As you explore, please be aware that while you can conduct "purchases" within the platform, all transactions are in test mode (courtesy of Stripe) and no real purchases will be processed.
#### Link to the website [Groovz](https://groovz.netlify.app/)
## Features
<p align="center">
  <img src="https://res.cloudinary.com/dnvhmjaoc/image/upload/v1692273479/Screenshot_2023-08-16_223352_zjfge3.png" alt="Logo">
</p>

- **E-Commerce Functionality**: Users can view products, add them to their cart, and proceed to checkout.
- **User Authentication & Authorization**: Registered users enjoy extended features like checking their past orders, writing product reviews, and saving personal details for a faster checkout.
- **Admin Accounts**: Admin users can add new products to the store.
- **Responsive Design**: Groovz is designed to be fully responsive across devices.
- **Notifications**: Efficient error handling with toast notifications.
- **Code Architecture**: The project showcases custom hooks, reusable components, centralized API calls file, and context usage for JWT authorization and the cart component.
<p align="center">
  <img src="https://res.cloudinary.com/dnvhmjaoc/image/upload/v1692358960/307shots_so_yutmwc.png" alt="Logo">
</p>


## Tech Stack

- **Frontend**: React with Tailwind CSS for UI components and responsive design.
- **Backend**: Express on Node.js with MongoDB as the database. more information in [Groovz-server](https://github.com/Jogopin/Groovz-server)
- **Payment**: Stripe (in test mode for this project).



## Future Enhancements

here are some planned features:

- **Admin Dashboard**:
  - Ability for admins to select products that appear in the hero section and "Our Favorites" on the homepage.
  - A dedicated page for admins to update product stocks and edit product details if necessary.
  - A functionality for admins to change the status of the orders and filter them.


## Installation & Setup

1. To install the project, please fork the repository and run npm install in the terminal.
2. Create a `.env.local` file in the root directory and set the `VITE_API_URL` environment variable with the URL of the API (Please note that the API is part of a separate project [Groovz-server](https://github.com/Jogopin/Groovz-server)): 
    ```
    VITE_API_URL=https://your-api-url.example.com
    ```
3. To run the application, please use npm run dev in the terminal.

## Disclaimer
Please remember that Groovz is a demo project. The Stripe integration is in test mode, and no real transactions will be processed.

Thank you for checking out Groovz-Client! If you'd like to see the server-side implementation, head over to the [Groovz-server repository](https://github.com/Jogopin/Groovz-server).

© 2023 Jonnathan Gomez Pineda. All rights reserved.
