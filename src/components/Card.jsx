import "./Card.css"

const Card = ({card, onClick, clickable=true, back=false}) => {

  if (!card) return <div>Error</div>
  const imagePath = back ? `/cards/back.png` : `/cards/${card.color}_${card.value}.jpg` 
  console.log(imagePath)
  return (
    <div className={`card ${clickable ? "clickable" : "disabled"}`} onClick={ clickable ? onClick : undefined}>
      <img className={`${card.playable && "playable"}`} src={imagePath}/>
    </div>
  )
}

export default Card
