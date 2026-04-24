import './App.css'
import CharacterCounter from './components/CharacterCounter/CharacterCounter'


function App() {
  
  return (
    <>
     <CharacterCounter minWords={25} maxWords={2000}/>
    </>
  )
}

export default App
