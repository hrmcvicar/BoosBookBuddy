import { Link } from "react-router";

const Account = ({ user, reservations, removeFromRez }) => {
  //const returnBook = () => {
  //window.localStorage.removeItem("token");
  //setReservations({ ...reservations });
  //finish this function for returningbook
  //};
  return (
    <div>
      <h2>{`Welcome, ${user.firstname}!`}</h2>
      <p>{`Your email on file with us is ${user.email}`}</p>
      <h3>Your reservations</h3>
      {reservations.length > 0 ? (
        <div className="rez">
          {reservations.map((reservation) => {
            return (
              <div key={reservation.bookid}>
                <Link to={`/books/${reservation.bookid}`}>
                  <p>{reservation.title}</p>
                </Link>
                <p>{reservation.author}</p>
                <button
                  onClick={() => {
                    removeFromRez(reservation.id);
                  }}
                >
                  Return book
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <span>
          {/*} <Link onClick={returnBook} to="/account">
            Return Book
          </Link>*/}
          <p>
            Browse our <Link to="/">catalogue</Link>!
          </p>
        </span>
      )}
      {/*need to add ternary to show no rez if none, or show rez if have */}
    </div>
  );
};
export default Account;

//show user list of rez
