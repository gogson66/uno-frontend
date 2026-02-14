import "./Card.css"

const Card = ({card, onClick, clickable=true}) => {

  if (!card) return <div>Error</div>
  const imagePath = `/cards/${card.color}_${card.value}.jpg` 
  console.log(imagePath)
  return (
    <div className={`card ${card.playable ? "clickable playable" : "disabled"}`} onClick={ clickable ? onClick : undefined}>
      <img src={imagePath}/>
    </div>
  )
}

export default Card
