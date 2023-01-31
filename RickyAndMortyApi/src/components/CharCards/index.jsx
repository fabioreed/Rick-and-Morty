import React from 'react'
import './styles.css'

function CharCards({ characterList }) {
  return (
    <div>
        <li className={characterList.status === 'Alive' ? 'card-green' : 'card-red'}>
            <img src={characterList.image} alt={characterList.name} />
            <h3>{characterList.name}</h3>
            <span>{characterList.location.name}</span>
            <p>{characterList.status}</p>
        </li>
    </div>
  )
}

export default CharCards