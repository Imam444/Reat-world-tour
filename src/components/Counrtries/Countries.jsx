import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {
    const [countries,setCountries] =useState([]);
    const [visitedCountry, setVisitedCountry] = useState([])
    const [visitedFlags,setVisitedFlags] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitCountry = country =>{
        console.log('add visited the country')
       const newVisitedCountry =[...visitedCountry,country]
       setVisitedCountry(newVisitedCountry)
    }
    const handleVisitedFlags = flag =>{
    const newVisitedFlag =[...visitedFlags,flag]
    setVisitedFlags(newVisitedFlag)
    }
    return (
        <div  >
            <h3>Countries:{countries.length}</h3>
            <div>
                    <h3>Visited Country:{visitedCountry.length}</h3>
                    <ul>
                        {
                            visitedCountry.map(country => <li>{country.name.common}</li>)
                        }
                    </ul>
            </div>
            <div className="flag-container">
              {
                  visitedFlags.map((flag,idx) =><img key={idx} src={flag}></img>)
              }
            </div>
            <div className="countries-container">
                {
                    countries.map(country =><Country
                         key={country.cca3} 
                         handleVisitCountry ={handleVisitCountry}
                         handleVisitedFlags={handleVisitedFlags}
                        country={country} 
                    ></Country>)
                   
                }
            </div>
        </div>
    );
};

export default Countries;