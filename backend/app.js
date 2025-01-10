const express = require("express");
require("./config/dotenv"); // Cargar variables de entorno
const cors = require("cors");
const bodyParser = require("body-parser");
const { errorHandler } = require("./middlewares/errorHandler");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middlewares globales
app.use(cors(require("./config/corsOptions")));
app.use(bodyParser.json());

// Rutas
app.use("/api/users", userRoutes);

// Ruta por defecto
app.get("/", (req, res) => {
    res.send("Servidor backend funcionando");
});

// Middleware de manejo de errores
app.use(errorHandler);

module.exports = app;
