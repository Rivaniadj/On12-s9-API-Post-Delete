const contatosJson = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send(contatosJson )
}

const getById = (request, response) => {
    const idRequirido = request.params.id
    const contFiltrado = contatosJson.find(contato => contato.id === idRequirido)

    response.status(200).send(contFiltrado) 
}
        const criarContato = (request, response) => {


          const nomeRequerido = request.body.nome;
          const celularRequerido = request.body.celular;
          const redesSociaisRequerido = request.body.redesSociais
         
         const novoContato = {

            "id": "1",
            "nome": nomeRequerido,
            "celular": celularRequerido,
            "redesSociais": redesSociaisRequerido
        };

          contatosJson.push(novoContato)

          response.status(200).send(novoContato);

        };
          const apagarContato = (request, response) => {
            

                const idRequerido = request.params.id;
                const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido);
              
                const indice = contatosJson.indexOf(contatoFiltrado);
                console.log(indice);
                contatosJson.splice(indice, 1);
              
                response.status(200).send(

                    [
                        {
                           "mensagem": "tarefa deletada com sucesso"
                        },

                         contatosJson
                    ]
                

                )
                }

           


        
    

module.exports = {
    getAll, 
    getById ,
    criarContato,
    apagarContato
}