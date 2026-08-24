import React, { useState } from "react";
import "../CSS/AllBooks.css";

const books = [
  {
    id: 1,
    title: "React JS Complete Guide",
    author: "Andrew Clark",
    category: "Programming",
    image: "https://picsum.photos/300/400?1",
    available: true,
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    author: "Brendan Eich",
    category: "Programming",
    image: "https://picsum.photos/300/400?2",
    available: false,
  },
  {
    id: 3,
    title: "Python Basics",
    author: "Guido Van Rossum",
    category: "Programming",
    image: "https://picsum.photos/300/400?3",
    available: true,
  },
  {
    id: 4,
    title: "Data Structures",
    author: "Mark Allen",
    category: "Computer Science",
    image: "https://picsum.photos/300/400?4",
    available: true,
  },
  {
    id: 5,
    title: "MongoDB Essentials",
    author: "John Smith",
    category: "Database",
    image: "https://picsum.photos/300/400?5",
    available: false,
  },
  {
    id: 6,
    title: "Node.js in Action",
    author: "Ryan Dahl",
    category: "Backend",
    image: "https://picsum.photos/300/400?6",
    available: true,
  },
];

function AllBooks() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="books-page">
      <div className="books-header">
        <h1>📚 Library Books</h1>

        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <img src={book.image} alt={book.title} />

            <div className="book-content">
              <span>{book.category}</span>

              <h3>{book.title}</h3>

              <p>Author: {book.author}</p>

              <p
                className={
                  book.available ? "available" : "not-available"
                }
              >
                {book.available ? "Available" : "Issued"}
              </p>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBooks;