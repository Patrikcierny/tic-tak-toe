export default class GameView {

    constructor(){

    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWiningCombinations();
        for(let i = 0; i < game.board.length; i++){
            console.log(game.board[i])
            const tile = document.querySelector(`.board-tile[data-index='${i}']`)
            tile.textContent = game.board[i];

            tile.classList.remove("tile-winner");

            let tileType = game.board[i] == 'X' ? "tile-x" :
             "tile-o";

             tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board
                [i] : ""}</span>`

                if(winningCombination && winningCombination.includes(i)){
                    tile.classList.add("tile-winner");
                }
        }
    }
    updateTurn(game){
        let hracX = document.querySelector(".hrac-X")
        let hracO = document.querySelector(".hrac-O")
        hracX.classList.remove("active")
        hracO.classList.remove("active")


        if(game.turn == 'X') {
        hracX.classList.add('active')
        } else{
            hracO.classList.add('active')
        }
    
    }




}


