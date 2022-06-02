const  Escola  = require('../escola/index')

class Aluno extends Escola {
  constructor(nomeEscola, curso, nome, serie){
    super( nomeEscola, curso);
    this.nome = nome,
    this.serie = serie
  }

  dadosAluno () {
    return `Meu nome é ${this.nome}, sou aluno da escola ${this.nomeEscola} e estudo na
     ${this.serie} serie e um dos meus cursos
    preferidos é o de ${this.curso}`
  }
}

module.exports = Aluno ;


