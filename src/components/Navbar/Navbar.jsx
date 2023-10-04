import { Link, NavLink } from "react-router-dom";
import defaultUserImg from "../../assets/user.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user?.photoURL)
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/breakingNews">Breaking News</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logout");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  return (
    <div className="flex justify-between  bg-base-100">
      <div className="justify-start w-8">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {user ? (
        <div className=" dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL}/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={handleLogout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex items-center justify-end w-8">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={defaultUserImg} />
            </div>
          </label>
          <Link to="/login" className="btn ml-3">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
