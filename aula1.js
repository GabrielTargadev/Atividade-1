var dados = [];

for (var i = 1; i <= 15; i++) {
  var altura = prompt("Informe a altura da pessoa " + i + ":");
  var sexo = prompt("Informe o sexo da pessoa " + i + " (M para masculino ou F para feminino):");
  dados.push({altura: altura, sexo: sexo});
}

console.log(dados);


var menorAltura = Number.MAX_VALUE;
var maiorAltura = Number.MIN_VALUE;
var totalAlturasHomens = 0;
var totalMulheres = 0;

for (var i = 0; i < dados.length; i++) {
  var altura = parseFloat(dados[i].altura);
  var sexo = dados[i].sexo.toUpperCase();
  if (altura < menorAltura) {
    menorAltura = altura;
  }
  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
  if (sexo === "M") {
    totalAlturasHomens += altura;
  } else if (sexo === "F") {
    totalMulheres++;
  }
}

var mediaAlturasHomens = totalAlturasHomens / (dados.length - totalMulheres);

console.log("Menor altura do grupo: " + menorAltura);
console.log("Maior altura do grupo: " + maiorAltura);
console.log("Média das alturas dos homens: " + mediaAlturasHomens);
console.log("Número de mulheres: " + totalMulheres);