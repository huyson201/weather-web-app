import React from 'react'
import { useTheme } from '../../contexts/ThemeModeContext'

interface Props {
    show?: boolean
}
const Loader = ({ show }: Props) => {
    const theme = useTheme()
    return (
        <div className={`preloader ${show ? "block" : "hidden"} ${theme.mode === 'dark' ? "bg-black" : "bg-white"} fixed top-0 left-0 z-10 w-full h-full flex items-center justify-center`}>
            <iframe className='w-[400px] h-[400px]' src="https://embed.lottiefiles.com/animation/78349"></iframe>
        </div>
    )
}

export default Loader