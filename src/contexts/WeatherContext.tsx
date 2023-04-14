import React, { useCallback, useState } from "react";

export const WeatherContext = React.createContext<WeatherContext | null>(null)


export const useWeather = () => {
    return React.useContext(WeatherContext)
}

interface Props {
    children: any | any[]
}

export default function WeatherProvider({ children }: Props) {
    const [data, setData] = useState<WeatherResponse | null>(null)

    const save = (data: WeatherResponse) => {
        setData(data)
    }

    return (
        <WeatherContext.Provider value={{ weatherData: data, saveWeather: save }}>
            {children}
        </WeatherContext.Provider>
    )
}
