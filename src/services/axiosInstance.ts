import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/",
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        key: import.meta.env.VITE_API_KEY,
        unitGroup: "metric",
        iconSet: "icons2"
    }
})


export default axiosInstance