import React, { useEffect, useState, useTransition } from 'react';
import Loader from '../components/UI/Loader';
import CountryCard from '../components/Layout/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';

const Country = () => {

  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  }

  const filterCountries = countries.filter(
    (country) => {
      return searchCountry(country) && filterRegion(country);
    })

  useEffect(() => {

    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags",);
      const data = await response.json();
      console.log(data);

      startTransition(() => {
        setCountries(data);
      })
    }

    fetchCountries();
  }, []);

  if (isPending) {
    return <Loader />
  }

  return (
    <section className="country-section">

      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className='grid grid-four-cols'>
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />
        })}
      </ul>
    </section>
  )
}

export default Country