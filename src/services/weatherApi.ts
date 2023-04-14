import axiosInstance from "./axiosInstance"


const weatherApis = {
    getWeather: (city: string) => {
        return axiosInstance.get<WeatherResponse>(city)
    }
}


export default weatherApis