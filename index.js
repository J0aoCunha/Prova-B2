//Crie uma função que receba um número como parâmetro e determine se ele é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Liste todos os números primos entre 1 e 1000.

function listarPrimos() {
    var primos = [];

    function Primo(numero) {
        if (numero < 2) {
            return false;
        }

        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false;
            }
        }

        return true;
    }


    for (var i = 1; i <= 1000; i++) {
        if (Primo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

const numerosPrimos = listarPrimos();
console.log(numerosPrimos); // console.log para listar todos os numeros primos de 1 a 1000

// Crie uma função que receba uma senha como parâmetro e verifique se ela atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula, uma letra minúscula e um número. Sua função deve receber uma senha e dizer para o usuário se ela é valida.

function validarSenha(senha) {

    if (senha.length < 8) {
        return "a senha precisa ter no minimo 8 caracteres";
    }

    if (!/[A - Z]/.test(senha)) {
        return "Sua senha tem que ter pelo menos 1 letra maiúscula"
    }
    if (!/[a - z]/.test(senha)) {
        return "seua senha tem que ter pelo menos 1 letra minúscula"
    }
    if (!/[0 - 9]/.test(senha)) {
        return "sua senha tem que ter pelo menos 1 numero"
    }

    return "Sua senha é invalida"
}

//exemplos
var senha1 = "joaosilva1"
var senha2 = "Joaosilva12"

console.log(validarSenha(senha1));
console.log(validarSenha(senha2));

// Crie uma função que receba um número como parâmetro e retorne o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Por exemplo, o fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120. Sua função deve calcular os fatoriais de 1 a 10.

//calcula o fatorial
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    var resultado = 1
    for (var i = 2; i <= numero; i++) {
        resultado *= i;
    }

    return resultado

}

// calcula o fotorial de 1 a  10.
for (let i = 1; i <= 10; i++) {
    var fatorial = calcularFatorial(i);
    console.log(`o fatorial  de ${i} é ${fatorial}`)
}


// Crie uma função que receba um número como parâmetro e determine se ele é um quadrado perfeito. Um quadrado perfeito é um número inteiro cuja raiz quadrada também é um número inteiro. Por exemplo, 25 é um quadrado perfeito porque a sua raiz quadrada é 5, um número inteiro.

function quadradoPerfeito(numero) {
    var raiz = Math.sqrt(numero);
    return raiz === Math.floor(raiz)
}

// exemplo
console.log(quadradoPerfeito(50))//false
console.log(quadradoPerfeito(80))// false
console.log(quadradoPerfeito(16))// true
console.log(quadradoPerfeito(25))//true