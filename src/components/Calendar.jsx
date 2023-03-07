import data from "../data/games.json"
import { useState } from 'react'
import * as dayjs from 'dayjs';

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
  let count = 1;
  let prevMonthLastDate = currentDate.subtract(1, "month").endOf("month").$D
  
  //PREVIOUS MONTH
  let prevMonthDateArray = [];
  for (let p = 1; p <= firstDay; p++){
    prevMonthDateArray.push(prevMonthLastDate--);
  }
  prevMonthDateArray = prevMonthDateArray.reverse();
  //CURRENT MONTH
  const currentMonthDateArray = []
  for (let i = 0; i < daysOfMonth; i++) 
    currentMonthDateArray.push(count++)

  // variáveis da pagina do calendário
  const numberOfPlots = 42; // quantidade de números por pagina do calendário
  const datesPloted = ( // quantidade de datas ja dispostas na pagina
    prevMonthDateArray.length + currentMonthDateArray.length)

  let diff = numberOfPlots - datesPloted; // quantidade de datas faltantes 
  let nextMonthDates = 1; // data do novo mes 
  
  //NEXT MONTH
  const nextMonthDateArray = []
  for (let j = 0; j < diff; j++) 
    nextMonthDateArray.push(nextMonthDates++);

  // Array com a data dos tres meses
  const totalMonthDateArray = [
    prevMonthDateArray, currentMonthDateArray, nextMonthDateArray]

  return totalMonthDateArray;
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
        {dates[0].map((day, i) => {
          return (
            <button key={i} className="calendar-dates-day-empty">
              {day}
            </button>
          )
        })}
        {dates[1].map((day, i) => {
          return (
            <button key={i} className="calendar-dates-day">
              {day}
            </button>
          )
        })}
        {dates[2].map((day, i) => {
          return (
            <button key={i} className="calendar-dates-day-empty">
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}