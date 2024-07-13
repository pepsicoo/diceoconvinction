async function diceRoll() {
    const rollBtn = document.getElementById("roll_button");
    const dicePick = document.getElementById("dice_pick");
    const diceVoice = document.getElementById("dice_voice");
    let pick = null;

    dicePick.style.textShadow = "0px 0px 50px black";
    for (let i = 0; i != 10; i++) {
        pick = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        dicePick.textContent = pick;
        if (i == 9) {
            break;
        }
        await new Promise(resolve => setTimeout(resolve, i * 100));
    }
    dicePick.style.textShadow = "2px 2px 5px black";
}