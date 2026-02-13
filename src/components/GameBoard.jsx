import {useState, useEffect} from "react"
import { getGameState, playCard } from "../api/gameApi"
import PlayerHand from './PlayerHand'
import Card from './Card'
import Tallon from "./Tallon"
import './GameBoard.css'

const GameBoard = () => {

  const [gameState, setGameState] = useState(null)

  useEffect(() => {
    loadState()
  }, [])

  async function loadState() {
    const state = await getGameState()
    setGameState(state)
  }

  async function onPlay(cardId) {
    const newState = await playCard(cardId)
    setGameState(newState)
    console.log(`click ${cardId}`)
  }

  if (!gameState) return <div>Loading...</div>

  return (
    <div className="game-layout">
    <div className="game-board">
      <PlayerHand player={gameState.players[0].name} cards={gameState.players[0].cards} onPlay={onPlay}/>
      <Card card={gameState.frontCard} clickable={false}/>
      <PlayerHand player={gameState.players[1].name} cards={gameState.players[1].cards} onPlay={onPlay} />
    </div>
    <div className="discard-pile">
      <Tallon/>
    </div>
    </div>
  )
}

export default GameBoard
