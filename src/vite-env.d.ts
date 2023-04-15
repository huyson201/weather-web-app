/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly VITE_API_KEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

interface WeatherData { //array of Weather of weather data objects
    datetime: string

    datetimeEpoch: number

    tempmax: number

    tempmin: number

    temp: number

    feelslikemax: number

    feelslikemin: number

    feelslike: number

    dew: number

    humidity: number

    precip: number

    precipprob: number | null

    precipcover: number

    preciptype: string[]

    snow: number

    snowdepth: number
    windgust: number
    windspeed: number

    winddir: number

    pressure: number

    cloudcover: number

    visibility: number
    solarradiation: number

    solarenergy: number

    uvindex: number

    severerisk: number
    sunrise: string

    sunriseEpoch: number

    sunset: string

    sunsetEpoch: number

    moonphase: number

    conditions: string

    description: string

    icon: string

    stations: string[]

    source: comb

    hours: WeatherData[]

}


interface WeatherResponse {
    latitude: number,
    longitude: number,
    resolvedAddress: string,
    address: string,
    timezone: string,
    tzoffset: number,
    description: string,
    days: WeatherData[],
    alerts: [{
        event: string,
        description: string,

    }
    ],
    currentConditions: WeatherData
}

interface WeatherContext {
    weatherData: WeatherResponse | null,
    saveWeather: (data: WeatherResponse) => void
}

type ForecastType = "week" | "today"
type ThemeMode = "dark" | "light"
interface ThemeModeContext {
    mode: ThemeMode,
    setMode: (theme: ThemeMode) => void
}

interface City {
    country: string
    lat: number
    lon: number
    name: string
    state: string
}

interface GeoLocation {
    IPv4: string | null
    city: string | null
    country_code: string
    country_name: string
    latitude: number
    longitude: number
    postal: string | null
    state: string | null
}