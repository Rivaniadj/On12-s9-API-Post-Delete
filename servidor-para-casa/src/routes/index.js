const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.status(200).send({
        "titulo": "servidor-para-casa Api - Reprograma",
        "version": "1.0.0",
        "mensagem": "wuelcome a sua API de contatos"
    })
});

module.exports = router;