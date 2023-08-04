import { useState, useEffect} from 'react';
import CountryService from '../services/CountryService';

const WeatherView = ({ country }) => {
    const [weatherData, setWeatherData] = useState({});
    const [weatherLoaded, setWeatherLoaded] = useState(false);

    useEffect(() => {
        CountryService
            .getCapitalWeather(country)
            .then(res => {
                console.log("weather promise fulfilled: ", res);
                setWeatherData(res);
                setWeatherLoaded(true);
            });
    }, [country]);
    
    return (
        <div>
            <h1>Weather in {country.capital[0]}</h1>
            {weatherLoaded ? (
                <div>
                    <p>Temperature: {weatherData.main.temp}</p>
                    {weatherData.weather && weatherData.weather[0] && (
                        <div>
                            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}/>
                        </div>
                    )}
                    {weatherData.wind && <p>Wind: {weatherData.wind.speed}</p>}
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    )
}

export default WeatherView