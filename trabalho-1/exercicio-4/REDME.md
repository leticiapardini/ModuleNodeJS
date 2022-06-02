# DESAFIO EXERCICIO-4

## O exericicio proposto foi : 
  * Escreva um programa capaz de receber uma requisição http, e retorne as informações da maquina em que está sendo executada (cpus, memória, sistema operacional). Faça a modelagem das entidades e da estrutura de pastas do projeto, crie as classes e separe em módulos.


## DESCRIÇÃO EXERCICIO: 
  * Iniciei o exercicio criando a seguinte estrutura: uma pasta chamada **src**, onde guarda todos os arquivos, dentro dela contém as pastas, **controllers**, **utils**, dentro de utils, está a função que pegará todas as informações da maquina e dentro do controllers, está a função controladora que dará a resposta ao nosso servidor, dentro de src, está o index.js, onde está o servidor que rodará toda a aplicação.

  * Para rodar a aplicação siga o passo:

  * Ir no seu terminal, verificar se está nesse caminho: exercicio-4/src.
      Caso não, dê um cd exercicio-4,depois cd src.

  * Após isso, digite: node index.js, irá aparecer a mensagem Server listening on port 3333, na rota /get-informacoes-maquina, após isso usando o insomnia e digitando http://localhost:3333/get-informacoes-maquina, vc terá o retorno das informações, caso não use essa rota especifica, vc terá o retorno de rota inexistente.