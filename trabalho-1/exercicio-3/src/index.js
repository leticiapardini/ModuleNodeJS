const http = require('http')
const Arquivo = require("./controllers/arquivo")

 http.createServer(async(req,res) => {
    const { url } = req 
    switch (url) {
        case '/get-conteudo-arquivo':
            Arquivo.GetConteudoArquivo(req, res)
            break;
    
        default:
            res.writeHead(405)
            res.end('Rota inexistente')
            break;
    }
  }).listen(3333, () => console.log('Server listening on port 3333, na rota /get-conteudo-arquivo'))