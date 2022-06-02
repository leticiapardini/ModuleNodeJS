const BuscarInformacoes = require('../utils/index');

class Informacoes {
  static async GetInforcoesMaquina(req, res) {
    let result = await BuscarInformacoes.formataInformacoesHardware()

    res.writeHead(200)
    res.end(result)
  }
}

module.exports = Informacoes