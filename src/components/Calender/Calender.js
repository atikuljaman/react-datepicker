import React, { Fragment, useState } from "react";
import useCalender from "../../hooks/useCalender";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import "./Calender.css";

const Calender = () => {
  const {
    daysShort,
    monthNames,
    todayFormatted,
    calenderRows,
    selectedDate,
    getPrevMonth,
    getNextMonth,
    getPrevYear,
    getNextYear,
  } = useCalender();

  // const [startDate, setStartDate] = useState(todayFormatted);
  //   const [showCalendar, setShowCalendar] = useState(true);
  const [currDate, setCurrDate] = useState([]);
  // const [selectDate, setSelectDate] = useState(todayFormatted);

  const dates = [];

  function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());

    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
      setCurrDate(dates);
    }

    console.log(dates);
    return dates;
  }

  const dateClickHandler = (date) => {
    const d1 = new Date(date);
    const d2 = new Date("2022-7-10");
    const demo = `${selectedDate.getFullYear()}-${
      selectedDate.getMonth() + 1
    }-${selectedDate.getDate()}`;
    // setStartDate(date);
    console.log(demo);
    getDatesInRange(d1, d2);
    // console.log(getDatesInRange(d1, d2));
    // console.log(date.getFullYear());
  };

  // currDate.forEach((dd) => {
  //   const todayDate = `${dd.getDate()}-${
  //     dd.getMonth() + 1
  //   }-${dd.getFullYear()}`;
  //   // setSelectDate(todayDate);
  //   // console.log(todayDate);
  // });

  // console.log(
  //   `${currDate[3].getDate()}-${
  //     currDate[3].getMonth() + 1
  //   }-${currDate[3].getFullYear()}`
  // );

  return (
    <Fragment>
      {/* <input value={startDate} className="selected-date" /> */}
      <div className="selected-date">
        {/* <span>
          {`${currDate[0].getDate()}-${
            currDate[0].getMonth() + 1
          }-${currDate[0].getFullYear()}`}{" "}
          To
        </span>
        {""}
        <span>{`${currDate[3].getDate()}-${
          currDate[3].getMonth() + 1
        }-${currDate[3].getFullYear()}`}</span> */}
      </div>

      <div className="calendar-container">
        <div className="calendar-header">
          <BiLeftArrow className="year-arrow-icon" onClick={getPrevYear} />
          <BiLeftArrow className="arrow-icon" onClick={getPrevMonth} />
          <h2>
            {`${
              monthNames[selectedDate.getMonth()]
            }, ${selectedDate.getFullYear()}`}
          </h2>
          <BiRightArrow className="arrow-icon" onClick={getNextMonth} />
          <BiRightArrow className="year-arrow-icon" onClick={getNextYear} />
        </div>
        <table className="calender-table">
          <tr>
            {daysShort.map((weekName, idx) => (
              <th className="calender-head" key={idx}>
                {weekName}
              </th>
            ))}
          </tr>
          <tbody>
            {Object.values(calenderRows).map((cols) => {
              return (
                <tr key={cols[0].date}>
                  {cols.map((col) => (
                    <td key={col.date} className="table-body">
                      {col.date === todayFormatted ? (
                        <td
                          key={col.date}
                          className={col.classes}
                          id="today"
                          onClick={() => dateClickHandler(col.date)}
                        >
                          {col.value}
                        </td>
                      ) : (
                        <td
                          key={col.date}
                          onClick={() => dateClickHandler(col.date)}
                        >
                          {col.value}
                        </td>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Calender;
