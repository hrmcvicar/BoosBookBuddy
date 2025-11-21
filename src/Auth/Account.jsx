const Account = ({ user }) => {
  return (
    <div>
      <h2>{`Welcome, ${user.firstname}!`}</h2>
      <p>{`Your email on file with us is ${user.email}`}</p>
      <h3>Your reservations</h3>
      {/*need to add ternary to show no rez if none, or show rez if have */}
      <p>Browse our catalogue!</p>
    </div>
  );
};
export default Account;
