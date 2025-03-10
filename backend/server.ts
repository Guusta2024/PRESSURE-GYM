import express from "express";
import alunoRoutes from "./routes/alunoRoutes";
import sequelize from "./config/database";

const app = express();
app.use(express.json());

// Conectar ao banco e sincronizar os modelos
sequelize
  .sync()
  .then(() => console.log("Banco de dados conectado!"))
  .catch((error) => console.error("Erro ao conectar ao banco:", error));

// Definir rotas
app.use("/api", alunoRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
