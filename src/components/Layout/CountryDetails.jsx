import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../UI/Loader';
import { NavLink } from 'react-router-dom';

const CountryDetails = () => {

    const params = useParams();
    const name = params.id;

    const [country, setCountry] = useState();
    const [isPending, startTransition] = useTransition();

    useEffect(() => {

        const fetchCountry = async (name) => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`,);
            const data = await response.json();
            console.log(data);

            startTransition(() => {
                setCountry(data[0]);
            })
        }

        fetchCountry(name);
    }, []);

    if (isPending) {
        return <Loader />
    }

    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box">
                {country && (
                    <div className="country-image grid grid-two-cols">
                        {console.log(country)}
                        <img
                            src={country.flags.svg}
                            alt={country.flags.alt}
                        />
                        <div className="country-content">
                            <div className="card-title">{country.name.official}</div>
                            <div className="infoContainer">
                                <p>
                                    <span className="card-description">Native Names: </span>
                                    {Object.keys(country.name.nativeName)
                                        .map((value) => country.name.nativeName[value].common)
                                        .join(", ")
                                    }
                                </p>
                                <p>
                                    <span className="card-description">Population: </span>
                                    {country.population.toLocaleString()}
                                </p>
                                <p>
                                    <span className="card-description">Region: </span>
                                    {country.region}
                                </p>
                                <p>
                                    <span className="card-description">Sub Region: </span>
                                    {country.subregion}
                                </p>
                                <p>
                                    <span className="card-description">Capital: </span>
                                    {country.capital[0]}
                                </p>
                                <p>
                                    <span className="card-description">Top Level Domain: </span>
                                    {country.tld[0]}
                                </p>
                                <p>
                                    <span className="card-description">Currencies: </span>
                                    {Object.keys(country.currencies)
                                        .map((value) => country.currencies[value].name)
                                        .join(", ")
                                    }
                                </p>
                                <p>
                                    <span className="card-description">Languages: </span>
                                    {Object.keys(country.languages)
                                        .map((value) => country.languages[value])
                                        .join(", ")
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="country-card-backBtn">
                    <NavLink className="backBtn" to={"/country"}>
                        <button>Go Back</button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default CountryDetails