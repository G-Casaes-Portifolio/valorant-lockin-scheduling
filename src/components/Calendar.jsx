import data from "../data/games.json"

function Calendar() {
  return (
    <div>
      {data.games.map((game) => (
        <tr key={game.id}>
          {game.teams.map((team) => (
            <td>{team}</td>
          ))}
        </tr>
      ))}
    </div>
  )
}

export default Calendar;