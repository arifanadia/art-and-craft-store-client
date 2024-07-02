# art and craft store

Welcome to the art and craft store website, your ultimate destination for exploring and showcasing beautiful textile crafts!

## Live Site

Visit the live site: https://art-and-craft-store-2ac70.web.app

## Features

- **Homepage**:
  - Navbar with logo, website name, and user authentication (login/register)
  - Banner/Slider section showcasing thematic images
  - Craft Items Section displaying various textile arts with "View Details" buttons
  - Art & Craft Categories Section featuring subcategories of art and craft store
  - Footer with website information and social media links

- **Add Craft Item Page**:
  - Private/protected route for adding new textile craft items
  - Form for uploading item details including image, name, description, price, etc.
  - Success message display using toast/sweet alert

- **All Art & Craft Items Page**:
  - Display all textile craft items added by users in a table format
  - Each item row includes basic details and a "View Details" button

- **View Details Page**:
  - Private/protected route displaying detailed information of a selected textile craft item
  - Includes image, name, description, price, rating, etc.

- **My Art&Craft List Page**:
  - Private/protected route showing textile craft items added by the logged-in user
  - Cards for each item with options to update or delete

- **Update Page**:
  - Private/protected route for updating details of a textile craft item
  - Form or modal with fields to edit item information
  - Success message using toast/sweet alert upon update

- **Authentication**:
  - Password and email-based login/register functionality
  - Social login options (Google, GitHub, etc.)
  - Conditional navbar items based on user login status

- **Additional Features**:
  - Dark/Light theme toggle on the homepage
  - 404 Page for handling not found errors
  - Loading spinner implementation during data fetching

## Technologies Used

- **Frontend**:
  - React.js with react-router-dom for routing
  - Firebase Authentication for user authentication
  - React-toastify for toast notifications
  - React-bootstrap for UI components

- **Backend**:
  - Node.js with Express.js for server-side logic
  - Environment variables for sensitive data protection

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/arifanadia/art-and-craft-store-client.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd art-and-craft-store-client
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    ```bash
    npm start
    ```

## Contact

Email : contactarifanadia@gmail.com

---
