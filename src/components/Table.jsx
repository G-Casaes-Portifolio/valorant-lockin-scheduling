import data from "../data/games2.json"

export default function Table() {
  return(
    <table>

      <tbody>
      {data.games.map((game, id) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{game.datetime}</td>
          <td>{game.participant1}</td>
          <td>{game.participant2}</td>
          <td>{game.finalScore}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
  /*   return(
    console.log(data.games)
  ) */
}