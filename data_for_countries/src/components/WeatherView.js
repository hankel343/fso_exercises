
const WeatherView = ({capital, temp, icon, windSpeed }) => {
    
    return (
        <div>
            <h1>Weather in {capital}</h1>
            <p>Temperature: {temp}</p>
            <div>{icon}</div>
            <p>Wind: {windSpeed}</p>
        </div>
    )
}

export default WeatherView