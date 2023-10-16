import React, { useContext } from "react"
import { Link } from "react-router-dom";
import MyBtn from "../Button/MyBtn";
import { AuthContext } from "../../../context";

const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
      <MyBtn onClick={logout}>Logout</MyBtn>
    </div>
  )
};

export default MyNavbar;
