import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Display from './components/Display'
import  CountryService  from './services/CountryService'

const App = () => {
  const [prefix, setPrefix] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [countryList, setCountryList] = useState([])

  useEffect(() => {
    console.log("useEffect()");
    CountryService
      .getAll()
      .then(res => {
        console.log("useEffect promise resolved", res);
        setCountryList(res)
      })
      .catch(err => {
        console.log("Error fetching country data: ", err);
      })
  }, [])

  useEffect(() => {
    setFilteredCountries(filterByName(prefix));
  }, [prefix, countryList])

  const handleprefixChange = (event) => {
    console.log(event.target.value);
    setPrefix(event.target.value);
  }

  const filterByName = (prefix) => {
    return countryList.filter(c => {
        return c.name.common.toLowerCase().includes(prefix.toLowerCase());
      });
  }

  return (
    <div>
      <p>find countries:</p>
      <input value={prefix} onChange={handleprefixChange} />
      <Display items={filteredCountries}/>
    </div>
  )
}

export default App