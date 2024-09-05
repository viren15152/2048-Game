document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('score')
    const resultDisplay = document.querySelector('result')
    console.log(gridDisplay)
    const width = 4

    //create the playing board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const sqaure = document.createElement('div')
            gridDisplay.appendChild(sqaure)
         
        }
    
    }
    createBoard()

})