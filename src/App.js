// import { useEffect, useState } from "react";
import "./App.css";
import Calender from "./components/Calender/Calender";

// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// var weeks = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let years = [];

// for (let i = 2000; i < 2050; i++) {
//   years.push(i);
// }

function App() {
  // const [date, setDate] = useState(new Date());
  // var monthName = months[date.getMonth()]; // "July" (or current month)
  // var yearName = date.getFullYear();
  // let todayName = weeks[date.getDay()];

  // console.log(todayName);

  // const [month, setMonth] = useState(monthName);
  // const [year, setYear] = useState(yearName);

  // useEffect(() => {
  //   const d = new Date();
  //   d.setYear(year);
  //   d.setMonth(months.indexOf(month));
  //   d.setDate(1);
  //   setDate(d);
  // }, [month, year]);

  // const handleMonths = (e) => {
  //   setMonth(e.target.value);
  // };

  // const handleYears = (e) => {
  //   setYear(e.target.value);
  // };

  return (
    <div className="App">
      {/* <select defaultValue={monthName} onChange={handleMonths}>
        {months.map((month, index) => (
          <option key={index}>{month}</option>
        ))}
      </select>
      <select defaultValue={yearName} onChange={handleYears}>
        {years.map((year, index) => (
          <option key={index}>{year}</option>
        ))}
      </select>

      <h2>
        {month}, {year}
      </h2> */}
      <Calender />
    </div>
  );
}

export default App;
