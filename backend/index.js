const app = require("./app");
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
