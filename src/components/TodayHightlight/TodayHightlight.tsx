import React, { CSSProperties } from 'react'
import { BsWind } from 'react-icons/bs'
import { IoEyeOutline } from 'react-icons/io5'
import { MdCo2 } from 'react-icons/md'
import { TbUvIndex } from 'react-icons/tb'
import { WiBarometer, WiHumidity, WiSunrise, WiSunset } from 'react-icons/wi'
import { useWeather } from '../../contexts/WeatherContext'
import { convert24TimesTo12Times, getHumidityStatus, getVisibilityStatus, getWindSpeedStatus, measureUvIndex } from '../../helpers/common'
import { FaLocationArrow } from 'react-icons/fa'
export interface MyCustomCSS extends CSSProperties {
    '--i': string;
}

function TodayHightlight() {
    const currentWeather = useWeather()?.weatherData?.currentConditions
    let sunriseTime = convert24TimesTo12Times(currentWeather?.sunrise)
    let sunSet = convert24TimesTo12Times(currentWeather?.sunset)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-2 lg:gap-6 mt-4">
            <div className=' bg-white dark:bg-[#1D1C1F]  p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] dark:text-[#7B7980] capitalize font-semibold'>UV index</div>
                <div className='flex items-center justify-between gap-4 py-4 dark:text-white-2'>
                    <div className='text-4xl'><TbUvIndex /></div>
                    <div className=' my-2 text-3xl'>{currentWeather?.uvindex ?? "N/A"}<span className='text-xl'></span></div>
                </div>
                <div className='text-sm dark:text-white-2'>{measureUvIndex(currentWeather?.uvindex)}</div>
            </div>

            <div className=' bg-white dark:bg-[#1D1C1F] p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] dark:text-[#7B7980] capitalize font-semibold'>Wind Status</div>
                <div className='flex items-center justify-between gap-4 py-4 dark:text-white-2'>
                    <div className='text-4xl '><BsWind /></div>
                    <div className=' my-2 text-3xl'>{currentWeather?.windspeed || "N/A"}<span className='text-xl'>km/h</span></div>
                </div>
                <div className='text-sm dark:text-white-2'>{getWindSpeedStatus(currentWeather?.windspeed)}</div>

            </div>

            <div className=' bg-white dark:bg-[#1D1C1F] p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] dark:text-[#7B7980] capitalize font-semibold'>Humidity</div>
                <div className='flex items-center justify-between gap-4 py-4 dark:text-white-2'>
                    <div className='text-4xl'><WiHumidity /></div>
                    <div className=' my-2 text-3xl'>{currentWeather?.humidity}<span className='text-xl'>%</span></div>
                </div>
                <div className='text-sm dark:text-white-2'>{getHumidityStatus(currentWeather?.humidity)}</div>
            </div>
            <div className=' bg-white dark:bg-[#1D1C1F] p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] dark:text-[#7B7980] capitalize font-semibold'>visibility</div>
                <div className='flex items-center justify-between gap-4 py-4 dark:text-white-2'>
                    <div className='text-4xl'><IoEyeOutline /></div>
                    <div className=' my-2 text-3xl'>{currentWeather?.visibility || "N/A"}<span className='text-xl'>km</span></div>
                </div>
                <div className='text-sm dark:text-white-2'>{getVisibilityStatus(currentWeather?.visibility)}</div>
            </div>
            <div className=' bg-white dark:bg-[#1D1C1F] p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] dark:text-[#7B7980] capitalize font-semibold'>Air Pressure</div>
                <div className='flex items-center justify-between gap-4 py-4 dark:text-white-2'>
                    <div className='text-4xl'><WiBarometer /></div>
                    <div className=' my-2 text-3xl'>{currentWeather ? (currentWeather.pressure / 1000).toFixed(2) : "N/A"}<span className='text-xl'>bar</span></div>
                </div>
            </div>

            <div className=' bg-white dark:bg-[#1D1C1F] p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] dark:text-[#7B7980] capitalize font-semibold'>Wind direction</div>
                <div className='flex items-center justify-between gap-4 py-4 dark:text-white-2'>
                    <div className={`text-2xl rotate-[var(--i)]`} style={{ "--i": currentWeather?.winddir + "deg" } as MyCustomCSS}><FaLocationArrow className='rotate-[135deg]' /></div>
                    <div className=' my-2 text-3xl'>{currentWeather?.winddir || "N/A"}&deg;</div>
                </div>
                {/* <div className='text-sm dark:text-white-2'>{getAirQualityStatus(currentWeather?.winddir)}</div> */}
            </div>
            <div className=' bg-white dark:bg-[#1D1C1F] p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] dark:text-[#7B7980] capitalize font-semibold'>Sunrise</div>
                <div className='flex items-center justify-between gap-4 py-4 dark:text-white-2'>
                    <div className='text-4xl'><WiSunrise /></div>
                    <div className=' my-2 text-3xl'>{sunriseTime?.times || "N/A"}<span className='text-xl'>{sunSet?.format || ""}</span></div>
                </div>
            </div>
            <div className=' bg-white dark:bg-[#1D1C1F] p-4 rounded-lg'>
                <div className='text-left text-[#c2c2c2] dark:text-[#7B7980] capitalize font-semibold'>Sunset</div>
                <div className='flex items-center justify-between gap-4 py-4 dark:text-white-2'>
                    <div className='text-4xl'><WiSunset /></div>
                    <div className=' my-2 text-3xl'>{sunSet?.times || "N/A"}<span className='text-xl'>{sunSet?.format || ""}</span></div>
                </div>
            </div>

        </div>
    )
}

export default TodayHightlight