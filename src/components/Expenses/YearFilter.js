import React from 'react'
import Select from 'react-select'

const options = [{value: null, label: "All"}].concat(Array(10).fill(0).map((_, i) => ({
  value: 2021+i,
  label: 2021+i
})))


const YearFilter = ({ setYear }) => {
  return <Select onChange={(e) => setYear(e.value)} options={options} value={{value: null, label: "All Year"}} />
}

export default YearFilter;
