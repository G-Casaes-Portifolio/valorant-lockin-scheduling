import data from "../data/datetime.json"


export default function List() {
  const options = {weekday: 'long', month: 'numeric', day: 'numeric',
    hour: '2-digit', minute: '2-digit'}

  const showPanel = (id) => {
    let element = document.getElementById(id);
    console.log(element)
    if(element.className.includes(':active')) 
      element.className = element.className.replace(':active', '')
    else 
      element.className = element.className.concat(':active')
  }

  return (
    <div id="list-panel" className="panel">
      {data.datetime.map((roundset, i) => (
      <div className="list-item" key={i}>
        <h1>{roundset.title}</h1>
        <div className="round-container">
        {roundset.games.map((round, i) => (
          <>
          <h1 onClick={() => showPanel(
            `${roundset.title}-${round.title}`)}>
              {round.title}
            </h1>
          <ul /* ContentPanel */ 
          className="content"
          id={`${roundset.title}-${round.title}`}>
            {round.games.map((game, i) => {
              return <li key={i}>
                {new Date(game).toLocaleDateString('pt-BR', options).toString()}
              </li>
            })}
          </ul>
          </>
        ))}
        </div>
      </div>
      ))}
    </div>
  )
}
