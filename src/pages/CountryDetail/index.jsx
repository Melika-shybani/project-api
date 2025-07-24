// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// export default function CountryDetail({ DarkMode }) {
//   const {name} = useParams()
//   const [DetailCountry,setDetailCountry] = useState(null)


//   useEffect(()=>{
//     (async()=>{
//       try {
//         const res = await fetch(`http://localhost:3002/countries?name=${name}`)
//         const data = await res.json()
//         console.log(data)
//         setDetailCountry(data)
//       } catch (error) {
        
//       }
//     })()
//   },[name])
//   return (
//     <>
//       <div className='w-[80%] bg-slate-600'>
//         {/* left */}
//         <div>
//           <img src={DetailCountry.flag} alt={DetailCountry.name} />
//         </div>
//         {/* right */}
//         <div>
//           <div className="flex-1 text-start space-y-3">
//         <h2 className={`text-3xl font-bold ${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>{detailCountry.name}</h2>
//         <p className={`${DarkMode ? 'text-pureWhite' : 'text-darkGray'}`}>
//           <strong>Capital:</strong> {detailCountry.capital}
//         </p>
//         <p className={`${DarkMode ? 'text-pureWhite' : 'text-darkGray'}`}>
//           <strong>Population:</strong> {detailCountry.population.toLocaleString()}
//         </p>
//         <p className={`${DarkMode ? 'text-pureWhite' : 'text-darkGray'}`}>
//           <strong>Region:</strong> {detailCountry.region}
//         </p>
//       </div>
//         </div>
//       </div> 
//     </>
//   )
// }





import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CountryDetail({ DarkMode }) {
  const { name } = useParams()
  const [detailCountry, setDetailCountry] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3002/countries?name=${name}`)
        const data = await res.json()
        console.log(data)
        console.log(name)
        if (data.length > 0) {
          setDetailCountry(data[0])
        }
      } catch (error) {
        console.error('Error fetching country detail:', error)
      }
    })()
  }, [name])

  if (!detailCountry) {
    return <p className="text-center text-lg mt-10">Loading...</p>
  }

  return (
    <div className='w-[80%] m-auto mt-10 flex flex-col lg:flex-row gap-10 bg-slate-400'>
      {/* left */}
      <div className='flex-1'>
        <img src={detailCountry.flag} alt={detailCountry.name} className='w-full h-auto rounded-lg shadow-md' />
      </div>

      {/* right */}
      <div className="flex-1 text-start space-y-3">
        <h2 className={`text-3xl font-bold ${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
          {detailCountry.name}
        </h2>
        <p className={`${DarkMode ? 'text-pureWhite' : 'text-darkGray'}`}>
          <strong>Capital:</strong> {detailCountry.capital}
        </p>
        <p className={`${DarkMode ? 'text-pureWhite' : 'text-darkGray'}`}>
          <strong>Population:</strong> {detailCountry.population.toLocaleString()}
        </p>
        <p className={`${DarkMode ? 'text-pureWhite' : 'text-darkGray'}`}>
          <strong>Region:</strong> {detailCountry.region}
        </p>
      </div>
    </div>
  )
}
