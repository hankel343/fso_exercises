
const CountryInfo = ({ name, capitals, area, languages, flag, isVisible }) => {

    if (isVisible) {
        return (
            <div>
                <h1>{name.common}</h1>
    
                <p>Capitals: </p>
                <ul> 
                    {Object.values(capitals).map((capitals, i) => (
                        <li key={i}>{capitals}</li>
                    ))}
                </ul>
    
                <p>Area: {area}</p>
    
                <p><b>languages:</b></p>
                <ul>
                    {Object.values(languages).map((languageName, i) => (
                        <li key={i}>{languageName}</li>
                    ))}
                </ul>
    
                <div className="flag-container">
                    {flag}
                </div>
    
            </div>
        )
    } else {
        return (<></>)
    }
}

export default CountryInfo