import React from 'react'

const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleRegionChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    const handleSortCountries = (value) => {
        console.log(value);
        const sortCountries = [...countries].sort((a, b) => {
            console.log(a)
            console.log(b)
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common);
        })
        setCountries(sortCountries);
    }

    return (
        <section className='section-searchFilter container'>
            <div>
                <input
                    type="text"
                    placeholder='Search...'
                    value={search}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button onClick={() => handleSortCountries("asc")}>Asc</button>
            </div>

            <div>
                <button onClick={() => handleSortCountries("des")}>Desc</button>
            </div>

            <div>
                <select className='select-section' value={filter} onChange={handleRegionChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default SearchFilter