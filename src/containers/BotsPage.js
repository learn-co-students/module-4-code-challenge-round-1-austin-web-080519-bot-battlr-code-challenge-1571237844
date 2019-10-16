import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

const botURL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super();
    this.state = {
      bots: [],
      myBots: []
    }
  }

  componentDidMount(){
    fetch(botURL)
    .then(res => res.json())
    .then(json => this.setState({bots: json}))
    .catch(error => console.log(error))

    console.log("im mount")
  }

  addBot = (bot) => {
    if(!this.state.myBots.includes(bot)){
      this.setState({myBots: [...this.state.myBots, bot]})
    }
  }

  deleteBot = (givenBot) => {
    let myNewBots = [...this.state.myBots];
    myNewBots = myNewBots.filter(bot => bot.id !== givenBot.id);
    this.setState({myBots: myNewBots})
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBots} deleteBot={this.deleteBot}/>
        <BotCollection bots={this.state.bots} addBot={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
