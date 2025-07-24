// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import Header from '../../Components/Header'

// export default function CountryDetail({ DarkMode, setDarkMode }) {
//   const { name } = useParams()
//   const [detailCountry, setDetailCountry] = useState(null)
//   const [allCountries, setAllCountries] = useState([])

//   // گرفتن جزئیات کشور بر اساس نام
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch(`http://localhost:3002/countries?name=${name}`)
//         const data = await res.json()
//         if (data.length > 0) {
//           setDetailCountry(data[0])
//         }
//       } catch (error) {
//         console.error(error)
//       }
//     })()
//   }, [name])

//   // گرفتن لیست کامل کشورها برای نمایش نام مرزها
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await fetch(`http://localhost:3002/countries`)
//         const data = await res.json()
//         setAllCountries(data)
//       } catch (error) {
//         console.error(error)
//       }
//     })()
//   }, [])

//   if (!detailCountry) {
//     return <p className="text-center text-lg mt-10">Loading...</p>
//   }

//   const borderCountries = detailCountry.borders
//     ? allCountries.filter(country => detailCountry.borders.includes(country.alpha3Code))
//     : []

//   return (
//     <>
//       <Header  DarkMode={DarkMode} setDarkMode={setDarkMode} />
//        <div className="w-full min-h-screen py-8 gap-5 flex flex-col bg-pureWhite dark:bg-veryDarkBlueBg transition-all">

//       {/* <div className="w-[100%] lg:mt-16 mt-2 py-8 gap-5 flex flex-col dark:bg-darkBlue transition-all"> */}
//         <Link to={'/'}>
//          <button className={`w-[100px] h-[35px] rounded-[5px] lg:ms-20 ms-4 border-2 shadow-xl ${DarkMode ? 'text-pureWhite bg-darkBlue ' : 'bg-pureWhite text-veryDarkBlueText '}`}>Back</button>
//         </Link>
//         <div  className='flex w-[90%]  items-center m-auto gap-10 lg:flex-nowrap flex-wrap'>

//         {/* چپ - پرچم */}
//         <div className="flex m-auto lg:w-[550px] lg:h-[380px] w-[450px] object-cover ">
//           <img
//             src={detailCountry.flag}
//             alt={detailCountry.name}
//             className="lg:w-[100%]  w-[100%]  rounded-lg shadow-md"
//           />
//         </div>

//         {/* راست - اطلاعات کشور */}
//         <div className="flex gap-0 lg:gap-9 items-start flex-wrap lg:flex-nowrap ps-5">
//           <div className="flex flex-col gap-2">
//             <h2
//               className={`text-2xl font-bold ${
//                 DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'
//               }`}
//             >
//               {detailCountry.name}
//             </h2>
//             <p className={`${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//               <strong>Native Name:</strong> {detailCountry.nativeName}
//             </p>
//             <p className={`${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//               <strong>Population:</strong> {detailCountry.population.toLocaleString()}
//             </p>
//             <p className={`${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//               <strong>Region:</strong> {detailCountry.region}
//             </p>
//             <p className={`${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//               <strong>Subregion:</strong> {detailCountry.subregion}
//             </p>
//             <p className={`${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//               <strong>Capital : </strong> {detailCountry.capital}
//             </p>
//           </div>

//           <div className="flex flex-col  gap-2 py-10">
//             <p className={`${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//               <strong>Top Level Domain : </strong> {detailCountry.topLevelDomain?.join(', ')}
//             </p>

//             {detailCountry.currencies && (
//               <p className={`${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//                 <strong>Currencies : </strong>{' '}
//                 {detailCountry.currencies.map((c) => c.name).join(', ')}
//               </p>
//             )}

//             {detailCountry.languages && (
//               <p className={`${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//                 <strong>Languages : </strong>{' '}
//                 {detailCountry.languages.map((l) => l.name).join(', ')}
//               </p>
//             )}

