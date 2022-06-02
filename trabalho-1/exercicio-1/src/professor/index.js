const  Escola  = require('../escola/index')

class Professor extends Escola {
  constructor(nomeEscola, curso, nome, departamento, disciplina){
    super( nomeEscola , curso)
    this.nome = nome,
    this.departamento = departamento,
    this.disciplina = disciplina
  }

  dadosProfessor () {
    return ` Meu nome é ${this.nome}, sou professor da disciplina de ${this.disciplina}
    trabalho na escola ${this.nomeEscola}, no departamento ${this.departamento}
    e também ministro o curso de ${this.curso}`
  }
}


module.exports = Professor;


