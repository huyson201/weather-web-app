import worlds from '../data/world.json'
const getCountry = (countryCode: string) => {
    return worlds.find(country => {
        return country.Code === countryCode
    })
}


export default getCountry