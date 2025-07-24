import React from 'react'

export default function CountryCard({information}) {
 const {name,population,region,capital,flag }=information
  return (
    <>
    {/* کل کارت  */}
      <div className='flex bg-slate-600 w-9'>
        <h1 className="text-3xl text-blue-500 font-bold underline">
  Tailwind is working!
</h1>

        <div className=''>
        <img src={flag} alt={name} />
        </div>
        <div>
           <p className='bg-slate-800 w-100'>{name}</p> 
           <p className='text-red-600 bg-amber-300 '>{population}</p> 
           <p>{region}</p>
           <p>{capital}</p>
        </div>
      </div>
    </>
  )
}
