import dayjs from 'dayjs'
import React, { useContext } from 'react'
import logo from '../assets/calendar-logo.png'
import GlobalContext from '../context/GlobalContext'

export default function CalendarHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)
  function handlerPrevMonth() {
    setMonthIndex(monthIndex - 1)
  }
  function handlerNextMonth() {
    setMonthIndex(monthIndex + 1)
  }
  function handlerReset() {
    setMonthIndex(dayjs().month())
  }
  return (
    <header className='px-4 py-2 flex items-center'>
      <button>
        <span class="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
        menu
        </span>
      </button>
      <img src={logo} alt='calendar' className='mr-2 w-8 h-8' />
      <h1 className='mr-10 text-xl text-gray-800'>Calendar</h1>
      <button onClick={handlerReset} className='border rounded py-2 px-4 mr-5'>
        Today
      </button>
      <button onClick={handlerPrevMonth}>
        <span class="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
        chevron_left
        </span>
      </button>
      <button onClick={handlerNextMonth}>
        <span class="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
        chevron_right
        </span>
      </button>
      <h2 className='ml-4 text-xl text-gray-500'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  )
}
