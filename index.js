/*Exercício 1*/
/*
function numerosPares() {

    let pares = [] //Parenteses define que é uma array

    //numero inicial = 1; se i for menor que 100; soma i+1
    for (let i = 1; i<= 100;i++){
        //Se resto do i dividido por 2 for igual a 0, entra no if
        if(i % 2 === 0){
            pares.push(i);
        }
    }

    return pares;
}

console.log(numerosPares());
*/




/*Exercicio 2*/

/*
let numeros = [3,5,1,2];

let soma = numeros.reduce((total,numero) => total = numero,0);


console.log("Números: ",numeros);
console.log("Soma: ",soma);
*/





/*Exercício 3*/

/*
let original = [1, -2, 3, -4, 5];
let semNegativos = removerNegativos(original);

function removerNegativos(arr) {
    return arr.filter(num => num >= 0);
}

console.log("Original: ",original);
console.log("Sem Negativos: ",semNegativos);
*/





/*Exercício 4*/

/*
let arrayOriginal = [1, 2, 3, 4, 5];
let arrayMultiplicado = multiplicaPorDois(arrayOriginal);

function multiplicaPorDois(arr) {
    return arr.map(num => num * 2);
}

console.log(arrayMultiplicado);
*/





/*ex.bonus*/

/*
function somaPromise(a, b) {
    return new Promise((resolve, reject) => {
      const resultado = a + b;
      if (resultado % 2 === 0) {
        resolve(resultado);
      } else {
        reject("O valor é impar");
      }
    });
  }

  somaPromise(2, 6)
  .then(resultado => {
    console.log("O valor é par: " + resultado);
  })
  .catch(erro => {
    console.log(erro);
  });
*/