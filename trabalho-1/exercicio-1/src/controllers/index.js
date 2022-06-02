const Professor = require("../professor/index") ;
const Aluno = require("../aluno/index") ;

const professor = new Professor ('Maria José', 'inglês','Alberto','professor', 'matemática');
const aluno = new Aluno( 'Maria José','inglês','João', 5 );
const professor2 = new Professor ('Maria José', 'espanhol','José Maria','professor', 'português');
const aluno2 = new Aluno( 'Maria José','espanhol','Maria', 6 );
const professor3 = new Professor ('Maria José', 'libra','Ricardo','professor', 'ciência');
const aluno3 = new Aluno( 'Maria José','libra','Manuela', 4 );


console.log(professor, professor2, professor3);
console.log(aluno, aluno2, aluno3);

