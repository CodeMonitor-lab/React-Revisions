import React from 'react'
import Input from './Input'

const DateBirth = () => {
    const currentYear = new Date().getFullYear()
    const years = Array.from({length:currentYear-1899},(_,i)=> 1900+i)
    console.log(years)
    // 
    const DateBirth = Array.from({length:31},(_,i)=> i+1)
    const months = [
        { value: "01", name: "January" },
        { value: "02", name: "February" },
        { value: "03", name: "March" },
        { value: "04", name: "April" },
        { value: "05", name: "May" },
        { value: "06", name: "June" },
        { value: "07", name: "July" },
        { value: "08", name: "August" },
        { value: "09", name: "September" },
        { value: "10", name: "October" },
        { value: "11", name: "November" },
        { value: "12", name: "December" },
      ];
    // console.log(DateBirth)
  return (
    <>
    <main className='border-2 flex gap-5'>
        <select name="birth">
           {
            DateBirth.map((date)=>(
                <option key={date}  value={date} >{date}</option>
            ))
            }
        </select>
        {/*  */}
        <select name="month">
            {
                months.map((mon)=>(
                    <option key={mon.value} >
                        {mon.name}
                    </option>
                ))
            }
        </select>
        {/*  */}
        <select name="month">
         {
            years.map((year)=>(
                <option key={year} >
                    {year}
                </option>
            ))
         }
        </select>
    </main>
    </>
  )
}

export default DateBirth