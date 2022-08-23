function addPlayers(playerId) {
    let playerElement = document.getElementById(playerId);
    let playerName = playerElement.innerText;
    return playerName;
}

function playerList(playerName) {
    let playerListElemnet = document.getElementById('player-list');


    if (playerListElemnet.childElementCount !== 5) {
        const newPlayer = document.createElement('li');
        newPlayer.innerText = playerName;
        playerListElemnet.appendChild(newPlayer);
    }
    else {
        alert('Sorry! Can not Add anymore player');
    }

}
function selectionAdd(idofPlayers, btnId) {
    document.getElementById(btnId).addEventListener('click', function () {
        let playerInfoOne = addPlayers(idofPlayers);
        playerList(playerInfoOne);
    })

}
selectionAdd('messi', 'messi-btn',);
selectionAdd('ronaldo', 'ronaldo-btn',);
selectionAdd('neymar', 'neymar-btn',);
selectionAdd('benzema', 'benzema-btn',);
selectionAdd('silva', 'silva-btn',);
selectionAdd('kaka', 'kaka-btn',);





