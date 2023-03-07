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
  let prevMonthLastDate = currentDate.subtract(1, "month").endOf("month").$D
  
  let prevMonthDateArray = [];
  //Previous month
  for (let p = 1; p <= firstDay; p++){
    prevMonthDateArray.push(prevMonthLastDate--);
  }
  prevMonthDateArray = prevMonthDateArray.reverse();
  //Current month
  const currentMonthDateArray = []
  for (let i = 0; i < daysOfMonth; i++) {
    currentMonthDateArray.push(count++)
  } 
  const totalMonthDateArray = prevMonthDateArray.concat(currentMonthDateArray)
  //Next month
  let diff = 42 - totalMonthDateArray.length;
  let nextMonthDates = 1;
  for (let j = 0; j < diff; j++){
    totalMonthDateArray.push(nextMonthDates++)
  }

  return totalMonthDateArray;
}

export default function Calendar() {
  const dates = DaysOfMonth();
  
  return (
    <div id="calendar-view" className="panel" >
      <div className="calendar-header">
        <span className="calendar-title">Fevereiro</span>
        <div className="calendar-button-row">
          <button id="prevMonth">&lt;</button>
          <button id="today">Today</button>
          <button id="prevMonth">&gt;</button>
        </div>
      </div>
      <div className="calendar-day-name">
        <DaysOfWeek />
      </div>
      <div className="calendar-dates">
        {dates.map((day) => {
          return (
            <button className="calendar-dates-day">
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}