import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import BotSpecs from '../components/BotSpecs'
import Search from '../components/Search'

class BotsPage extends React.Component {

  state = {
    bots: [],
    botArmy: [],
    specsClickedStatus: false,
    selectedBot: {},
    searchInput: ""
  }

  // Fetches bots when component mounts
  componentDidMount() {
    this.fetchBots();
  }

  // Fetches bots from api and lists them
  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(botsResponse => {
      const filteredBots = botsResponse.filter( bot => bot.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
      this.setState({
        bots: filteredBots
      })
    })
  }

  // Callback function that will update search input, which then filters the bots collection
  onSearch = (input) => {
    this.setState({
      searchInput: input
    })
    this.fetchBots();
  }

  // Event handler that adds bot to army on enlist button click
  onEnlist = (enlistedBot) => {
    if (!this.state.botArmy.includes(enlistedBot)) {
      this.setState({
        botArmy: [...this.state.botArmy, enlistedBot]
      })
    }
  }

  // Event handler that removes bot from army when clicked, otherwise will render BotSpecs
  onClick = (selectedBot) => {
    if (this.state.botArmy.includes(selectedBot)) {
      const botIndex = this.state.botArmy.indexOf(selectedBot);
      const botArmyArray = this.state.botArmy;
      botArmyArray.splice(botIndex, 1);
      this.setState({
        botArmy: botArmyArray
      })
    } else {
      this.setState({
        specsClickedStatus: true,
        selectedBot: selectedBot
      })
    }
  }

  // Event handler that goes back to list of bots on back button click
  onBack = () => {
    this.setState({
      specsClickedStatus: false
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} onClick={this.onClick}/>
        <Search onSearch={this.onSearch}/>
        {this.state.specsClickedStatus ? 
        <BotSpecs onEnlist={this.onEnlist} onBack={this.onBack} bot={this.state.selectedBot}/> :
        <BotCollection bots={this.state.bots} onClick={this.onClick}/> }
      </div>
    );
  }

}

export default BotsPage;
