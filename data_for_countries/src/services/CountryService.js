import axios from 'axios'
const countryBaseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'
const weatherBaseUrl = 'https://api.openweathermap.org/data/3.0/onecall'

const getAll = () => {
    const request = axios.get(countryBaseUrl + 'all');
    return request.then(res => res.data);
}

const getCountry = (countryPrefix) => {
    console.log("performing getCountry on url: ", countryBaseUrl + `name?filter=startsWith(name.common,${countryPrefix})`);
    const request = axios.get(countryBaseUrl, {
        params: {
            filter: `startsWith(name.common, ${countryPrefix})`
        }
    });
    return request.then(res => res.data);
}

const getCapitalWeather = (country) => {
    console.log("getting weather data for ", country.name.common);
    const request = axios.get()
}


export default {
    getAll,
    getCountry
}