import React, { useState } from 'react'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'
console.log(React)

function App() {
  const [inputValue, setInputValue] = useState('')

  //created a handler function to take in a string and set that text to the new state value
  const handleInputChange= (text:string)=>{
    console.log("Input value:", text);
    setInputValue(text)
  }
  const statsStart = {
     characterCount: inputValue.length,
    wordCount: inputValue.split(' ').filter(Boolean).length,
    readingTime: 5 
  }

  return (
    <>
     <TextInput onTextChange={handleInputChange} />
     <StatsDisplay stats={statsStart} showReadingTime={true}/>
    </>
  )
}

export default App
