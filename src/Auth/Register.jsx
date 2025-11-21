import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const register = async (formData) => {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
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
        "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register",
        user
      );
      alert("Thanks for registering!");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form id="loginForm" action={register}>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Password:
          <input type="password" name="password" />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
