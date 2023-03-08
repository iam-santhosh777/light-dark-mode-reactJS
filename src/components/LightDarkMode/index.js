// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  onClickChange = () => {
    this.setState(prevState => ({
      isLightMode: !prevState.isLightMode,
    }))
  }

  render() {
    const {isLightMode} = this.state
    const modeClassName = isLightMode ? 'light-mode' : 'dark-mode'
    const buttonText = isLightMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`${modeClassName}`}>
          <h1>Click To Change Mode</h1>
          <button type="button" onClick={this.onClickChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
