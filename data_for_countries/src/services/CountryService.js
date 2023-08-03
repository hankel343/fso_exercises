import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
    const request = axios.get(baseUrl + 'all');
    return request.then(res => res.data);
}

const getCountry = (countryPrefix) => {
    console.log("performing getCountry on url: ", baseUrl + `name?filter=startsWith(name.common,${countryPrefix})`);
    const request = axios.get(baseUrl, {
        params: {
            filter: `startsWith(name.common, ${countryPrefix})`
        }
    });
    return request.then(res => res.data);
}


export default {
    getAll,
    getCountry
}