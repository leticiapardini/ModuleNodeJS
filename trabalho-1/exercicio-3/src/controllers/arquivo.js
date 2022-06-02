const LerArquivo = require('../utils/index');

class Arquivo {
  static async GetConteudoArquivo(req, res) {
    let result = await LerArquivo.caminhoArquivo()

    res.writeHead(200)
    res.end(result)
  }
}

module.exports = Arquivo;