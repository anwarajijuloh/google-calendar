import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { getMonth } from '../util'

export default function SmallCalendar() {
    const [currentMonthIxd, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    useEffect(()=>{
        setCurrentMonth(getMonth(currentMonthIxd))
    }, [currentMonth])
    function handlerPrevMonth() {
        setCurrentMonthIdx(currentMonthIxd - 1)
    }
    function handlerNextMonth() {
        setCurrentMonthIdx(currentMonthIxd + 1)
    }
  return (
    <div className='mt-9 '>
        <header className='flex justify-between'>
            <p className='text-gray-600'>
                {dayjs(new Date(dayjs().year(), currentMonthIxd)).format("MMMM YYYY")}
            </p>
            <button onClick={handlerPrevMonth}>
                <span className='material-symbols-outlined cursor-pointer text-gray-600 mx-2'>
                    chevron_left
                </span>
            </button>
            <button onClick={handlerNextMonth}>
                <span className='material-symbols-outlined cursor-pointer text-gray-600 mx-2'>
                    chevron_right
                </span>
            </button>
        </header>
    </div>
  )
}
