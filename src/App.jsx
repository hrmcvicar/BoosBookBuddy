import Books from "./Books/Books";
import SingleBook from "./Books/SingleBook";
import Layout from "./layout/layout";
import { useEffect, useState } from "react"; //why put in app not books?
import axios from "axios";
import { Routes, Route } from "react-router";

function App() {
  const [books, setBooks] = useState([]); //assuming we get an array which we do
  useEffect(() => {
    const fetchAllBooks = async () => {
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
      );
      console.log(data); //data is an array of objects
      setBooks(data);
    };
    fetchAllBooks();
  }, []); //dont need to fire off many times so add []
  //when talking to a database, we need async
  //but useEffect CANNOT be async, it runs at a certain point in time in lifecycle
  //so function inside can be async
  console.log("App books:", books);

  return (
    <div>
      <h1>
        <img id="logo-image" src="books.png" />
        Boo's Book Buddy
      </h1>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Books books={books} />} />
          <Route path="/" element={<Books books={books} />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<SingleBook books={books} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//whatver is a child of route element is rendered in layout
//start thinking how to display the details of a singular game

/*      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use some state in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>*/
