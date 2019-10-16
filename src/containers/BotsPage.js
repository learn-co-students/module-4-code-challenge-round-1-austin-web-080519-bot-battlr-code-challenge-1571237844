import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount() {
    this.fetchBots();
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(botsResponse => {
      this.setState({
        bots: botsResponse
      })
    })
  }

  onClick = (enlistedBot) => {
    if (!this.state.botArmy.includes(enlistedBot)) {
      this.setState({
        botArmy: [...this.state.botArmy, enlistedBot]
      })
    } else if (this.state.botArmy.includes(enlistedBot)) {
      const botIndex = this.state.botArmy.indexOf(enlistedBot);
      const botArmyArray = this.state.botArmy;
      botArmyArray.splice(botIndex, 1);
      this.setState({
        botArmy: botArmyArray
      })
    }
  }

  render() {
    // console.log(this.state.botArmy)
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} onClick={this.onClick}/>
        <BotCollection bots={this.state.bots} onClick={this.onClick}/>
      </div>
    );
  }

}

export default BotsPage;
