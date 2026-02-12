import "./Card.css"

const Card = ({card, onClick}) => {

  if (!card) return <div>Error</div>
  const imagePath = `/cards/${card.color}_${card.value}.jpg`
  console.log(imagePath)
  return (
    <div className="card" onClick={onClick}>
      <img src={imagePath}/>
    </div>
  )
}

export default Card
