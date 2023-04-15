import React, { useCallback, useState } from "react";


interface CurrentLocation {
    location: string
    setLocation: (location: string) => void
}

const CurrentContext = React.createContext<CurrentLocation | null>(null)


export const useCurrentLocation = () => {
    return React.useContext(CurrentContext)
}

interface Props {
    children: any | any[]
}

export default function CurrentLocationProvider({ children }: Props) {

    const [location, setLocation] = useState<string>("viet nam")

    return (
        <CurrentContext.Provider value={{ location, setLocation: (data) => setLocation(data) }}>
            {children}
        </CurrentContext.Provider>
    )
}