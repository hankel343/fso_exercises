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
    if (country !== null) {
        const [lat, lon] = country.capitalInfo.latlng;
        const api_key = process.env.REACT_APP_API_KEY;
        const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`);
        return request.then(res => res.data);
    }
}


export default {
    getAll,
    getCountry,
    getCapitalWeather
}