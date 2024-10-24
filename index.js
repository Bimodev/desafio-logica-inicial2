function pontosRankeadas(derrotas, vitorias) {
    let calculo = vitorias - derrotas;
    let rank;

    if (calculo <= 10) {
        rank = "Ferro";
    } else if (calculo <= 20) {
        rank = "Bronze";
    } else if (calculo <= 50) {
        rank = "Prata";
    } else if (calculo <= 80) {
        rank = "Ouro";
    } else if (calculo <= 90) {
        rank = "Diamante";
    } else if (calculo <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return { calculo, rank };
}

let resultado = pontosRankeadas(30, 120);

console.log(`O Herói tem saldo de ${resultado.calculo} e está no nível de ${resultado.rank}`);
