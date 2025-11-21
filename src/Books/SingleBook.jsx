import { useParams, Link } from "react-router";

const SingleBook = ({ books }) => {
  const { id } = useParams();
  //console.log(params);
  const singleBook = books.find((book) => {
    return book.id === id * 1;
  });

  //when the screen goes white after refreshing, the state is all refreshed
  //so rn find wont work bc theres no data in the array
  //add the if statement below to prevent the white screen
  //we dont have a single book state like in the past

  if (!singleBook) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book">
      <h1>{singleBook.title}</h1>
      <h3>by {singleBook.author}</h3>
      <p>{singleBook.description}</p>
      <img src={singleBook.coverimage} />
      <div>
        <Link to="/books">Back to all books </Link>
      </div>
    </div>
  );
};

export default SingleBook;

//we store a unique id in state to call the single games
//react looks at the url as a state
