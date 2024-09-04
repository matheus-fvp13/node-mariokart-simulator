const player1 = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    score: 0
};

const player2 = {
    name: "Luigi",
    speed: 3,
    maneuverability: 4,
    power: 4,
    score: 0
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result = "";

    switch(true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }
    
    return result;
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}:\n`);
        // sortear bloco
        let bloco = await getRandomBlock();
        console.log(`Bloco sorteado: ${bloco}\n`);
    }
}

(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.name} and ${player2.name} começando ...\n`
    );

    await playRaceEngine(player1, player2);
})();