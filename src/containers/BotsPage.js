import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import FilterBar from '../components/FilterBar'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    allBots: [],
    yourBots: [],
    specViewBot: undefined
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allBots: data
      })
    })
  }

  enlistBot = (bot) => {
    this.setState({
      yourBots: [...this.state.yourBots, bot]
    })
  }

  dismissBot = (bot) => {
    let yourNewArmy = this.state.yourBots
    let index = this.state.yourBots.indexOf(bot)
    yourNewArmy.splice(index, 1)
    this.setState({
      yourBots: yourNewArmy
    })
  }

  renderBotSpecs = (bot) => {
      this.setState({
        specViewBot: bot
      })
  }

  handleBotCardClick = (bot) => {
    this.state.yourBots.includes(bot) ? this.dismissBot(bot) : this.renderBotSpecs(bot)
  }

  goBack = () => {
    this.setState({
      specViewBot: undefined
    })
  }

  handleFilterBots = (event, type) => {
    let value = event.target.value
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      if(value === 'All') {
        return data
      } else {
        return data.filter( (bot) => bot[type] === value)
      }
    })
    .then(data => {
      this.setState({
        allBots: data
      })
    })
  }

  handleSortBots = (event) => {
    let value = event.target.value
    let unsortedBots = this.state.allBots
    unsortedBots.sort( (a, b) => b[value] - a[value])
    console.log(unsortedBots)
    this.setState({
      allBots : unsortedBots
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy yourBots={this.state.yourBots} handleBotCardClick={this.handleBotCardClick} />
        <FilterBar handleFilterBots={this.handleFilterBots} handleSortBots={this.handleSortBots} />
        {this.state.specViewBot ? <BotSpecs bot={this.state.specViewBot} goBack={this.goBack} enlistBot={this.enlistBot} /> : <BotCollection allBots={this.state.allBots} handleBotCardClick={this.handleBotCardClick} /> }
      </div>
    );
  }
}

export default BotsPage;
