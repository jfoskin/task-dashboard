import { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'

function App() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange= (text:string)=>{
    console.log("Input value:", text);
    setInputValue(text)
  }

  const statsStart = {
     characterCount: 0,
    wordCount: 0,
    readingTime: 5 
  }

  return (
    <>
     <h1>hello</h1>
     <TextInput onTextChange={handleInputChange}/>
     <StatsDisplay stats={statsStart}/>
    </>
  )
}

export default App
