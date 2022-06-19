import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./styles.css";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Entrar na sua conta </h1>
        <input
          type="name"
          className=""
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className=""
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className=""
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Entrar
        </button>
      </form>
    </div>
  );
};
