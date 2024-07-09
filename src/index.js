const express = require("express");

const morgan = require("morgan");

//instancia de servidor
const app = express();
//seteamos un puerto
app.set("port", 4000);

//preparamos para que escuche en ese puerto 
// - get directamente al set q ya le agregue
app.listen(app.get("port"));
console.log("Escuchando comunicaciones al puerto " + app.get("port"));


//middlewares
app.use(morgan("dev"));

//rutas
app.get("/productos", (req, res) => {
    res.send("Mensaje recibido");
})