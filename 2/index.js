const gameConstructor = require('./game')
const game = new gameConstructor()

game.move('rock', 'paper')
game.move('scissors', 'scissors')
game.move('paper', 'scissors')
game.move('paper', 'rock')

const storedGame = JSON.stringify(game)
const loadedGame = JSON.parse(storedGame)

loadedGame.move('paper', 'scissors')