//             {/* نمایش مرزها */}
//             <div className='flex items-center gap-5 flex-wrap'>
//               <strong className={` ${DarkMode ? 'text-pureWhite' : 'text-veryDarkBlueText'}`}>
//                 Border Countries: 
//               </strong>
//               {borderCountries.length > 0 ? (
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {borderCountries.map((borderCountry) => (
//                     <span
//                       key={borderCountry.alpha3Code}
//                       className="px-3 py-1 rounded shadow bg-gray-300 dark:bg-gray-700 cursor-pointer"
//                     >
//                       {borderCountry.name}
//                     </span>
//                   ))}
//                 </div>
//               ) : (
//                 <p className={`${DarkMode ? 'text-pureWhite' : 'text-darkGray'}`}>
//                   No border countries.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//         </div>

//       </div>
//     </>
//   )
// }










import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../Components/Header'

export default function CountryDetail({ DarkMode, setDarkMode }) {
  const { name } = useParams()
  const [detailCountry, setDetailCountry] = useState(null)
  const [allCountries, setAllCountries] = useState([])

  // گرفتن جزئیات کشور
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3002/countries?name=${name}`)
        const data = await res.json()
        if (data.length > 0) setDetailCountry(data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [name])

  // گرفتن همه کشورها برای مرزها
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3002/countries`)
        const data = await res.json()
        setAllCountries(data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  if (!detailCountry) {
    return <p className="text-center text-lg mt-10">Loading...</p>
  }

  const borderCountries = detailCountry.borders
    ? allCountries.filter((c) => detailCountry.borders.includes(c.alpha3Code))
    : []

  return (
    <>
      <Header DarkMode={DarkMode} setDarkMode={setDarkMode} />

      <div className="w-full  lg:mt-10 mt-2 py-8 gap-5 flex flex-col bg-pureWhite dark:bg-veryDarkBlueBg transition-all">
        <Link to={'/'}>
          <button className="w-[100px] h-[35px] rounded-[5px] lg:ms-20 ms-4 border-2 shadow-xl bg-pureWhite text-veryDarkBlueText dark:bg-darkBlue dark:text-pureWhite">
            Back
          </button>
        </Link>

        <div className="flex w-[90%] items-center m-auto gap-10 lg:flex-nowrap flex-wrap">
          {/* پرچم */}
          <div className="flex m-auto lg:w-[550px] lg:h-[380px] w-[450px] object-cover">
            <img
              src={detailCountry.flag}
              alt={detailCountry.name}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* اطلاعات */}
          <div className="flex gap-0 lg:gap-9 items-start flex-wrap lg:flex-nowrap ps-5">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-veryDarkBlueText dark:text-pureWhite">
                {detailCountry.name}
              </h2>
              <p className="text-veryDarkBlueText dark:text-pureWhite">
                <strong>Native Name:</strong> {detailCountry.nativeName}
              </p>
              <p className="text-veryDarkBlueText dark:text-pureWhite">
                <strong>Population:</strong> {detailCountry.population.toLocaleString()}
              </p>
              <p className="text-veryDarkBlueText dark:text-pureWhite">
                <strong>Region:</strong> {detailCountry.region}
              </p>
              <p className="text-veryDarkBlueText dark:text-pureWhite">
                <strong>Subregion:</strong> {detailCountry.subregion}
              </p>
              <p className="text-veryDarkBlueText dark:text-pureWhite">
                <strong>Capital:</strong> {detailCountry.capital}
              </p>
            </div>

            <div className="flex flex-col gap-2 py-10">
              <p className="text-veryDarkBlueText dark:text-pureWhite">
                <strong>Top Level Domain:</strong> {detailCountry.topLevelDomain?.join(', ')}
              </p>

              {detailCountry.currencies && (
                <p className="text-veryDarkBlueText dark:text-pureWhite">
                  <strong>Currencies:</strong>{' '}
                  {detailCountry.currencies.map((c) => c.name).join(', ')}
                </p>
              )}

              {detailCountry.languages && (
                <p className="text-veryDarkBlueText dark:text-pureWhite">
                  <strong>Languages:</strong>{' '}
                  {detailCountry.languages.map((l) => l.name).join(', ')}
                </p>
              )}

              <div className="flex items-center gap-5 flex-wrap">
                <strong className="text-veryDarkBlueText dark:text-pureWhite">
                  Border Countries:
                </strong>
                {borderCountries.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {borderCountries.map((b) => (
                      <span
                        key={b.alpha3Code}
                        className="px-3 py-1 rounded shadow bg-gray-300 dark:bg-gray-700 text-sm"
                      >
                        {b.name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-darkGray dark:text-pureWhite">No border countries.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
