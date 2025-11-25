import { useParams, Link } from "react-router";

const SingleBook = ({ books, addToRez, user, checkRez }) => {
  const { id } = useParams();
  //console.log(params);
  const singleBook = books.find((book) => {
    return book.id === id * 1;
  });

  //when the screen goes white after refreshing, the state is all refreshed
  //so rn find wont work bc theres no data in the array
  //add the if statement below to prevent the white screen
  //we dont have a single book state like in the past
  console.log(
    "checkRez(singleBook.id):",
    singleBook?.id ? checkRez(singleBook.id) : "no id yet"
  );

  if (!singleBook) {
    return <div>Loading...</div>;
  }
  //console.log("user:", user);
  //console.log("user.id:", user?.id);
  //console.log("singleBook:", singleBook);
  //console.log("singleBook.id:", singleBook?.id);

  return (
    <div className="book">
      <h1>{singleBook.title}</h1>
      <h3>by {singleBook.author}</h3>
      <p>{singleBook.description}</p>
      <img src={singleBook.coverimage} />
      <div>
        <Link to="/books">Back to all books </Link>
      </div>
      {user.id ? (
        checkRez(singleBook.id) ? (
          <button disabled={true}>Reserved</button>
        ) : (
          <button
            onClick={() => {
              addToRez(singleBook.id); //singleBook id bc above usees single
            }}
          >
            Reserve this book
          </button>
        )
      ) : null}
    </div>
  );
};

export default SingleBook;

//we store a unique id in state to call the single games
//react looks at the url as a state
