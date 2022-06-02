const fs = require('fs');
const dir = '../textos';

const diretorios = fs.readdir(dir , (err, arquivos) => {

  if(err) {
    console.log('OPA! Não consegui encontrar nada')
  }
  arquivos.map(arquivo => {
     console.table(`Na pasta textos temos o arquivo: ${arquivo}`);
  })
  console.log('---------------------------------------');
  arquivos.map(arq => fs.readFile(`${dir}/${arq}`, (err, rotas) => {
    if(err) {
      console.log('Opa!! Deu algum erro')
    } else {
      console.log(rotas.toString())
    }
  }))
});




