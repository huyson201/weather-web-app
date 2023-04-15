import { useEffect, useState } from 'react'
import MainContent from './components/MainContent/MainContent'
import LeftSide from './components/LeftSide'
import weatherApis from './services/weatherApi'
import { useCurrentLocation } from './contexts/CurrentLocationContext'
import { useWeather } from './contexts/WeatherContext'
import { useTheme } from './contexts/ThemeModeContext'

function App() {
  const currentLocation = useCurrentLocation()
  const weather = useWeather()
  const themeMode = useTheme()

  useEffect(() => {
    if (!currentLocation?.location) return
    weatherApis.getWeather(currentLocation.location)
      .then(res => weather?.saveWeather(res.data))
      .catch(err => console.log(err))

  }, [currentLocation?.location])
  return (
    <div className={`App ${themeMode.mode}`}>
      <div className='
        min-h-screen w-full 
        flex
        flex-col
        md:flex-row md:justify-end'>
        <LeftSide />
        <MainContent />
      </div>
    </div>
  )
}

export default App
