import React, { useState } from 'react'

import TodayHightlight from '../TodayHightlight/TodayHightlight'
import Forecast from '../Forecast/Forecast'
import { useTempUnit } from '../../contexts/TemperatureUnitContext'
import { IoMoon, IoMoonOutline, IoSunny } from 'react-icons/io5'
import { useTheme } from '../../contexts/ThemeModeContext'

export default function MainContent() {

    const [forecastType, setForecastType] = useState<ForecastType>("week")
    const tempUnit = useTempUnit()
    const themeMode = useTheme()

    const handleClickThemeMode = () => {
        themeMode.setMode(themeMode.mode === "dark" ? "light" : "dark")
    }
    return (
        <div className='main-content w-full md:w-[calc(100%_-_300px)]  bg-[#f6f6f8] dark:bg-[#131214] '>
            <div className='lg:px-6 md:px-6 px-10'>
                <div className='flex justify-between py-6'>
                    <div className='space-x-4 font-semibold'>
                        <button className={forecastType === "today" ? `text-primary` : `text-[#495057] dark:text-[#7B7980]`} onClick={() => setForecastType("today")}>Today</button>
                        <button className={forecastType === "week" ? `text-primary` : `text-[#495057] dark:text-[#7B7980]`} onClick={() => setForecastType("week")}>Week</button>
                    </div>

                    <div className='flex  gap-2'>
                        <button className='flex h-9 w-[4.5rem] rounded-[50px] relative cursor-pointer items-center 
                                            active
                                            bg-gradient-to-br from-[#e1e1e1] to-[#fff]
                                            dark:from-[#131214] dark:to-[#131214]
                                            shadow-[3px_3px_4px_#e6e6e6,-3px_-3px_4px_#fff]
                                            dark:shadow-[3px_3px_4px_rgba(0,0,0),-2px_-2px_4px_rgba(255,255,255,0.1)]'
                            onClick={handleClickThemeMode}>

                            <span className='w-2/4 text-white  flex items-center  z-[1] justify-center text-base'><IoSunny /></span>
                            <span className='w-2/4 flex dark:hidden text-black  z-[1]  items-center justify-center text-base'><IoMoonOutline /></span>
                            <span className='w-2/4 hidden dark:flex text-black   z-[1]  items-center justify-center text-base'><IoMoon /></span>
                            <span className='inline-block absolute top-0 left-0 w-[30px] h-[30px] mt-[3px] ml-[3px] dark:left-2/4 rounded-full dark:bg-white bg-black transition-all duration-300'></span>
                        </button>
                        <button className={`w-9 h-9 flex items-center justify-center  rounded-full font-medium ${tempUnit.temp === "Celsius" ? "bg-black text-white dark:bg-white-2 dark:text-black" : "dark:bg-[rgba(255,255,255,0.08)]  dark:text-white-2 bg-white text-black"}`} onClick={() => tempUnit.setTemp("Celsius")}>&deg;C</button>
                        <button className={`w-9 h-9 flex items-center justify-center  rounded-full font-medium ${tempUnit.temp === "Fahrenheit" ? "bg-black text-white dark:bg-white-2 dark:text-black" : "dark:bg-[rgba(255,255,255,0.08)] dark:text-white-2  bg-white text-black"}`} onClick={() => tempUnit.setTemp("Fahrenheit")}>&deg;F</button>
                    </div>
                </div>


                {/* // Weather Forecast */}
                <Forecast type={forecastType} />

                {/* today's hightlights */}
                <h2 className='dark:text-white-2 text-xl font-semibold mt-8'>Today’s Hightlights </h2>
                <TodayHightlight />
            </div>

            {/* footer */}
            <div className='text-center text-sm pb-6 pt-4 text-[#A09FB1] dark:text-[#7B7980] mt-4'>&copy;2023 Created by Son Nguyen &#10084; - No rights reserved</div>

        </div>
    )
}
