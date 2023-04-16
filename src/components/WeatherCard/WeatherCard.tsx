import React from 'react'
import lightCloud from '../assets/images/LightCloud.png'
import { convertCelsiusToFahrenheit, getDayOfWeek, getTimes } from '../../helpers/common'
import { useTempUnit } from '../../contexts/TemperatureUnitContext'


interface Props {
    data: WeatherData,
    type: ForecastType
}

export default function WeatherCard({ data, type = "week" }: Props) {
    const tempUnit = useTempUnit().temp

    return (
        <div className='p-3 flex w-[100px] shadow-md dark:shadow-white-2/10 dark:bg-[#1D1C1F] dark:text-white-2 bg-white rounded-md gap-2 justify-center flex-col items-center'>
            <div className=' text-sm font-semibold'>{type === "week" ? getDayOfWeek(data.datetime) : getTimes(data.datetime)}</div>
            <img className='w-full' src={`/images/${data.icon}.png`} alt='weather' />
            <div className='text-sm w-full flex justify-center mt-auto text-center'>
                <span className='font-semibold text-base'>{tempUnit === "Celsius" ? data.temp : convertCelsiusToFahrenheit(data.temp)}</span>
                <span className='text-sm'>{tempUnit === "Celsius" ? "°C" : "°F"}</span>
            </div>
        </div>
    )
}
