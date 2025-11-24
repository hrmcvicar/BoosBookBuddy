//display component of books = catalogue
import "./books.css";
import { Link } from "react-router";

const Books = ({ books }) => {
  //console.log("books is:", books);

  return (
    <div className="booksContainer">
      <h1>Catalogue</h1>
      {books.map((book) => {
        return (
          <div className="book" key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h1>{book.title}</h1>
            </Link>

            <h3>by {book.author}</h3>
            <p>{book.description}</p>
            <img src={book.coverimage} />
          </div>
        );
      })}
    </div>
  );
};

export default Books;
