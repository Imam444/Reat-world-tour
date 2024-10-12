import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';


const Countries = () => {
    const [countries,setCountries] =useState([]);
    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitCountry = country =>{
        console.log(country)
    }
    return (
        <div  >
            <h3>Countries:{countries.length}</h3>
            <div>
                    <h3>Mark Visit</h3>
                    <ul>

                    </ul>
            </div>
            <div className="countries-container">
                {
                    countries.map(country =><Country
                         key={country.cca3} 
                         handleVisitCountry ={handleVisitCountry}
                        country={country} 
                    ></Country>)
                   
                }
            </div>
        </div>
    );
};

export default Countries;