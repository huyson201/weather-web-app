import React, { useState } from "react"

type TemperatureUnit = "Celsius" | "Fahrenheit"

interface TemperatureUnitContext {
    temp: TemperatureUnit,
    setTemp: (temp: TemperatureUnit) => void
}

const TempUnitContext = React.createContext<TemperatureUnitContext>({
    temp: "Celsius",
    setTemp: () => { }
})

export const useTempUnit = () => {
    return React.useContext(TempUnitContext)
}

interface Props {
    children: any | any[]
}
const TempUnitProvider = ({ children }: Props) => {
    const [unit, setUnit] = useState<TemperatureUnit>("Celsius")
    return (
        <TempUnitContext.Provider value={{ temp: unit, setTemp: (temp) => setUnit(temp) }}>
            {children}
        </TempUnitContext.Provider>
    )
}

export default TempUnitProvider