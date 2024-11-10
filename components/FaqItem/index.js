import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    clickStatus: false,
  }

  toggleClickStatus = () => {
    this.setState(prevState => ({
      clickStatus: !prevState.clickStatus,
    }))
  }

  getIcon = () => {
    const {clickStatus} = this.state
    return clickStatus
      ? [
          'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
          'minus',
        ]
      : [
          'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
          'plus',
        ]
  }

  render() {
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const {clickStatus} = this.state

    const [iconUrl, icon] = this.getIcon()

    return (
      <li className="faqItem">
        <div className="question-row">
          <h2>{questionText}</h2>
          <button
            type="button"
            className="click-icon"
            onClick={this.toggleClickStatus}
          >
            <img src={iconUrl} alt={icon} />
          </button>
        </div>
        {clickStatus && (
          <div className="answer-row">
            <hr />
            <p>{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
