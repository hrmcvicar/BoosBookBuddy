//import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router";

export default function Navbar() {
  //const { token, logout } = useAuth();

  return (
    <header>
      <nav>
        <Link to="/books">Books</Link>
        {/*} {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="login">Login</NavLink>
          </>
        )}*/}
      </nav>
    </header>
  );
}
