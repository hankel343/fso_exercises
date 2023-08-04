import { useState, useEffect } from 'react'
import CountryInfo from './CountryInfo'
import WeatherView from './WeatherView'
import CountryService from '../services/CountryService';

const Display = ({ items }) => {
    const [isVisibleMap, setIsVisibleMap] = useState({});
    const [weatherData, setWeatherData] = useState({});

    const getWeatherData = (country) => {
        CountryService
            .getCapitalWeather(country)
            .then(res => {
                console.log("weather promise fulfilled: ", res);
                setWeatherData(res);
            });
    }

    const toggleVisibility = (countryName) => {
        setIsVisibleMap((prevMap) => ({
            ...prevMap,
            [countryName]: !prevMap[countryName],
        }));
    };

    if (!items || items.length === 0)
        return (<div>No country data avaliable.</div>)

    if (items.length > 10) {
        return (
            <div>
                <p>Too many matches. Specify another filter</p>
            </div>
        )
    } else if (items.length > 1) {
        return (
            <div>
                <ul>
                    {items.map((country, i) => (
                        <div>
                            <p>{country.name.common}</p>
                            <CountryInfo key={i}
                                name={country.name}
                                capitals={country.capital}
                                area={country.area}
                                languages={country.languages}
                                flag={country.flag}
                                isVisible={isVisibleMap[country.name.common]}
                            />
                            <button onClick={() => toggleVisibility(country.name.common)}>
                                {isVisibleMap[country.name.common] ? "Hide" : "Show"}
                            </button>
                        </div>
                    ))}
                </ul>
            </div>
        )
    } else {
        const country = items[0];
        getWeatherData(country);
        console.log("weather data used in the JSX: ", weatherData);
        return (
            <div>
                <p>{country.name.common}</p>
                <CountryInfo
                    name={country.name}
                    capitals={country.capital}
                    area={country.area}
                    languages={country.languages}
                    flag={country.flag}
                    isVisible={isVisibleMap[country.name.common]}
                />
                {/* <WeatherView
                    capital={country.capitals[0]}
                    temp={weatherData.current.temp}
                    icon={weatherData.current.weather.icon}
                    windSpeed={weatherData.current.windSpeed}
                /> */}
            </div>
        )
    }
}

export default Display