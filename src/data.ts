import Games from './data/games.json'
import Rounds from './data/rounds.json'
import { Round, Game } from './interfaces'

export const GamesList : Game[] = Games
export const RoundsList : Round[] = []
Rounds.map((round) => {
  const tempRound: Round = {
    id: round.id,
    title: round.title,
    games: []
  }
  RoundsList.push(tempRound)
})
Games.map((game) => {
  const tempGame: Game = game;
  RoundsList.map((round) => {
    if(round.title == tempGame.class)
      round.games.push(tempGame)
  })
})