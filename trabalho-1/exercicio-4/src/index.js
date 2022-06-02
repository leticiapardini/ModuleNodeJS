const http = require('http')
const Informacoes = require("./controllers/informacoes")

 http.createServer(async(req,res) => {
    const { url } = req 
    switch (url) {
        case '/get-informacoes-maquina':
            Informacoes.GetInforcoesMaquina(req, res)
            break;
    
        default:
            res.writeHead(405)
            res.end('Rota inexistente')
            break;
    }
  }).listen(3333, () => console.log('Server listening on port 3333, no rota /get-informacoes-maquina '))