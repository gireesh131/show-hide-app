// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  showFirstname = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  showLastname = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="sub-container">
          <div>
            <button
              type="button"
              onClick={this.showFirstname}
              className="button"
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              onClick={this.showLastname}
              className="button"
            >
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
