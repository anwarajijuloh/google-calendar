import dayjs from 'dayjs'
import React from 'react'

export default function Day({day, rowIdx}) {
  function getCurrentDayClass()
  {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white h-7 pt-1 rounded-full w-7' 
    : '';
  }
  // console.log(getCurrentDayClass())
  return (
    <div className='border border-gray-200 flex flex-col items-center'>
        <header className='fllex flex-col items-center'>
            {rowIdx === 0 && (
                <p className='text-sm mt-1 text-center'>{day.format('ddd').toUpperCase()}</p>

            )}
            <p className={`text-sm mt-1 text-center items-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>
    </div>
  )
}
