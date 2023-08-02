import { useState } from "react"

const App = () => {
  const [countries, setCountries] = useState('')

  const handleCountriesChange = (event) => {
    console.log(event.target.value);
    setCountries(event.target.value);
  }

  return (
    <div>
      <p>find countries:</p>
      <input value={countries} onChange={handleCountriesChange} /> 
    </div>
  )
}

export default App