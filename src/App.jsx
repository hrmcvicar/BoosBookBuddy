import { useEffect, useState } from "react"; //why put in app not books?
import { Routes, Route } from "react-router";
import axios from "axios";

import Books from "./Books/Books";
import SingleBook from "./Books/SingleBook";
import Layout from "./layout/layout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Account from "./Auth/Account";

function App() {
  const [books, setBooks] = useState([]); //assuming we get an array which we do
  const [user, setUser] = useState({}); //for login purposes , set user as an object w email:passwrd
  const [reservations, setReservations] = useState([]); //need list like books list so array default value

  //auth will make a backend call
  //get verb bc reading info
  const authenticate = async () => {
    try {
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`, //we are passing in a token - why?
            //verify logged in and have a token -> implies they are who they say they are
          },
        }
      );
      //console.log(data);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };
  const addToRez = async (bookId) => {
    try {
      const { data } = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",
        { bookId },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      setReservations([...reservations, data]);
      //setRez needs an array but we saw data is an object
      console.log(data);
    } catch (error) {
      console.error(error);
      console.log(error.response?.status); //to debug why it was giving errors
      console.log(error.response?.data);
    }
  };
  const removeFromRez = async (id) => {
    try {
      await axios.delete(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${id}`,
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      const newRez = reservations.filter((reservation) => {
        return reservation.id !== id;
      });
      setReservations(newRez);
    } catch (error) {
      console.error(error);
    }
  };
  const checkRez = (bookId) => {
    return reservations.find((rez) => {
      return rez.id === bookId;
    });
  };
  useEffect(() => {
    const fetchRez = async () => {
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations",
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      setReservations(data);
      //console.log(data);
    };
    if (window.localStorage.getItem("token")) {
      fetchRez();
    }
  }, [user.id]);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      authenticate();
    }
  }, [user.id]); //says dependent on userID-> anytime changes, run the useEffect
  //why call authenticate and useEffect in App?
  //keep from refreshing

  useEffect(() => {
    const fetchAllBooks = async () => {
      const { data } = await axios.get(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books"
      );
      //console.log(data); //data is an array of objects
      setBooks(data);
    };
    fetchAllBooks();
  }, []); //dont need to fire off many times so add []
  //when talking to a database, we need async
  //but useEffect CANNOT be async, it runs at a certain point in time in lifecycle
  //so function inside can be async
  //console.log("App books:", books);

  return (
    <div>
      <h1>
        <img id="logo-image" src="books.png" />
        Boo's Book Buddy
      </h1>
      <Routes>
        <Route element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<Books books={books} />} />
          <Route path="/" element={<Books books={books} />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <SingleBook
                books={books}
                addToRez={addToRez}
                user={user}
                checkRez={checkRez}
              />
            }
          />
          <Route
            path="/login"
            element={<Login authenticate={authenticate} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/account"
            element={
              <Account
                user={user}
                reservations={reservations}
                removeFromRez={removeFromRez}
              />
            }
          />
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
