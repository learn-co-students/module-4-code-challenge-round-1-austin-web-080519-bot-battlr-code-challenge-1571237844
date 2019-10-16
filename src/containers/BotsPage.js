import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'
import BotSpecs from '../components/BotSpecs.js'

const botURL = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  constructor(){
    super();
    this.state = {
      bots: [],
      myBots: [],
      bot: {},
      showSpecs: false
    }
  }

  componentDidMount(){
    fetch(botURL)
    .then(res => res.json())
    .then(json => this.setState({bots: json}))
    .catch(error => console.log(error))
  }

  addBot = (bot) => {
    if(!this.state.myBots.includes(bot)){
      this.setState({myBots: [...this.state.myBots, bot]});
    }
    this.setState({showSpecs: false, bot: {}});
  }

  deleteBot = (givenBot) => {
    let myNewBots = [...this.state.myBots];
    myNewBots = myNewBots.filter(bot => bot.id !== givenBot.id);
    this.setState({myBots: myNewBots})
  }
  
  clearAllBots = () => {
    let result = window.confirm("Are you sure you want to clear your bot army?");
    if(result){this.setState({myBots: []})};
  }

  viewSpecs = (bot) => {
    this.setState({showSpecs: true, bot: bot});
  }

  viewAll = () => {
	  this.setState({showSpecs: false, bot: {}});
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBots} deleteBot={this.deleteBot} clearAllBots = {this.clearAllBots}/>
        {this.state.showSpecs ? <BotSpecs viewAll={this.viewAll} addBot={this.addBot} bot={this.state.bot}/>: <BotCollection bots={this.state.bots} viewSpecs = {this.viewSpecs} />}
      </div>
    );
  }

}

export default BotsPage;
