import { dayOfWeek } from "../data"


export const convertCelsiusToFahrenheit = (temp?: number) => {
    if (!temp) return
    return (temp * 1.8 + 32).toFixed(0)
}

export const getTimes = (times: string) => {
    let splitData = times.split(":")
    if (splitData.length < 0) return null

    let hours = +splitData[0]
    let min = +splitData[1]
    let format = hours > 12 ? "Pm" : "Am"


    hours = hours > 12 ? hours % 12 : hours
    return hours < 12 ? `${hours}:${min} ${format}` : `${hours}:${min} ${format}`
}

export const getDayOfWeek = (dateData: string) => {
    let dateTime = new Date(dateData)
    return dayOfWeek[dateTime.getDay()]
}

export const measureUvIndex = (uvIndex?: number) => {
    if (uvIndex === undefined) return "N/A"
    if (uvIndex <= 2) {
        return "Low";
    } else if (uvIndex <= 5) {
        return "Moderate";
    } else if (uvIndex <= 7) {
        return "High";
    } else if (uvIndex <= 10) {
        return "Very High";
    } else {
        return "Extreme";
    }
}

export const getHumidityStatus = (humidity?: number) => {
    if (humidity === undefined) return "N/A"
    if (humidity <= 30) {
        return "Low";
    } else if (humidity <= 60) {
        return "Moderate";
    } else {
        return "High";
    }
}


export const getVisibilityStatus = (visibility?: number) => {
    if (visibility === undefined) return "N/A"
    if (visibility <= 0.03) {
        return "Dense Fog";
    } else if (visibility <= 0.16) {
        return "Moderate Fog";
    } else if (visibility <= 0.35) {
        return "Light Fog";
    } else if (visibility <= 1.13) {
        return "Very Light Fog";
    } else if (visibility <= 2.16) {
        return "Light Mist";
    } else if (visibility <= 5.4) {
        return "Very Light Mist";
    } else if (visibility <= 10.8) {
        return "Clear Air";
    } else {
        return "Very Clear Air";
    }
}


export const getAirQualityStatus = (airQuality?: number) => {
    if (!airQuality) return "N/A"
    if (airQuality <= 50) {
        return "Good👌";
    } else if (airQuality <= 100) {
        return "Moderate😐";
    } else if (airQuality <= 150) {
        return "Unhealthy for Sensitive Groups😷";
    } else if (airQuality <= 200) {
        return "Unhealthy😷";
    } else if (airQuality <= 250) {
        return "Very Unhealthy😨";
    } else {
        return "Hazardous😱";
    }
}

export const convert24TimesTo12Times = (times?: string) => {
    if (!times) return null
    let splitData = times.split(":")
    if (splitData.length < 0) return null

    let hours = +splitData[0] % 12
    let min = +splitData[1]


    hours = hours > 12 ? hours % 12 : hours

    return {
        times: `${hours > 10 ? hours : `0${hours}`}:${min > 10 ? min : `0${min}`}`,
        format: hours > 12 ? "pm" : "am"
    }
}


export const getIcon = (condition: string) => {
    if (condition === "partly-cloudy-day") {
        return "https://i.ibb.co/PZQXH8V/27.png";
    } else if (condition === "partly-cloudy-night") {
        return "https://i.ibb.co/Kzkk59k/15.png";
    } else if (condition === "rain") {
        return "https://i.ibb.co/kBd2NTS/39.png";
    } else if (condition === "clear-day") {
        return "https://i.ibb.co/rb4rrJL/26.png";
    } else if (condition === "clear-night") {
        return "https://i.ibb.co/1nxNGHL/10.png";
    } else {
        return "https://i.ibb.co/rb4rrJL/26.png";
    }
}