//Diferenças em VAR, LET e CONST

//VAR
//Expõe as variaveis, facil de mudar valores, temos visibilidade fora do escopo de criação da variavel

var  nome = 'Adamastor';
console.log(nome);

if(nome==='Adamastor'){
    var escola = 'CESF';
    console.log(escola);
}
console.log(escola);

escola = 'Sagrada';
console.log(escola);


//LET
//o LET não permite a redeclaração de variáveis, só permite o acesso a variavel no escopo onde foi criado
//Se atribuirmos valor a ela é como se estivessemos declarando uma nova variavel do tipo VAR, com o mesmo nome

if(nome === 'Adamastor'){
     let curso = 'DS';
     console.log(curso);
}
curso = 'Desenvolvimento';
console.log(curso);


//CONST
//Não pode ser redeclarado, nem reatribuido, nem reescrito, tem escopo de bloco como as LET 

const cargo = 'Estudante';
console.log(cargo);
//cargo = 'Programador';
console.log(cargo);


//CRIAÇÃO DE VARIAVEIS SEM ATRIBUIÇÃO INICIAL
 var aluno1;
 aluno1 = 'Ana Clara';
 console.log(aluno1);

 let aluno2;
 aluno2 = 'Bernardo';
 console.log(aluno2);

 //const aluno3;
//Declarações 'const' devem ser inicializadas com o valor

const aluno3 = 'Cremilda';
console.log(aluno3);