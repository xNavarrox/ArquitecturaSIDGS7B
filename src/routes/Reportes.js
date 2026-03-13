const express = require("express");
const router = express.Router();

const reporteController = require("../controllers/reporteController");
const auth = require("../middlewares/auth");

// GET http://localhost:3000/api/reportes/getAllReport
router.get("/getAllReport", auth, reporteController.getReportes);

// POST http://localhost:3000/api/reportes/CreateReport
router.post("/CreateReport", auth, reporteController.createReportes);

module.exports = router;