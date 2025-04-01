document.getElementById("btnWonParaReal").addEventListener("click", converterWonParaReal);
document.getElementById("btnRealParaDolar").addEventListener("click", converterRealParaDolar);
document.getElementById("btnRealParaBitcoin").addEventListener("click", converterRealParaBitcoin);

  function converterWonParaReal () {
  let valorWon = prompt("Digite o valor em Wons:");
  let cotacaoWon = 0.0040;
  let resultado = valorWon * cotacaoWon;
  alert("O valor em reais é: R$ "+ resultado);
}

function converterRealParaDolar () {
  let valorReal = prompt("Digite o valor em Reais:");
  let cotacaoDolar = 5.70;
  let resultado = valorReal / cotacaoDolar;
  alert("O valor em Dólares é: $ "+ resultado);
}

function converterRealParaBitcoin () {
  let valorReal = prompt("Digite o valor em Reais:");
  let cotacaoBitcoin = 480.000
  let resultado = valorReal / cotacaoBitcoin;
  alert("O valor em reais é: R$ "+ resultado);
}