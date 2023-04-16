
import React, { useEffect, useRef, useState } from 'react'
import cloud from '../assets/images/HeavyCloud.png'
import { BiCurrentLocation, BiSearch } from 'react-icons/bi'
import { BsFillCloudyFill } from 'react-icons/bs'
import { FaTint, FaMapMarkerAlt } from 'react-icons/fa'
import { dayOfWeek } from '../data';
import Search from './Search/Search';
import { useWeather } from '../contexts/WeatherContext';
import { useTempUnit } from '../contexts/TemperatureUnitContext';
import { convertCelsiusToFahrenheit } from '../helpers/common';
import { useCurrentLocation } from '../contexts/CurrentLocationContext'
import weatherApis from '../services/weatherApi'

export default function LeftSide() {
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const clock = useRef<HTMLSpanElement>(null)

    const weather = useWeather()
    const tempUnit = useTempUnit().temp
    const currLocation = useCurrentLocation()


    useEffect(() => {
        const intervalId = setInterval(() => {
            let date = new Date(new Date().toLocaleString("en-US", { timeZone: weather?.weatherData?.timezone }))
            let hours = date.getHours()
            let min = date.getMinutes()

            let minString: string = min < 10 ? `0${min}` : `${min}`
            let hoursString: string = `${hours % 12}`

            if (clock.current) {
                clock.current.textContent = `${hoursString}:${minString} ${hours > 12 ? "PM" : "AM"}`
            }

        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [weather?.weatherData])

    const handleSelectLocation = (location: string) => {
        currLocation?.setLocation(location)
        setShowSearch(false)
    }

    const handleClickCurrentLocation = async () => {
        let currentLocation = (await weatherApis.getCurrentLocation()).data
        let address = `${currentLocation.city ? currentLocation.city + "," : ""} ${currentLocation.country_name}`
        currLocation?.setLocation(address)
    }

    return (
        <div className='
            lg:w-[300px]
            md:w-[300px]
            bg-[#e4e5e5]
            dark:bg-[#232323]
            overflow-hidden
            relative
            pb-6
            flex
            flex-col
            md:pb-0
            h-screen 
            md:fixed
            md:top-0
            md:left-0
        '>
            <img className='absolute w-[100px] top-[80px] -left-[36px] md:-z-[1]  cloud cloud-1' src={cloud} alt='cloud' />
            <img className='absolute w-[110px] top-[86px] -right-[40px] md:-z-[1]  cloud cloud-2' src={cloud} alt='cloud' />
            <img className='absolute w-[100px] cloud cloud-3 top-[180px] -left-[80px] md:-z-[1]' src={cloud} alt='cloud' />
            <img className='absolute w-[90px] cloud cloud-4 top-[240px]  md:-z-[1] -right-[4px]' src={cloud} alt='cloud' />
            <img className='absolute w-[140px] cloud cloud-5 top-[160px] -left-[80px] md:-z-[1]' src={cloud} alt='cloud' />

            <div className='flex justify-end items-center pt-4 px-4 gap-2'>

                <button onClick={() => setShowSearch(true)} className='w-8 h-8 hover:opacity-80 transition-opacity duration-200 text-white text-xl flex items-center justify-center rounded-full bg-primary'><BiSearch /></button>
                <button onClick={handleClickCurrentLocation} className='w-8 h-8 hover:bg-primary transition-all duration-200 text-white-2 text-xl flex items-center justify-center rounded-full bg-gray-2 t'><BiCurrentLocation /></button>
            </div>

            <div className='w-full px-4 text-center mt-6 relative z-[1]'>
                <img className='w-[240px] md:w-[70%] inline-block' src={`/images/${weather?.weatherData?.currentConditions.icon || "cloudy"}.png`} alt='weather icons' />
            </div>

            <div className='dark:text-white-2 mt-12 md:mt-20 px-4 flex justify-center md:justify-start'>
                <h1 className='text-7xl font-normal'>{tempUnit === "Celsius" ? weather?.weatherData?.currentConditions.temp : (convertCelsiusToFahrenheit(weather?.weatherData?.currentConditions.temp) || "N/A")}</h1>
                <span className='text-5xl mt-1'>{tempUnit === "Celsius" ? "°C" : "°F"}</span>
            </div>
            <div className='px-4 dark:text-white-2 my-2 text-xl md:text-base text-center md:text-left'>
                <span>{dayOfWeek[(new Date(new Date().toLocaleString("en-US", { timeZone: weather?.weatherData?.timezone }))).getDay()]}, <span ref={clock} >00:00</span></span>
            </div>

            <div className='w-full h-[1px] bg-white my-4'></div>
            <div className='flex dark:text-white-2 items-center px-4 gap-2 ' >
                <BsFillCloudyFill className='text-sm' />
                <span className='text-xs'>{weather?.weatherData?.currentConditions.conditions}</span>
            </div>
            <div className='flex items-center dark:text-white-2 px-4 gap-2 mt-2'>
                <FaTint className='text-sm' />
                <span className='text-xs'>Perc - {(weather?.weatherData?.currentConditions.precip + "%") || "N/A"}</span>
            </div>
            <div className='flex items-center dark:text-white-2 px-4 gap-2 mt-2'>
                <svg height="14" viewBox="0 0 32 32" width="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m26 30h-4a2.0059 2.0059 0 0 1 -2-2v-7a2.0059 2.0059 0 0 1 -2-2v-6a2.9465 2.9465 0 0 1 3-3h6a2.9465 2.9465 0 0 1 3 3v6a2.0059 2.0059 0 0 1 -2 2v7a2.0059 2.0059 0 0 1 -2 2zm-5-18a.9448.9448 0 0 0 -1 1v6h2v9h4v-9h2v-6a.9448.9448 0 0 0 -1-1z" /><path d="m24 9a4 4 0 1 1 4-4 4.0118 4.0118 0 0 1 -4 4zm0-6a2 2 0 1 0 2 2 2.0059 2.0059 0 0 0 -2-2z" /><path d="m10 20.1839v-8.1839h-2v8.1839a3 3 0 1 0 2 0z" /><path d="m9 30a6.9931 6.9931 0 0 1 -5-11.8892v-11.1108a5 5 0 0 1 10 0v11.1108a6.9931 6.9931 0 0 1 -5 11.8892zm0-26a3.0033 3.0033 0 0 0 -3 3v11.9834l-.332.2983a5 5 0 1 0 6.664 0l-.332-.2983v-11.9834a3.0033 3.0033 0 0 0 -3-3z" /><path d="m0 0h32v32h-32z" fill="none" /></svg>
                <span className='text-xs'>Feels - {tempUnit === "Celsius" ? (weather?.weatherData?.currentConditions.feelslike + "°C" || "N/A") : (convertCelsiusToFahrenheit(weather?.weatherData?.currentConditions.feelslike) + "°F" || "N/A")}</span>
            </div>

            {/* location */}
            <div className='dark:text-white-2 mt-auto flex mb-auto md:mb-0 gap-2 px-4 items-center justify-center md:justify-start md:pb-4'>
                <FaMapMarkerAlt className='text-sm' />
                <span className='text-sm'>{weather?.weatherData?.resolvedAddress || "N/A"}</span>
            </div>

            {/* search box */}
            <Search onSelectLocation={handleSelectLocation} show={showSearch} onRequestClose={() => setShowSearch(false)} />
        </div>
    )
}

