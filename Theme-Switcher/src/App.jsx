
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { useEffect, useState } from 'react'

function App() {
    const [themeMode,setTheme]=useState("light")

    const lightTheme = () =>{
      setTheme("light")
    }
    const darkTheme = () => {
      setTheme("dark")
    }

    //actual theme is changed 

    useEffect(
      ()=>{
        document.querySelector('html').classList.remove("dark","light")
        document.querySelector('html').classList.add(themeMode)
      },[themeMode]
    )

  return (

    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
