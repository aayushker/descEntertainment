# Full-Stack Movie App Documentation

## Overview

This is a full-stack movie application that allows users to search for movies, view detailed information, and like their favorite movies. It is built with **Next.js** on the frontend and **Django** on the backend. Users can search for movies by title, view detailed information about each movie, and save liked movies to the backend.

---

## Features

- **Search for Movies**: Users can enter a movie title in the search bar, and the app will display matching movies from an external API.
- **View Movie Details**: When a user selects a movie, detailed information such as the movie's title, year, director, plot, ratings, and genre is displayed.
- **Like Movies**: Users can like a movie, and this information will be saved to the backend (via Django).
- **Responsive Design**: The app is fully responsive and adapts to both desktop and mobile devices.

---

## Technology Stack

- **Frontend**: 
    - **Next.js**: A React-based framework for building server-side rendered applications.
    - **Tailwind CSS**: A utility-first CSS framework for designing the UI.
    - **ShadCN UI**: A component library used for building modern UI components.
    - **React**: A JavaScript library for building user interfaces.
    - **Lucide Icons**: A set of open-source icons used for the UI.

- **Backend**:
    - **Django**: A high-level Python web framework used for building the backend API.
    - **Django REST Framework**: Used to create RESTful APIs in Django.
   
---

## Installation

### Prerequisites

1. **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
2. **Python 3**: Ensure you have Python 3 installed on your machine. You can download it from [here](https://www.python.org/).

### Frontend Setup

1. Clone the repository:
     ```bash
     git clone https://github.com/aayushker/descEntertainment
     cd descEntertainment/frontend
     ```
2. Install the required dependencies:
     ```bash
     npm install
     ```
3. Run the development server:
     ```bash
     npm run dev
     ```
     The app should now be accessible at [http://localhost:3000](http://localhost:3000).

### Backend Setup

1. Clone the backend repository (if separate):
     ```bash
     cd ../backend
     ```
2. Create a virtual environment and activate it:
     ```bash
     python3 -m venv venv
     source venv/bin/activate   # On Windows: venv\Scripts\activate
     ```
3. Install the required Python dependencies:
     ```bash
     pip install -r requirements.txt
     ```
4. Run database migrations:
     ```bash
     python manage.py migrate
     ```
5. Start the Django development server:
     ```bash
     python manage.py runserver
     ```
     The backend API will now be accessible at [http://localhost:8000](http://localhost:8000).

---

## Frontend Functionality

1. **Search for Movies**
     - Users can search for movies by entering a movie title in the search bar.
     - The frontend makes an API call to an external movie API (e.g., OMDB API) to fetch matching movie results.

2. **View Movie Details**
     - When a user selects a movie, detailed information such as:
         - Title
         - Year
         - Director
         - Actors
         - Plot
         - Ratings
         - Genre
         - The movie poster image is displayed alongside the details.

3. **Like a Movie**
     - Users can like a movie by clicking the Like button.
     - The movie details are sent to the backend via a POST request to `http://localhost:8000/api/like/`.
     - The backend will store the liked movie in the database and return a success message.

---

## Design Considerations

- **Responsive UI**: The app has been designed with Tailwind CSS to ensure it works on both desktop and mobile devices.
- **Error Handling**: Errors are caught and displayed using a user-friendly interface (like a notification or an error message).
- **User Feedback**: The "Like" button changes to show a loading state while the backend is processing the request.

---

## Future Enhancements

- **User Authentication**: Implement user authentication to allow users to log in and save their liked movies.
- **Pagination for Movie Search**: Add pagination to the movie search results for better performance.
- **User Comments**: Allow users to leave comments or reviews for movies.
- **Search Filters**: Add filters such as rating, genre, or year to refine the search results.

---

## Conclusion

This application demonstrates how to integrate a Next.js frontend with a Django backend, allowing users to search for and like movies. The project is scalable and can be extended with additional features such as user authentication, movie ratings, and more.
