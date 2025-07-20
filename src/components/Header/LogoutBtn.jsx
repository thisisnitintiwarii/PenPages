import React, { use } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth.js";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 duration-200 hover:bg-gray-100 cursor-pointer font-bold rounded-full"
      onClick={logOutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
