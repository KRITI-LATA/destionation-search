// Write your code here
import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem'

class DestionationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading-text">Destination Search</h1>
        <div className="search-card-container">
          <input
            type="search"
            className="search-text"
            placeholder="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
        </div>
        <ul className="list-container">
          {searchResult.map(eachItem => (
            <DestinationItem destinationItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestionationSearch
