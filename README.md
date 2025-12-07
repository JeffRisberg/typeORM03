# Books and Authors API

A NestJS and TypeORM application for managing books and authors with OpenAPI/Swagger documentation.

## Features

- RESTful API for managing authors and books
- TypeORM with SQLite database
- OpenAPI/Swagger documentation
- Full CRUD operations for both entities
- One-to-many relationship between authors and books

## Entities

### Author
- `id`: Auto-generated primary key
- `name`: Author's full name
- `birthYear`: Year the author was born
- `bio`: Author's biography
- `books`: List of books written by the author

### Book
- `id`: Auto-generated primary key
- `title`: Book title
- `publicationDate`: Date the book was published
- `pageCount`: Number of pages
- `author`: Reference to the author

## Installation

```bash
npm install
```

## Running the Application

```bash
# Development mode
npm run start:dev

# Production build
npm run build
npm run start:prod
```

The application will start on `http://localhost:3000`

## API Documentation

Once the application is running, you can access the interactive Swagger API documentation at:

```
http://localhost:3000/api
```

## API Endpoints

### Authors

- `POST /authors` - Create a new author
- `GET /authors` - Get all authors (includes their books)
- `GET /authors/:id` - Get a specific author by ID
- `PATCH /authors/:id` - Update an author
- `DELETE /authors/:id` - Delete an author

### Books

- `POST /books` - Create a new book
- `GET /books` - Get all books (includes author information)
- `GET /books/:id` - Get a specific book by ID
- `PATCH /books/:id` - Update a book
- `DELETE /books/:id` - Delete a book

## Example Requests

### Create an Author

```bash
curl -X POST http://localhost:3000/authors \
  -H "Content-Type: application/json" \
  -d '{
    "name": "J.K. Rowling",
    "birthYear": 1965,
    "bio": "British author, best known for the Harry Potter series"
  }'
```

### Create a Book

```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Harry Potter and the Philosopher'\''s Stone",
    "publicationDate": "1997-06-26",
    "pageCount": 223,
    "authorId": 1
  }'
```

### Get All Authors

```bash
curl http://localhost:3000/authors
```

### Get All Books

```bash
curl http://localhost:3000/books
```

## Database

The application uses SQLite as the database. The database file `database.sqlite` will be created automatically in the project root when you first run the application.

## Project Structure

```
src/
├── controllers/      # REST API controllers
│   ├── author.controller.ts
│   └── book.controller.ts
├── dto/             # Data Transfer Objects
│   ├── create-author.dto.ts
│   ├── update-author.dto.ts
│   ├── create-book.dto.ts
│   └── update-book.dto.ts
├── entities/        # TypeORM entities
│   ├── author.entity.ts
│   └── book.entity.ts
├── services/        # Business logic
│   ├── author.service.ts
│   └── book.service.ts
├── app.module.ts    # Main application module
└── main.ts          # Application entry point
```
