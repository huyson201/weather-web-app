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
        <div className='p-3 flex w-[100px] bg-white rounded-md flex-col items-center'>
            <div className=' text-sm font-semibold'>{type === "week" ? getDayOfWeek(data.datetime) : getTimes(data.datetime)}</div>
            <img className='w-full' src='https://i.ibb.co/PZQXH8V/27.png' alt='weather' />
            <div className='text-sm w-full mt-4 flex justify-center text-center'>
                <span className='font-semibold text-base'>{tempUnit === "Celsius" ? data.temp : convertCelsiusToFahrenheit(data.temp)}</span>
                <span className='text-sm'>{tempUnit === "Celsius" ? "°C" : "°F"}</span>
            </div>
        </div>
    )
}
