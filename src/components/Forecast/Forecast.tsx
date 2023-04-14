import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import { useWeather } from '../../contexts/WeatherContext'

interface Props {
    type: ForecastType
}

function Forecast({ type }: Props) {
    const weather = useWeather()


    const genForecast = () => {
        if (type === "week") {
            return weather?.weatherData?.days.slice(0, 6).map((data, index) => {
                return <WeatherCard data={data} key={data.datetime} type={type} />
            })
        }

        return weather?.weatherData?.days[0].hours.map((data, index) => {
            return <WeatherCard data={data} key={data.datetime} type={type} />
        })
    }

    return (
        <div className='flex gap-4  flex-wrap'>

            {genForecast()}

        </div>
    )
}

export default Forecast