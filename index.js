// desafio classificador nivel herói
let nome = "heroi"
let xp = 2000


switch (xp) {
    case "xp <= 1000":
      console.log(nome + "nível Ferro");
      break;
    case "xp >= 1001 && < 2000":
      console.log(nome + "nível Bronze");
      break;
    case "xp >= 2001 && < 5000":
      console.log(nome + "nível prata");
      break;
    case "xp >= 6001 && < 7000":
      console.log(nome + "nível ouro");
      break;
    case "xp >= 7001 && < 8000":
      console.log(nome + "nível platina");
      break;
    case "xp >= 8001 && < 9000":
        console.log(nome + "nível ascendente");
    break;
    case "xp >= 9001 && < 10000":
      console.log(nome + "nível imortal");
      break;
    case "xp >= 100001":
      console.log(nome + "nível radiante");
    break;
}  