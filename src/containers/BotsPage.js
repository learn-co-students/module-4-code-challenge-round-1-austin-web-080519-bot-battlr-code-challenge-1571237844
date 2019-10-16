import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

const botURL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  constructor() {
    super()

    this.state = {
      bots: [],
      myBotArmy: [],
      currentSelection: ""
    }
  }


  componentDidMount() {
    fetch(botURL)
    .then(resp => resp.json())
    .then(bots => {
      this.setState({ bots: bots })
    })
  }


  handleClick = (event) => {
    console.log(event.target.value)
	  // event.preventDefault();
    // this.setState({ currentArmy: (!this.state.currentArmy)})
    // could not get the props to send, therefore spent an hour debugging. yay me :)
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
        <YourBotArmy myBotArmy={this.state.myBotArmy} handleClick={this.props.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
