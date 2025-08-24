import React, { useState, useEffect } from "react";
import { login } from "./services/api.js";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode")==="true");

  useEffect(() => {
    document.body.style.background = darkMode ? "#1e1e1e" : "#fff";
    document.body.style.color = darkMode ? "#fff" : "#000";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      setMessage(`Bem-vindo, ${res.user.name}!`);
    } catch {
      setMessage("Usuário ou senha inválidos");
    }
  };

  return (
    <div style={{ textAlign:"center", marginTop:50, fontFamily:"sans-serif" }}>
      <h1>SaaS PDV</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Alternar {darkMode ? "Light" : "Dark"} Mode</button>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required /><br/><br/>
        <input type="password" placeholder="Senha" value={password} onChange={e=>setPassword(e.target.value)} required /><br/><br/>
        <button type="submit">Entrar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}