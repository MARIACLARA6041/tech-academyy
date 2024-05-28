import React from "react";
import "../styles/form.css";
import { Link } from "react-router-dom";

import { pink } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  
  return (
    <div className="form-container" id="login">
      <div className="form-body">
        {/* Título do formulário*/}
        <div className="form-header">
          <Link to="/">
            <HomeIcon fontSize="large" sx={{ color: pink[500] }} />
          </Link>
          <h3>Login</h3>
        </div>

        {/* Formulário de login */}
        <form onSubmit={handleClick}>
          {/* Campo de entrada para o email */}
          <label for="email" className="col-form-label">
            Usuário
          </label>
          <input
            required
            className="form-control"
            id="email"
            name="email"
            type="email"
          />

          {/* Campo de entrada para a senha */}
          <label for="password" className="col-form-label">
            Senha
          </label>
          <input
            required
            id="password"
            name="password"
            type="password"
            class="form-control"
          />

          {/* Botão de login */}
          <div className="form-footer">
            <input id="sign-in" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
