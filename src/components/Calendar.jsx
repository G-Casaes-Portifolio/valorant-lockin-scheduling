import data from "../data/games.json"
import { useEffect, useState } from 'react'
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

  const [title, setTitle] = useState(`${nameOfMonths[currentDate.month()]} - ${currentDate.year()}`)

  return (
    <div id="calendar-view" className="panel" >
      <div className="calendar-header">
        <span className="calendar-title">
          {title}
        </span>
        <div className="calendar-button-row">
          <button id="prevMonth" onClick={() => {
            newMonth = currentDate.subtract(1, "month").startOf("month");
            daysOfMonth = newMonth.daysInMonth();
            firstDay = newMonth.startOf("month").day();
            currentDate = newMonth;
            setTitle(`${nameOfMonths[currentDate.month()]} - ${currentDate.year()}`)
          }}>&lt;
          </button>
          <button id="today">Today</button>
          <button id="prevMonth" onClick={() => {
            newMonth = currentDate.add(1, "month").startOf("month");
            daysOfMonth = newMonth.daysInMonth();
            firstDay = newMonth.startOf("month").day();
            currentDate = newMonth;
            setTitle(`${nameOfMonths[currentDate.month()]} - ${currentDate.year()}`)
          }}>&gt;
          </button>
        </div>
      </div>
      <div className="calendar-day-name">
        <DaysOfWeek />
      </div>
      <div className="calendar-dates">
        {dates.map((day, i) => {
          return (
            <button key={i} className="calendar-dates-day">
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}