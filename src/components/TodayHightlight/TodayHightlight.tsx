import React from 'react'
import { BsSunrise, BsSunset, BsWind } from 'react-icons/bs'
import { IoEyeOutline } from 'react-icons/io5'
import { MdCo2 } from 'react-icons/md'
import { TbUvIndex } from 'react-icons/tb'
import { WiBarometer, WiHumidity } from 'react-icons/wi'
import { useWeather } from '../../contexts/WeatherContext'
import { convert24TimesTo12Times, getAirQualityStatus, getHumidityStatus, getVisibilityStatus, measureUvIndex } from '../../helpers/common'

function TodayHightlight() {
    const currentWeather = useWeather()?.weatherData?.currentConditions
    let sunriseTime = convert24TimesTo12Times(currentWeather?.sunrise)
    let sunSet = convert24TimesTo12Times(currentWeather?.sunset)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className=' bg-white p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] capitalize font-semibold'>UV index</div>
                <div className='flex items-center justify-between gap-4 py-4'>
                    <div className='text-4xl'><TbUvIndex /></div>
                    <div className=' my-2 text-4xl'>{currentWeather?.uvindex ?? "N/A"}<span className='text-xl'></span></div>
                </div>
                <div className='text-sm'>{measureUvIndex(currentWeather?.uvindex)}</div>
            </div>

            <div className=' bg-white p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Wind Status</div>
                <div className='flex items-center justify-between gap-4 py-4'>
                    <div className='text-4xl'><BsWind /></div>
                    <div className=' my-2 text-4xl'>{currentWeather?.windspeed || "N/A"}<span className='text-xl'>km/h</span></div>
                </div>
            </div>

            <div className=' bg-white p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Humidity</div>
                <div className='flex items-center justify-between gap-4 py-4'>
                    <div className='text-4xl'><WiHumidity /></div>
                    <div className=' my-2 text-4xl'>{currentWeather?.humidity}<span className='text-xl'>%</span></div>
                </div>
                <div className='text-sm'>{getHumidityStatus(currentWeather?.humidity)}</div>
            </div>
            <div className=' bg-white p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] capitalize font-semibold'>visibility</div>
                <div className='flex items-center justify-between gap-4 py-4'>
                    <div className='text-4xl'><IoEyeOutline /></div>
                    <div className=' my-2 text-4xl'>{currentWeather?.visibility || "N/A"}<span className='text-xl'>miles</span></div>
                </div>
                <div className='text-sm'>{getVisibilityStatus(currentWeather?.visibility)}</div>
            </div>
            <div className=' bg-white p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Air Pressure</div>
                <div className='flex items-center justify-between gap-4 py-4'>
                    <div className='text-4xl'><WiBarometer /></div>
                    <div className=' my-2 text-4xl'>{currentWeather?.pressure || "N/A"}<span className='text-xl'>hPa</span></div>
                </div>
            </div>

            <div className=' bg-white p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Air quantity</div>
                <div className='flex items-center justify-between gap-4 py-4'>
                    <div className='text-4xl'><MdCo2 /></div>
                    <div className=' my-2 text-4xl'>{currentWeather?.winddir || "N/A"}<span className='text-xl'></span></div>
                </div>
                <div className='text-sm'>{getAirQualityStatus(currentWeather?.winddir)}</div>
            </div>
            <div className=' bg-white p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Sunrise</div>
                <div className='flex items-center justify-between gap-4 py-4'>
                    <div className='text-4xl'><BsSunrise /></div>
                    <div className=' my-2 text-4xl'>{sunriseTime?.times || "N/A"}<span className='text-xl'>{sunSet?.format || ""}</span></div>
                </div>
            </div>
            <div className=' bg-white p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] capitalize font-semibold'>Sunset</div>
                <div className='flex items-center justify-between gap-4 py-4'>
                    <div className='text-4xl'><BsSunset /></div>
                    <div className=' my-2 text-4xl'>{sunSet?.times || "N/A"}<span className='text-xl'>{sunSet?.format || ""}</span></div>
                </div>
            </div>

        </div>
    )
}

export default TodayHightlight