import data from "../data/games.json"

function clock() {
  const today = new Date().toLocaleString("pt-BR").split(",")[0];
  return (
    <div className="clock">
      <h2>{today}</h2>
    </div>
  )
}

function gridCalendar() {
  const week = ["segunda", "terça", "quarta", 
    "quinta", "sexta", "sábado", "domingo"];
  
  const table = []
  for (let j = 0; j < 6; j++){
    for (let i = 0; i < week.length; i++) {
      const dayName = week[i].slice(0, 3);
      // table.push()
      const cell = <td>
          <div className="day">{dayName}</div>
          <p>
  
          </p>
        </td>
      table.push(cell)
    }
  }

  return (table)
}

export default function Calendar() {
  return (
    <div id="calendar-view" className="panel" >
      <p>
        {clock()}
      </p>
      <table>
        {gridCalendar()}
      </table>
      {data.games.map((game) => (
        <div>

          <p>
            {game.teams[0]} - {game.teams[1]} 
          </p>
          <p>
            {game.score[0]} x {game.score[1]}
          </p>
        </div>
      ))}
    </div>
  )
}