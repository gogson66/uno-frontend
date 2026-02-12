import React from 'react'
import Card from './Card'
import './PlayerHand.css'


const PlayerHand = ({player, cards, onPlay}) => {
  return (
    <div>
      <h3>{player}</h3>
      <div className="hand">
        {cards.map(c => (<Card key={c.id} card={c} onClick={() => onPlay(c.id)}></Card>))}
      </div>
    </div>
  )
}

export default PlayerHand
