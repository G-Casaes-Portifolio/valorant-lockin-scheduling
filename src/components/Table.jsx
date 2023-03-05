import data from "../data/games2.json"

export default function Table() {
  return(
    <div className="panel">
          <div className="table-view">
      <table>
        <thead>
          <tr>
            <th>Horario</th>
            <th>Times</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
        {data.games.map((game, id) => {
          const siglaParticipant1 = game.participant1.split(' ', 1)
          const siglaParticipant2 = game.participant2.split(' ', 1)
          return(
            <tr key={id}>
              <td>{game.datetime}</td>
              <td>
                <b>{siglaParticipant1}</b> x <b>{siglaParticipant2}</b>
              </td>
              <td>{game.finalScore}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    </div>


  )
  /*   return(
    console.log(data.games)
  ) */
}