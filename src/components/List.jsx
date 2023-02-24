import data from "../data/datetime.json"


function List() {
  const options = {weekday: 'long', month: 'numeric', day: 'numeric',
    hour: '2-digit', minute: '2-digit'}

  return (
    <div className="list-container">
      {data.datetime.map((roundset, i) => (
      <div className="round-list" key={i}>
        <h1>{roundset.title}</h1>
        <ul className="round-container">
        {roundset.games.map((round, i) => (
          <li key={i}>
            <h2>{round.title}</h2>
            <ul className="game-list">
              {round.games.map((game, i) => {
                return <li key={i}>
                  {new Date(game).toLocaleDateString('pt-BR', options).toString()}
                </li>
              })}
            </ul>
          </li>
        ))}
        </ul>
      </div>
      ))}
    </div>
  )
}

export default List
