import data from '../data/games2.json'
import { useState } from 'react'
import * as dayjs from 'dayjs';

const gamesDates = []
data.games.map((game) => {
  gamesDates.push(new dayjs(game.datetime).hour(0))
})

let currentDate = dayjs();
let daysOfMonth = dayjs().daysInMonth()
let firstDay = dayjs().startOf("month").day();
let newMonth = currentDate;

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
  let prevMonth = currentDate.subtract(1, "month");
  /* PREVIOUS MONTH */
  // Get only month day (number: int) from the previous month
  let prevMonthCounter = prevMonth.endOf("month").get('date');
  let prevMonthDateArray = [];

  /* FOR LOOP
    - Starting with the last *weekday* of current month  
    1. get last date by counter from previous month
    2. fill a array with prev month daysjs object
    3. decrease the counter and restart the loop 
  */
  for (let i = 1; i < dayjs().startOf("month").day(); i++){
    // Get last date (month day) object from previous month 
    let lastDate = prevMonth.set('date', prevMonthCounter);
    prevMonthDateArray.push(lastDate) // push object to array
    prevMonthCounter--; // decrease previous month last day
  }
  prevMonthDateArray = prevMonthDateArray.reverse();
  
  /* CURRENT MONTH */
  let currentMonthCounter = 1;
  let currentMonthDateArray = [];
  for (let i = 0; i < dayjs().daysInMonth();  i++){
    // Get date day object from current month and from counter 
    let lastDate = currentDate.set('date', currentMonthCounter);
    currentMonthDateArray.push(lastDate)
    currentMonthCounter++;
  }

  /* NEXT MONTH */
  let nextMonth = currentDate.add(1, "month");

  const totalDates = 42;
  const actualDates = currentMonthDateArray.length + prevMonthDateArray.length
  const remainderDates = totalDates - actualDates;
  
  let nextMonthCounter = 1;
  let nextMonthDateArray = [];
  for (let i = 0; i < remainderDates; i++){
    let lastDate = nextMonth.set('date', nextMonthCounter);
    nextMonthDateArray.push(lastDate)
    nextMonthCounter++;
  }

  const totalMonthDateArray = 
    prevMonthDateArray.concat(currentMonthDateArray, nextMonthDateArray)

  return totalMonthDateArray
}
export default function Calendar() {
  const dates = DaysOfMonth();
  
  const [title, setTitle] = useState(`${nameOfMonths[currentDate.month()]} - ${currentDate.year()}`)

  function changeMonth(quant){
    newMonth = currentDate.add(quant, "month").startOf("month"); // novo mes
    daysOfMonth = newMonth.daysInMonth(); // recebe os dias do mes do DayJs
    firstDay = newMonth.startOf("month").day(); // recebe o primeiro dia do mes
    // Atualiza o mes atual com o novo mes e muda o titulo
    currentDate = newMonth; 
    setTitle(`${nameOfMonths[currentDate.month()]} - ${currentDate.year()}`)
  }
  return (
    <div id="calendar-view" className="panel" >
      <div className="calendar-header">
        <span className="calendar-title">
          {title}
        </span>
        <div className="calendar-button-row">
          <button id="prevMonth" onClick={() => changeMonth(-1)}>&lt;
          </button>
          <button id="today">Today</button>
          <button id="prevMonth" onClick={() => changeMonth(1)}>&gt;
          </button>
        </div>
      </div>
      <div className="calendar-day-name">
        <DaysOfWeek />
      </div>
      <div className="calendar-dates">
        {dates.map((date, i) => {
          return (
            <button key={i} className={
              (date.month() == currentDate.month()) 
                ? "calendar-dates-day"
                : "calendar-dates-day-empty"}>
              {date.date()}
            </button>
          )
        })}
      </div>
    </div>
  )
}