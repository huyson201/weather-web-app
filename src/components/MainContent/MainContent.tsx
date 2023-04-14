import React, { useState } from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'

import TodayHightlight from '../TodayHightlight/TodayHightlight'
import Forecast from '../Forecast/Forecast'
import { useTempUnit } from '../../contexts/TemperatureUnitContext'

export default function MainContent() {

    const [forecastType, setForecastType] = useState<ForecastType>("week")
    const setTempUnit = useTempUnit().setTemp

    return (
        <div className='main-content w-full md:w-[calc(100%_-_260px)] lg:w-[calc(100%_-_300px)] bg-[#f6f6f8] '>
            <div className='lg:px-24 md:px-16 px-10'>
                <div className='flex justify-between py-6'>
                    <div className='space-x-4 font-semibold'>
                        <button className={forecastType === "today" ? `text-primary` : `text-[#495057]`} onClick={() => setForecastType("today")}>Today</button>
                        <button className={forecastType === "week" ? `text-primary` : `text-[#495057]`} onClick={() => setForecastType("week")}>Week</button>
                    </div>
                    <div className='flex  gap-2'>
                        <button className='w-9 h-9 flex items-center justify-center text-white rounded-full bg-black font-medium' onClick={() => setTempUnit("Celsius")}>&deg;C</button>
                        <button className='w-9 h-9 flex items-center justify-center text-black rounded-full bg-white font-medium' onClick={() => setTempUnit("Fahrenheit")}>&deg;F</button>
                    </div>
                </div>


                {/* // Weather Forecast */}
                <Forecast type={forecastType} />
                {/* <div className='flex gap-4  flex-wrap'>
                    <WeatherCard />
                    <WeatherCard />
                    <WeatherCard />
                    <WeatherCard />
                    <WeatherCard />
                    <WeatherCard />
                    <WeatherCard />
                </div> */}

                {/* today's hightlights */}
                <h2 className='text-xl font-semibold mt-8'>Today’s Hightlights </h2>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    <div className=' bg-white p-4 rounded-lg'>
                        <div className='text-left text-[#c2c2c2] capitalize font-semibold'>UV Index</div>
                        <div className='flex items-center justify-between gap-4 py-4'>
                            <div className='text-4xl'><TbUvIndex /></div>
                            <div className=' my-2 text-4xl'>8<span className='text-xl'></span></div>
                        </div>
                        <div className='text-sm'>Low</div>
                    </div>

                    <div className=' bg-white p-4 rounded-lg'>
                        <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Wind Status</div>
                        <div className='flex items-center justify-between gap-4 py-4'>
                            <div className='text-4xl'><BsWind /></div>
                            <div className=' my-2 text-4xl'>7<span className='text-xl'>km/h</span></div>
                        </div>
                    </div>

                    <div className=' bg-white p-4 rounded-lg'>
                        <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Humidity</div>
                        <div className='flex items-center justify-between gap-4 py-4'>
                            <div className='text-4xl'><WiHumidity /></div>
                            <div className=' my-2 text-4xl'>84<span className='text-xl'>%</span></div>
                        </div>
                        <div className='text-sm'>High</div>
                    </div>
                    <div className=' bg-white p-4 rounded-lg'>
                        <div className='text-left text-[#c2c2c2] capitalize font-semibold'>visibility</div>
                        <div className='flex items-center justify-between gap-4 py-4'>
                            <div className='text-4xl'><IoEyeOutline /></div>
                            <div className=' my-2 text-4xl'>8,4<span className='text-xl'>miles</span></div>
                        </div>
                        <div className='text-sm'>Clear Air</div>
                    </div>
                    <div className=' bg-white p-4 rounded-lg'>
                        <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Air Pressure</div>
                        <div className='flex items-center justify-between gap-4 py-4'>
                            <div className='text-4xl'><WiBarometer /></div>
                            <div className=' my-2 text-4xl'>998<span className='text-xl'>hPa</span></div>
                        </div>
                    </div>

                    <div className=' bg-white p-4 rounded-lg'>
                        <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Air quantity</div>
                        <div className='flex items-center justify-between gap-4 py-4'>
                            <div className='text-4xl'><MdCo2 /></div>
                            <div className=' my-2 text-4xl'>55<span className='text-xl'></span></div>
                        </div>
                        <div className='text-sm'>Moderate😐</div>
                    </div>
                    <div className=' bg-white p-4 rounded-lg'>
                        <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Sunrise</div>
                        <div className='flex items-center justify-between gap-4 py-4'>
                            <div className='text-4xl'><BsSunrise /></div>
                            <div className=' my-2 text-4xl'>5:50<span className='text-xl'>am</span></div>
                        </div>
                    </div>
                    <div className=' bg-white p-4 rounded-lg'>
                        <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Sunset</div>
                        <div className='flex items-center justify-between gap-4 py-4'>
                            <div className='text-4xl'><BsSunset /></div>
                            <div className=' my-2 text-4xl'>5:50<span className='text-xl'>pm</span></div>
                        </div>
                    </div>

                </div> */}

                <TodayHightlight />
            </div>

            {/* footer */}
            <div className='text-center text-sm pb-6 pt-4 text-[#A09FB1] mt-4'>Created by username - devChallenges.io</div>

        </div>
    )
}
