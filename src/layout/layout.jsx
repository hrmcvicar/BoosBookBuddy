import { Outlet } from "react-router";
import Navbar from "./Navbar";

const Layout = ({ user, setUser }) => {
  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Outlet />
    </div>
  );
};

export default Layout;
