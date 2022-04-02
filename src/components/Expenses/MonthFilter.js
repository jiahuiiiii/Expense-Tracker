import React from 'react'
import Select from 'react-select'

const options = [{value: null, label: "All"}].concat(Array(12).fill(0).map((_, i) => ({
  value: 1+i,
  label: 1+i
})))


const MonthFilter = ({ setYear }) => {
  return <Select onChange={(e) => setYear(e.value)} options={options} value={{value: null, label: "All Month"}} />
}

export default MonthFilter;
