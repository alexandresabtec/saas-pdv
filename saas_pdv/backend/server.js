import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend rodando 🚀" });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body || {};
  if(email === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    return res.json({ token: "fake-jwt-token", user: { name: "Administrador", email } });
  }
  return res.status(401).json({ error: "Credenciais inválidas" });
});

app.listen(PORT, () => console.log(`✅ Backend rodando na porta ${PORT}`));