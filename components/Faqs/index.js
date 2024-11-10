import {Component} from 'react'
import FaqItem from '../FaqItem' // Ensure you import FaqItem component
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="background-container">
        <div className="white-background">
          <h1 className="heading">FAQS</h1>
          <div>
            <ul className="list-none">
              {faqsList.map(faq => (
                <FaqItem key={faq.id} faqDetails={faq} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
