import { useState, useEffect } from 'react'
import CountryInfo from './CountryInfo'
import WeatherView from './WeatherView'

const Display = ({ items }) => {
    const [isVisibleMap, setIsVisibleMap] = useState({});

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
        // useEffect(() => {
        //     console.log("weather useEffect()");

        // })
        
        const country = items[0];
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
            </div>
        )
    }
}

export default Display