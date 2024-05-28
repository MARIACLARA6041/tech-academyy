// Dependências react
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importe de estilos
import "./App.css";

// Importe as Pages da aplicação
import HomePage from "./tech-academy/pages/HomePage";
import FAQPage from "./tech-academy/pages/FAQPage";
import TermsConditionsPage from "./tech-academy/pages/TermsConditionsPage";
import LoginPage from "./tech-academy/pages/LoginPage";
import CadastroPage from "./tech-academy/pages/cadastroPage";
import CursoPage from "./tech-academy/pages/CursoPage";

// Importe os componentes compartilháveis
import Header from "./tech-academy/components/Header";
import Footer from "./tech-academy/components/Footer";

export default function App() {
  return (
    <Router>
      {/* cabeçalho em todas as páginas */}
      <Header />
      <div className="app-container">
        {/* Rotas da aplicação */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="cadastro" element={<CadastroPage />} />
          <Route path="curso" element={<CursoPage />} />
          <Route path="termos" element={<TermsConditionsPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
      {/* rodapé em todas as páginas */}
      <Footer />
    </Router>
  );
}
