import React, { useState } from "react";

const ThemeContext = React.createContext<ThemeModeContext>({
    mode: "light",
    setMode(theme) {

    },
})


export const useTheme = () => React.useContext(ThemeContext)

interface Props {
    children: any | any[]
}

export default function ThemeModeProvider({ children }: Props) {
    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
        let mode = localStorage.getItem("theme.mode")
        if (!mode) return "light"
        return mode as ThemeMode
    })

    const setMode = (mode: ThemeMode) => {
        localStorage.setItem("theme.mode", mode)
        setThemeMode(mode)
    }

    return (
        <ThemeContext.Provider value={{ mode: themeMode, setMode: setMode }}>
            {children}
        </ThemeContext.Provider>
    )
}