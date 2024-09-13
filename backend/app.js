import express, { json } from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./src/routes/routes.js";
import dotenv from 'dotenv'
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

let publicPath = path.join(__dirname, 'public');
publicPath = publicPath.replace("backend", "frontend/src");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(json());

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});