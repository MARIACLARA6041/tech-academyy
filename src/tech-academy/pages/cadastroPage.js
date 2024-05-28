import React, { useState } from "react";
import "../styles/form.css";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";

const CadastroPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    nivelConhecimento: "1",
    comoConheceu: "1"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário, como enviar para um servidor
    console.log(formData);
    // Navegar para a página desejada após o envio do formulário
    navigate("Curso");
  };

  return (
    <div className="form-container" id="login">
      <div className="form-body">
        <div className="form-header">
          <Link to="/CursoPage">
            <HomeIcon fontSize="large" sx={{ color: pink[500] }} />
          </Link>
          <h3>Cadastre-se</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="nomeCompleto" className="col-form-label">
            Nome Completo
          </label>
          <input
            required
            className="form-control"
            id="nomeCompleto"
            name="nomeCompleto"
            type="text"
            value={formData.nomeCompleto}
            onChange={handleChange}
          />
          <label htmlFor="email" className="col-form-label">
            Endereço de e-mail
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="nivel-conhecimento" className="col-form-label">
            Nível de experiência em tecnologia
          </label>
          <select
            className="form-select"
            aria-label="Nível de experiência"
            name="nivelConhecimento"
            value={formData.nivelConhecimento}
            onChange={handleChange}
            required
          >
            <option value="1">Iniciante</option>
            <option value="2">Intermediário</option>
            <option value="3">Avançado</option>
          </select>
          <label htmlFor="como-conheceu" className="col-form-label">
            Como você ficou sabendo sobre nós?
          </label>
          <select
            className="form-select"
            aria-label="Como conheceu"
            name="comoConheceu"
            value={formData.comoConheceu}
            onChange={handleChange}
            required
          >
            <option value="1">Pesquisa online</option>
            <option value="2">Redes sociais</option>
            <option value="3">Indicação de amigo</option>
            <option value="4">Outro</option>
          </select>

          <div className="form-footer">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                <a
                  href="/termos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Li e aceito os termos e condições
                </a>
              </label>
            </div>
            <button id="sign-in" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;