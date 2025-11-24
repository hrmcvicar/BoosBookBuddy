import axios from "axios";
import { Link, useNavigate } from "react-router";

const Login = ({ authenticate }) => {
  const navigate = useNavigate();
  const login = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    //console.log(email);
    //backend request is a post : path, header(metadata), body(content)
    //post will req body, which is an object
    //so we get the user info above and turn it into object
    const user = {
      email,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login",
        user
      );
      window.localStorage.setItem("token", data.token);
      authenticate();
      navigate("/");
      //console.log(data.token);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form id="loginForm" action={login}>
        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <button type="submit">Login</button>
      </form>
      <Link to="/register">Need an account? Register here.</Link>
    </div>
  );
};
export default Login;
