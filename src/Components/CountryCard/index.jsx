import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({ information }) {
  const { name, population, region, capital, flag } = information

  return (
    <>
      {/* کل کارت */}
      <Link to={`/country/${name}`} elements={'./CountryDetail'}>
      <div className="w-[300px] flex flex-col rounded-xl  overflow-hidden shadow-xl bg-white dark:bg-darkBlue transition-all duration-300">
        <img className="object-cover h-[180px] w-full" src={flag} alt={name} />
        <div className="py-8 px-5 text-veryDarkBlueText dark:text-pureWhite">
          <p className="font-bold text-[17px] py-2">{name}</p>
          <p className="text-darkGray dark:text-pureWhite">
            <span className="font-semibold text-veryDarkBlueText dark:text-pureWhite">Population: </span>
            {population.toLocaleString()}
          </p>

          <p className="text-darkGray dark:text-pureWhite">
            <span className="font-semibold text-veryDarkBlueText dark:text-pureWhite">Region: </span>
            {region}
          </p>

          <p className="text-darkGray dark:text-pureWhite">
            <span className="font-semibold text-veryDarkBlueText dark:text-pureWhite">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
      </Link>
    </>
  )
}
