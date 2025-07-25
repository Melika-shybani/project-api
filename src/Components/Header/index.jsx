import React from 'react'
// import {style} from './Header.module.css'
export default function Header({DarkMode,setDarkMode}) {

  return (
    <>
    <div className='flex justify-between  lg:px-16  px-8 py-5  shadow-xl'>

       <h2 className={`font-bold lg:text-[24px] xs:text-[20px] ${DarkMode ?'text-pureWhite':'text-veryDarkBlueText'}`}>where in the world?</h2>
       
       <button onClick={()=>{setDarkMode(!DarkMode)}}  className={DarkMode ?'text-pureWhite':'text-veryDarkBlueText'}>
        {DarkMode ? '☀ Light Mode' : '🌚 Dark Mode'} 
       </button>

    </div>
    </>
  )
}
