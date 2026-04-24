import type { CharacterCounterProps } from "../../types"

const CharacterCounter: React.FC<CharacterCounterProps> = ( {minWords, maxWords})=> {
  return (
    <div>
        
        <p>{`Min: ${minWords}`}</p>
        <p>{`Max: ${maxWords}`}</p>
    </div>
  )
}

export default CharacterCounter