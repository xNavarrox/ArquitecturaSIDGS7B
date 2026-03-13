// API
const Reporte = require ("../models/Reporte");

// Get all reports
// req = request, body {} params url?param1=datos
// res
exports.getReportes = async (req , res) => {
    try {
        const report = await Reporte.find();
        res.json(report);
    } catch (error) {
        res.status(500).json({error: "Error: Get Reports", message: error.message});
    }
}

// Create new report
// error 400 es bad request y 500 es error en el api
exports.createReportes = async (req, res ) => {
    try {
        const {titulo, descripcion, ubicacion} = req.body; // solo se puede cuando es un objeto

        // Logic
        let prioridad = "media"
        if(descripcion.toLowerCase().includes("fuego") || 
             descripcion.toLowerCase().includes("incendio")
            ) {
                prioridad = "alta";
            }

       const NuevoReporte =  new Reporte ({
        titulo,
        descripcion,
        ubicacion,
        prioridad
       });
       
       await NuevoReporte.save();
       res.status(200).json(NuevoReporte); // 200 es succesful
    } catch (error) {
        res.status(400).json({error: "Error: Creating reports", message : error});
    }
}
