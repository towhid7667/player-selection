function perPlayerCost() {
    let perplayerCostElement = document.getElementById("perPlayer-cost");
    let newperplayerCostString = perplayerCostElement.value;
    let newperplayerCost = parseInt(newperplayerCostString);


    let totalPlayer = document.getElementById('player-list');

    const totalPlayerCost = (totalPlayer.childElementCount) * newperplayerCost;

    let playerTotalExpenseElement = document.getElementById('total-Player-expense');
    playerTotalExpenseElement.innerText = totalPlayerCost;


}

function addTotalCost() {
    let managerCostElement = document.getElementById('manager');
    let managerCostString = managerCostElement.value;
    const managerCost = parseInt(managerCostString);

    let coachCostElement = document.getElementById('coach');
    let coachCostString = coachCostElement.value;
    const coachCost = parseInt(coachCostString);


    let playerCostElement = document.getElementById('total-Player-expense');
    let playerCostString = playerCostElement.innerText;
    let playerCost = parseInt(playerCostString);


    const totalCost = managerCost + coachCost + playerCost;

    let totalCostElement = document.getElementById('totalCost');
    totalCostElement.innerText = totalCost;

}

document.getElementById('getPlayercost').addEventListener('click', function () {
    perPlayerCost();
});

document.getElementById('total-cost-calculate').addEventListener('click', function () {
    addTotalCost();
});