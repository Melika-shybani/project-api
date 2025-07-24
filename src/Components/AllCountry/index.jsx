import React, { useEffect, useState } from 'react'
import CountryCard from '../CountryCard'
import { IoSearch } from "react-icons/io5";

export default function AllCountry({DarkMode}) {
    const [Country,setCountry]=useState([])
    const [searchInput, setSearchInput] = useState('');
    const [Region,setRegion]=useState()



    useEffect(()=>{
        (async()=>{
            try {
                const res= await fetch(`http://localhost:3002/countries`)
                const data=await res.json()
                console.log(data)
                setCountry(data)
            } catch (error) {
                
            }
        })()
    },[])

   const filteredCountries = Country.filter(item =>
   item.name.toLowerCase().includes(searchInput.toLowerCase()) &&
   (!Region || item.region.toLowerCase() === Region.toLowerCase())
);

  return (
    <>
        <div className='w-[92%] flex items-center justify-between m-auto p-4 flex-wrap  gap-5'>
            <div className="relative w-full max-w-md ">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                  <IoSearch/>
                </span>
                <input
                  type="text"
                  value={searchInput}
                  placeholder="Search for a country"
                  onChange={(e)=>{setSearchInput(e.target.value)}}
                  className={`w-full sm:w-[300px] pl-10 pr-4 py-3 outline-none rounded-md shadow-sm ${
                  DarkMode ? 'bg-darkBlue text-pureWhite' : 'bg-pureWhite text-veryDarkBlueText'
                  }`}
               />
            </div>

                <select onChange={(e)=>{setRegion(e.target.value)}} className={`py-3 px-6 shadow-lg  rounded-[5px] ${DarkMode ?'bg-darkBlue text-pureWhite':'bg-pureWhite text-veryDarkBlueText'}`} >
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>

                </select>

        </div>


        <div>

            <div className='flex gap-16  items-center w-[100%] justify-center flex-wrap  m-auto py-10'>
            
                {filteredCountries.map((item,index) => (
                    <CountryCard key={index}  information={item}/>
                 ))}
               
            </div>
        </div>
    </>
  )
}
