const Usuario = require("../models/Usuarios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUsuario = async (req, res) => {
  try {

    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });

    if (usuario) {
      return res.status(401).json({ msg: "El Usuario ya existe" });
    }

    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    const nuevoUsuario = new Usuario({
      email,
      password: newPassword,
    });

    await nuevoUsuario.save();

    res.status(201).json(nuevoUsuario);

  } catch (error) {
    res.status(500).json({
      msg: "Error creando usuario",
      error: error.message
    });
  }
};

exports.loginUsuario = async (req, res) => {
  try {

    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });

    if (!usuario)
      return res.status(400).json({ msg: "Usuario no existe. Credencial inválida" });

    const isMatch = await bcrypt.compare(password, usuario.password);

    if (!isMatch)
      return res.status(400).json({ msg: "Password incorrecta. Credencial inválida" });

    const payload = {
      usuario: {
        id: usuario.id,
        email: usuario.email
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_TOKEN_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );

  } catch (error) {
    res.status(500).json({
      error: "Error en el servidor",
      message: error.message
    });
  }
};