import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    yourBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      this.setState({
        allBots: data
      })
    })
  }

  enlistOrDismissBot = (bot) => {
    if(this.state.yourBots.includes(bot)) {
      let yourNewArmy = this.state.yourBots
      let index = this.state.yourBots.indexOf(bot)
      yourNewArmy.splice(index, 1)
      this.setState({
        yourBots: yourNewArmy
      })
    } else {
      this.setState({
        yourBots: [...this.state.yourBots, bot]
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} enlistOrDismissBot={this.enlistOrDismissBot} />
        <BotCollection allBots={this.state.allBots} enlistOrDismissBot={this.enlistOrDismissBot}/>
      </div>
    );
  }

}

export default BotsPage;
