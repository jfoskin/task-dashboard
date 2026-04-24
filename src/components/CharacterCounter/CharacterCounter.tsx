import type { CharacterCounterProps } from "../../types"

const CharacterCounter: React.FC<CharacterCounterProps> = ( {minWords, maxWords})=> {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-0">
        
        <p>{`Min: ${minWords}`}</p>
        <p>{`Max: ${maxWords}`}</p>
    </div>
  )
}

export default CharacterCounter