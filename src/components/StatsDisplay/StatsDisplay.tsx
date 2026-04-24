import React from 'react'
import type { StatsDisplayProps } from '../../types'
import CharacterCounter from '../CharacterCounter/CharacterCounter'

const StatsDisplay: React.FC<StatsDisplayProps> =({stats, showReadingTime})=> {
  return (
    <div className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    <div>
      <p>Characters</p>
      {stats.characterCount}
      </div>
    <div>
      <p>Words</p>
      {stats.wordCount}

        <CharacterCounter/>
    </div>
    <div>
      <h6>Reading Time</h6>
      {stats.readingTime}
    </div>
    </div>
  )
}

export default StatsDisplay