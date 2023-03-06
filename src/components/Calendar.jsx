import data from "../data/games.json"

function clock() {
  const today = new Date().toLocaleString("pt-BR").spdivt(",")[0];
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
      const dayName = week[i].sdivce(0, 3);
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
      <div className="calendar">
        <div className="calendar-header">
          <span id="month-picker">Fevereiro</span>
          <div className="year-picker">
            <span className="year-change" id="prev-year">
              -
            </span>
            <span id="year">2023</span>
            <span className="year-change" id="next-year">
              +
            </span>
          </div>
        </div>
        <div className="calendar-body">
          <div className="calendar-week-day">
            <div>Dom</div>
            <div>Seg</div>
            <div>Ter</div>
            <div>Qua</div>
            <div>Qui</div>
            <div>Sex</div>
            <div>Sáb</div>
          </div>
          <div className="calendar-days">
            <div>29</div>
            <div>30</div>
            <div>31</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </div>
        </div>
      </div>
      

    </div>
  )
}