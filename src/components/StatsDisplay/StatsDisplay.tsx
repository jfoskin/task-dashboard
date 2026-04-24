
import type { StatsDisplayProps } from '../../types'

const StatsDisplay: React.FC<StatsDisplayProps> =({stats, showReadingTime})=> {

  
  return (
    <div className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 grid grid-cols-3 grid-rows-2 gap-0">
    <div>
      <p>Characters</p>
      {stats.characterCount}
      </div>
    <div>
      <p>Words</p>
      {stats.wordCount}
    </div>
    <div>
      <h6>Reading Time</h6>
      {showReadingTime && <p>{stats.readingTime}</p>}
    </div>
    </div>
  )
}

export default StatsDisplay