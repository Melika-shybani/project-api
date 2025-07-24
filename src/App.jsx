import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

export default function App() {
  const [DarkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (DarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [DarkMode])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home DarkMode={DarkMode} setDarkMode={setDarkMode} />}
        />
        <Route
          path="/country/:name"
          element={<CountryDetail DarkMode={DarkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
