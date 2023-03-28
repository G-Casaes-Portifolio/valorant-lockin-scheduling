import { Round, Game } from '../interfaces'
import { RoundsList } from '../data'
import { longOptions } from '../options'

export default function ListView() {
  return (
    <div className="list">
      <h1>LISTA</h1>
      <ul>{RoundsList.map((round: Round) => (
        <li>
          <h1>{round.title}</h1>
          <ul>{round.games.map((game : Game) => (
            <li>{new Date(game.datetime).toLocaleDateString(
              'pt-BR', longOptions)}</li>
          ))}</ul>
        </li>
        ))}
      </ul>
    </div>
  )
}