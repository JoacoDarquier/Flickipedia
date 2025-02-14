# FlickiPedia

FlickiPedia is a web application for managing and tracking your favorite movies, TV series, and books. Built with Django REST Framework and React.

## Features

- Create, read, update and delete titles (movies, series, books)
- Categorize content by genre
- Add personal notes for each title
- Responsive design for all devices

## Demo

![FlickiPedia Demo](https://youtu.be/oYrjKEgPes8)

## Tech Stack

**Backend:**
- Django
- Django REST Framework
- SQLite3

**Frontend:**
- React
- TailwindCSS
- React Router DOM
- React Hook Form
- Axios

API Endpoints
- GET /titles/api/v1/titles/ - List all titles
- POST /titles/api/v1/titles/ - Create a new title
- GET /titles/api/v1/titles/{id}/ - Retrieve a title
- PUT /titles/api/v1/titles/{id}/ - Update a title
- DELETE /titles/api/v1/titles/{id}/ - Delete a title