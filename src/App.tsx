import { useEffect, useState } from 'react'
import MainContent from './components/MainContent/MainContent'
import LeftSide from './components/LeftSide'
import weatherApis from './services/weatherApi'
import { useCurrentLocation } from './contexts/CurrentLocationContext'
import { useWeather } from './contexts/WeatherContext'
import { useTheme } from './contexts/ThemeModeContext'
import Loader from './components/Loader/Loader'

function App() {
  const currentLocation = useCurrentLocation()
  const weather = useWeather()
  const themeMode = useTheme()
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [fetching, setFetching] = useState<boolean>(false)

  useEffect(() => {
    setFetching(true)
    console.log()
    const fetchLocation = async () => {
      let location = (await weatherApis.getCurrentLocation()).data
      let address = `${location.city ? location.city + "," : ""} ${location.country_name}`
      currentLocation?.setLocation(address)
    }

    fetchLocation()
  }, [])

  useEffect(() => {
    if (!currentLocation || currentLocation.location === "") {
      return
    }

    weatherApis.getWeather(currentLocation.location)
      .then(res => weather?.saveWeather(res.data))
      .catch(err => console.log(err))
      .finally(() => { setFetching(false); if (firstLoad) setFirstLoad(false) })

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
      <Loader show={firstLoad && fetching} />
    </div>
  )
}

export default App
