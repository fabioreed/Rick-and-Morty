// import './App.css'
import { useEffect, useState } from 'react'
import Characters from './components/Characters'
import { api } from './services/api'

function App() {
  const [ characterList, setCharacterList ] = useState([])

  useEffect(() => {
    async function loadCharacters() {
      try {
        const res = await api.get('character/')
        setCharacterList(res.data.results)
        // console.log(res.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    loadCharacters()
  }, [])

  return (
    <div className="App">
      <Characters characterList={characterList} />
    </div>
  )
}

export default App
