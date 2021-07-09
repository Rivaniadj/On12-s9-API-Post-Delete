const express = require("express");
const router = express.Router();
const controller = require("../controllers/casaControllers")


//router.get("/", controller.home)
//router.get("/titulo", controller.getByTitle);
 router.get("/", controller.getAll) 
 router.get("/:id", controller.getById) 

router.post("/cadastrar", controller.criarContato)

router.delete("/:id", controller.apagarContato)

module.exports = router;