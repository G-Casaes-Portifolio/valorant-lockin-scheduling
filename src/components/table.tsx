import { GamesList } from "@/data"
import { Game } from '@/interfaces'
import { longOptions } from "@/options"

export default function TableView() {
  return (
    <div className="table">
      <h1>TABLE</h1> 
      <table>{GamesList.map((game: Game) => (
        <tr>
          <td>{game.participants[0]}</td>
          <td>{game.participants[1]}</td>
          <td>{new Date(game.datetime).toLocaleDateString('pt-BR', longOptions)}</td>
          <td>
            {game.result.score[0]} : {game.result.score[1]}
          </td>
        </tr>
        ))}</table>
    </div>
  )
}