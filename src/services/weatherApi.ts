import axios from "axios"
import axiosInstance from "./axiosInstance"


const weatherApis = {
    getWeather: (city: string) => {
        return axiosInstance.get<WeatherResponse>(city)
    },
    searchGeo: (city: string) => {
        return axios.get("https://api.openweathermap.org/geo/1.0/direct", {
            params: {
                appid: "d465afca4fb4a86c46196e0ac8e71882",
                limit: 5,
                q: city
            }
        })
    },
    getCurrentLocation: () => {
        return axios.get<GeoLocation>("https://geolocation-db.com/json/")
    }
}


export default weatherApis