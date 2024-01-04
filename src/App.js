import React from 'react'
import Bariable from './Bariable.js'

const App = () => {
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-01-31');
  const daysPerWeek = 5;
  return (
    <Bariable startDate={startDate} endDate={endDate} daysPerWeek={daysPerWeek}/>
  )
}

export default App

