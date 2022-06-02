# DESAFIO EXERCICIO 1 :

## O exericicio proposto foi : 
    * Escreva um programa capaz de gerenciar alunos e professores de uma escola. Faça a modelagem das entidades e 
    da estrutura de pastas do projeto, crie as classes e separe em módulos.

## DESCRIÇÃO EXERCICIO: 
  * Iniciei o exercicio organizando as entidades, criei 3 entidades: **escola**, **professor** e **aluno**, cada uma está dentro de sua pasta com seus respectivos nomes e em cada pasta contém um index.js, referente a cada entidade.
  A escola é a classe pai, onde tem as informações que será herdadas pelos filhos: professor e aluno.

  * Na pasta Controllers, contém um index.js que é responsavél por rodar a aplicação do código, no arquivo vc terá acesso a intância de professor e aluno que retornará o output desejado, para isso vc precisa:

  * Ir no seu terminal, verificar se está nesse caminho: exercicio-1/src/controllers.
      Caso não, dê um cd exercicio-1,depois cd src e por ultimo cd controllers.

  * Após isso, digite: node index.js, vc verá o output, com todos os professores e alunos intânciados.

