import {useState} from 'react'
import type { CharacterCounterProps } from "../../types"

import { TextInput } from "../TextInput/TextInput"
import StatsDisplay from "../StatsDisplay/StatsDisplay"

const CharacterCounter: React.FC<CharacterCounterProps> = ( {minWords, maxWords})=> {

  const [inputValue, setInputValue] = useState('')

  //created a handler function to take in a string and set that text to the new state value
  const handleInputChange= (text:string)=>{
    console.log("Input value:", text);
    setInputValue(text)
  }
  const statsStart = {
     characterCount: inputValue.length,
    wordCount: inputValue.split(/\s+/).filter(Boolean).length,
    readingTime: inputValue.split(/\s+/).filter(Boolean).length/250* 60
  }

  return (
    <>
     <TextInput onTextChange={handleInputChange} />
     <StatsDisplay stats={statsStart} showReadingTime={true}/>

      <div className="grid grid-cols-2 grid-rows-1 gap-0">
        
         {minWords && <p>{`Min: ${minWords}`}</p>}
         {maxWords && <p>{`Max: ${maxWords}`}</p>}
     </div>
    </>
  )
  // return (
  //  
  // )
}

export default CharacterCounter