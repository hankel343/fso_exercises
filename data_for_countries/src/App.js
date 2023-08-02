import axios from "axios"
import { useState } from "react"
import  CountryService  from './services/CountryService'

const App = () => {
  const [countries, setCountries] = useState('')

  const handleCountriesChange = (event) => {
    console.log(event.target.value);
    setCountries(event.target.value);

    CountryService
      .getCountry(countries)
      .then(res => {
        console.log("successfully retrieved: ", res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <p>find countries:</p>
      <input value={countries} onChange={handleCountriesChange} /> 
    </div>
  )
}

export default App