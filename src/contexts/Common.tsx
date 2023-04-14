import React from "react";
import CurrentLocationProvider from "./CurrentLocationContext";
import WeatherProvider from "./WeatherContext";
import TempUnitProvider from "./TemperatureUnitContext";


interface Props {
    children: any | any[]
}
export default function CommonContextProvider({ children }: Props) {
    return (
        <CurrentLocationProvider>
            <TempUnitProvider>
                <WeatherProvider >
                    {children}
                </WeatherProvider>
            </TempUnitProvider>
        </CurrentLocationProvider>
    )
} 