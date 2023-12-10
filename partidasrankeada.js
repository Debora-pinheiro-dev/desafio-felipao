calcularSaldo(5, 3)

function calcularSaldo(vitorias, derrotas) {
  var saldoVitorias = vitorias - derrotas;
  var nivel;
    if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendários";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }
  console.log("O Herói tem o saldo de " + saldoVitorias + " está no nível " + nivel);
}

