//import { useAuth } from "../auth/AuthContext";
import { Link, useNavigate } from "react-router";

export default function Navbar({ user, setUser }) {
  //const { token, logout } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
    navigate("/");
  };
  return (
    <header>
      <nav>
        <Link to="/books">Books</Link>
        {user.id ? (
          <span>
            <Link to="/account">Account</Link>
            <Link onClick={logout} to="/">
              Logout
            </Link>
          </span>
        ) : (
          <span>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </span>
        )}
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
