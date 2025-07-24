import React, { useEffect, useState } from 'react'
import CountryCard from '../CountryCard'
export default function AllCountry() {

    const [Country,setCountry]=useState([])
    // const [Input,setInput]=useState()
    // setInput(Input.target.value)
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

  return (
    <>
        <div>
            <input type="text" placeholder='Search for a country' />

            {/* <form action=""> */}
                <select name="" id="" >
                    <option value="">Filter by Region</option>
                    <option value="">Africa</option>
                    <option value="">America</option>
                    <option value="">Asia</option>
                    <option value="">Europe</option>

                </select>
            {/* </form> */}
        </div>


        <div>
            <div>
                {Country.map((item,index) => (
                  
                   <CountryCard key={index}  information={item}/>

                 ))}
               
            </div>
        </div>
    </>
  )
}
