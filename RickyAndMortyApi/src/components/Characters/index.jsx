import React from 'react'
import CharCards from '../CharCards'
import './styles.css'

function Characters({ characterList, setCharacterList }) {
  return (
    <main>
        <h1>Meus Personagens</h1>
        <ul>
            {characterList.map(char => (
                <CharCards
                    characterList={char}
                    setCharacterList={setCharacterList}
                />
            ))}
        </ul>
        
    </main>
  )
}

export default Characters