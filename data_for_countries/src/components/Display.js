import '../index'
const Display = ({ items }) => {
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
                        <li key={i}>{country.name.common}</li>
                    ))}
                </ul>
            </div>
        )
    } else {
        const country = items[0];
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital[0]}</p>
                <p>Area: {country.area}</p>
                
                <p><em>languages:</em></p>
                <ul>
                    {Object.values(country.languages).map((languageName, i) => (
                        <li key={i}>{languageName}</li>
                    ))}
                </ul>

                <div className="flag-container">
                    {country.flag}
                </div>
            </div>
        )
    }
}

export default Display