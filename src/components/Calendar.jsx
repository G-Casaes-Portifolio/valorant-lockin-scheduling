import data from "../data/games.json"
import * as dayjs from 'dayjs';

const currentDate = dayjs();

const daysOfMonth = dayjs().daysInMonth()

const firstDay = dayjs().startOf("month").day();

const nameOfMonths = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio",
  "Junho", "Julho", "Agosto", "Setembro", "Outubro",
  "Novembro", "Dezembro"
]
const nameOfDays = [
  "domingo", 'segunda', "terça", "quarta", "quinta",
  "sexta", "sábado"
]

function DaysOfWeek() { 
  return (
    nameOfDays.map((nameDay, i) => (
      <div key={i}>
        {nameDay.substring(0, 3)}
      </div>
    ))
  )
}

function DaysOfMonth() {
  let count = 1;
  let prevMonthLastDate = currentDate.subtract(1, "month").endOf("month")
  const prevMonthDateArray = [];
  console.log(firstDay)
  //Previous month
  for (let p = 1; p < firstDay; p++){
    prevMonthDateArray.push(prevMonthLastDate.subtract(1, "days"));
  }

  prevMonthDateArray.reverse().forEach((day) => {
    
  })
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
            <DaysOfWeek />
          </div>
          <div className="calendar-days">
            <DaysOfMonth />
          </div>
        </div>
      </div>
      

    </div>
  )
}