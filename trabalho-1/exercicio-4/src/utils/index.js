const os = require('os')


class BuscarInformacoes {
  static async formataInformacoesHardware() {
    return JSON.stringify({
      'CPU' : os.cpus(),
      'Memoria' : {
        'Livre' : `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
        'Total' : `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
      },
      'Sistema Operacional' : os.release()
    })
  }
}
module.exports = BuscarInformacoes
