import data from "../data/games2.json"

/* function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Horario</th>
        <th>Times</th>
        <th>Resultado</th>
      </tr>
    </thead>
  )
} */

export default function Table() {
  const options = {weekday: 'long', month: 'numeric', day: 'numeric',
    hour: '2-digit', minute: '2-digit'}

  return(
    <div id="table-view" className="panel">
      <div className="table-container">
        {data.games.map((game, id) => {
          const siglaParticipant1 = game.participant1.split(' ', 1)
          const siglaParticipant2 = game.participant2.split(' ', 1)
          const placar = game.finalScore.split(":")
          /*if(placar[0] > placar[1]){
            let winner = placar[0];
          } */
          return(
            <div className="table-row" key={id}>
              <div className="table-cell" id="date">
                {new Date(game.datetime).toLocaleDateString(
                  'pt-BR', options).toString()}
              </div>
              <div className="table-cell" id="participants">
                {siglaParticipant1} x {siglaParticipant2}
              </div>
              <div className="table-cell" id="score">
                {game.finalScore}
              </div>
            </div>
          )
          })}
      </div>
    </div>
  )
}