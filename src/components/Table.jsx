import data from "../data/games2.json"

export default function Table() {
  const options = {weekday: 'long', month: 'numeric', day: 'numeric',
    hour: '2-digit', minute: '2-digit'}

  return(
    <div id="table-view" className="panel">
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
          const placar = game.finalScore.split(":")
          if(placar[0] > placar[1]){
            let winner = placar[0];
          }
          return(
            <tr key={id}>
              <td id="date">
                {new Date(game.datetime).toLocaleDateString(
                  'pt-BR', options).toString()}
              </td>
              <td id="participants">
                {siglaParticipant1} x {siglaParticipant2}
              </td>
              <td id="score">
                {game.finalScore}
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>


  )
  /*   return(
    console.log(data.games)
  ) */
}