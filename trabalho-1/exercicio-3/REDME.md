# DESAFIO EXERCICIO-3

## O exericicio proposto foi : 
  * Escreva um programa capaz de receber uma requisição http, leia um arquivo e escreva seu valor em forma de string. Faça a modelagem das entidades e da estrutura de pastas do projeto, crie as classes e separe em módulos.


## DESCRIÇÃO EXERCICIO: 
  * Iniciei o exercicio criando a seguinte estrutura: uma pasta chamada **src**, onde guarda todos os arquivos, dentro dela contém as pastas, **controllers**, **resources**, **utils**, detro da pasta resources contem o arquivo json com as palavras propostas para leitura do exercicio, dentro de utils, está a função que fará a leitura dessas palavras e transformará ela em string e dentro do controllers, está a função controladora que dará a resposta ao nosso servidor, dentro de src, está o index.js, onde está o servidor que rodará toda a aplicação

  * Para rodar a aplicação siga o passo:

  * Ir no seu terminal, verificar se está nesse caminho: exercicio-3/src.
      Caso não, dê um cd exercicio-3,depois cd src.

  * Após isso, digite: node index.js, irá aparecer a mensagem Server listening on port 3333, na rota /get-conteudo-arquivo, após isso usando o insomnia e digitando http://localhost:3333/get-conteudo-arquivo, vc terá o retorno das palavras, caso não use essa rota especifica, vc terá o retorno de rota inexistente.
