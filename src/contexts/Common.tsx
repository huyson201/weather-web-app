import React from "react";
import CurrentLocationProvider from "./CurrentLocationContext";
import WeatherProvider from "./WeatherContext";
import TempUnitProvider from "./TemperatureUnitContext";
import ThemeModeProvider from "./ThemeModeContext";


interface Props {
    children: any | any[]
}
export default function CommonContextProvider({ children }: Props) {
    return (
        <CurrentLocationProvider>
            <WeatherProvider >
                <TempUnitProvider>
                    <ThemeModeProvider>
                        {children}
                    </ThemeModeProvider>
                </TempUnitProvider>
            </WeatherProvider>
        </CurrentLocationProvider>
    )
} 