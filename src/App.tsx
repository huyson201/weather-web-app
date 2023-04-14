import { useEffect, useState } from 'react'
import MainContent from './components/MainContent/MainContent'
import LeftSide from './components/LeftSide'
import weatherApis from './services/weatherApi'
import { useCurrentLocation } from './contexts/CurrentLocationContext'
import { useWeather } from './contexts/WeatherContext'

function App() {
  const currentLocation = useCurrentLocation()
  const weather = useWeather()

  useEffect(() => {
    weatherApis.getWeather("ho chi minh, viet nam")
      .then(res => weather?.saveWeather(res.data))
      .catch(err => console.log(err))

  }, [])
  return (
    <div className="App">
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
