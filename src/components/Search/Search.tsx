import React, { ChangeEvent, useEffect, useState } from 'react'
import openWeatherApis from '../../services/weatherApi'
import useDebounce from '../../hooks/useDebounce'
import { IoArrowBackOutline } from 'react-icons/io5'
import { FaMapMarkerAlt } from 'react-icons/fa'
import getCountry from '../../services/getCountry'
import { useCurrentLocation } from '../../contexts/CurrentLocationContext'

interface SearchProps {
    show?: boolean,
    onRequestClose: () => void,
    onSelectLocation: (location: string) => void
}
export default function Search({ show, onRequestClose, onSelectLocation }: SearchProps) {
    const [searchKey, setSearchKey] = useState<string>("")
    const [listCity, setListCity] = useState<City[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const value = useDebounce(searchKey, 1000)

    useEffect(() => {
        if (value === "") return

        const fetchSearch = async () => {
            setIsFetching(true)
            try {
                let res = await openWeatherApis.searchGeo(value)
                setListCity(res.data)
            } catch (error: any) {
                console.log(error.message)
            }
            finally {
                setIsFetching(false)
            }
        }

        fetchSearch()
    }, [value])

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchKey(e.currentTarget.value)
    }

    return (
        <div className={`search fixed md:absolute top-0 py-4 w-full h-full dark:bg-[#1D1C1F] bg-[#e4e5e5] z-[2] ${show ? "block" : "hidden"}`}>
            <div className='flex w-full relative items-center px-4  '>
                <button className='text-2xl text-black dark:text-[#DDDAE5]' onClick={onRequestClose}><IoArrowBackOutline /></button>
                <input onChange={handleOnChange} className='dark:placeholder:text-[#B9B6BF] dark:text-white-2 text-black pl-2 w-[calc(100%_-_24px)] pr-6 bg-transparent outline-none border-none' type="text" placeholder='Enter place...' />
                <div className='absolute right-4 top-2/4 ml-auto  -translate-y-2/4'>
                    <div className={`loader w-4 h-4 
                        border-[2px] border-t-transparent border-r-black border-b-black border-l-black
                        dark:border-r-[#DDDAE5] dark:border-b-[#DDDAE5] dark:border-l-[#DDDAE5]
                        rounded-full ${isFetching ? "block" : "hidden"}`}></div>
                </div>

            </div>
            <div className='w-full h-[1px] dark:bg-[#3E3D40] bg-white mt-2'></div>
            <div>
                {
                    listCity.map((city, index) => {
                        let countryName = getCountry(city.country)?.Name || ""
                        return (
                            <div onClick={() => onSelectLocation(`${city.name.replace("City", "")}, ${countryName}`)} key={index.toString()} className='flex gap-4 items-center  cursor-pointer w-full text-[#6E707A] dark:text-[#DDDAE5] hover:bg-white/20 dark:hover:bg-white/5 px-4 py-2 hover:text-black duration-200 transition '>
                                <div><FaMapMarkerAlt /></div>
                                <div>
                                    <div>{city.name}</div>
                                    <div>{`${city.state ? city.state + "," : ""} ${countryName}`}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
