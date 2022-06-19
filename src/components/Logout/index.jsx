import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import "./styles.css";

export const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        Bem vindo, <span className="user-name">{user.name}</span>
      </h1>
      <button className="logout-btn" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};
