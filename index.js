require("dotenv").config();

const express = require("express");
const reportesRoutes = require("./src/routes/Reportes");
const connectDB = require("./src/config/database");

const authRoutes = require('./src/routes/auth');


const app = express();
const PORT = process.env.PORT || 3000;

// Conectar base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use("/api/reportes", reportesRoutes);
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});