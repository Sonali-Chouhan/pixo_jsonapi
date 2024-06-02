import moment from "moment";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DiffDate = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [days, setDays] = useState(0)

  const dayLeft = () => {
    const one_day = 1000*60*60*24;
    let result
    result = Math.ceil((endDate.getTime()-startDate.getTime())/(one_day))
    setDays(result)
  }
  console.log(moment(endDate).diff(startDate,'days'));

  return (
    <div>
      <p>Start</p>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <p>End</p>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      <p>days:{days}</p>
      <button onClick={dayLeft}>days</button>
    </div>
  )
}
export default DiffDate
