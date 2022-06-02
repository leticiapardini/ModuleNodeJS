const fs = require('fs')
const palavras = './resources/palavras.json'

class LerArquivo {
  static async caminhoArquivo() {
    const caminho = fs.readFileSync(palavras)
    return caminho.toString()
  }
}
module.exports = LerArquivo;
