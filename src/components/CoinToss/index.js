// Write your code here
import {Component} from 'react'

import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    totalImage: headImg,
    headsCount: 0,
    tailsCount: 0,
  }
  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestheadsCount = headsCount
    let latestailsCount = tailsCount
    if (toss === 0) {
      tossImage = headImg
      latestheadsCount += 1
    } else {
      tossImage = tailsImg
      latestailsCount += 1
    }
    this.setState({
      totalImage: tossImage,
      headsCount: latestheadsCount,
      tailsCount: latestailsCount,
    })
  }
  render() {
    const {totalImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="main-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img className="image" src={totalImage} alt="toss result" />
          <button className="toss-button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="total-container">
            <p className="total-count">Total: {totalCount}</p>
            <p className="heads-count">Heads: {headsCount}</p>
            <p className="tails-count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
