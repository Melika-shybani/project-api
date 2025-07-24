import React from 'react'
import Header from '../../Components/Header'
import AllCountry from '../../Components/AllCountry'

export default function Home({DarkMode,setDarkMode}) {
  return (
    <div className=' dark:bg-veryDarkBlueBg'>
        <Header DarkMode={DarkMode} setDarkMode={setDarkMode}/>
        <AllCountry DarkMode={DarkMode} setDarkMode={setDarkMode}/>

    </div>
  )
}
