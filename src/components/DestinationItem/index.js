// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem

  return (
    <li className="user-card">
      <img src={imgUrl} className="destination-image" alt={name} />
      <p className="name-card">{name}</p>
    </li>
  )
}
export default DestinationItem
