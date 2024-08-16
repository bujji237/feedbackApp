import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {onEmojiClicked: false}

  onClickedImage = () => {
    this.setState({
      onEmojiClicked: true,
    })
  }

  render() {
    const {onEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    if (onEmojiClicked) {
      return (
        <div className="bg-container">
          <div className="box-container">
            <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
            <h1 className="info">Thank You!</h1>
            <p className="text">
              We will use your feedback to increase our customer sup
              performance.
            </p>
          </div>
        </div>
      )
    }
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="info">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="images-container">
            <li>
              <img
                src={emojis[0].imageUrl}
                className="emoji"
                alt={emojis[0].name}
                onClick={this.onClickedImage}
                key={emojis[0].id}
              />
            </li>
            <li>
              <img
                src={emojis[1].imageUrl}
                className="emoji"
                alt={emojis[1].name}
                onClick={this.onClickedImage}
                key={emojis[1].id}
              />
            </li>
            <li>
              <img
                src={emojis[2].imageUrl}
                className="emoji"
                alt={emojis[2].name}
                onClick={this.onClickedImage}
                key={emojis[2].id}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
