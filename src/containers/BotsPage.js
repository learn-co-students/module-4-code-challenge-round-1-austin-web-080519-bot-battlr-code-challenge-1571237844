import React from "react";
import BotCollection from "./BotCollection.js";
import YourBotArmy from "./YourBotArmy.js";
const BOTSURL = `https://bot-battler-api.herokuapp.com/api/v1/bots`;
class BotsPage extends React.Component {
  constructor() {
    super();

    this.state = {
      bots: [],
      selectedBot: {}
    };
  }

  componentDidMount() {
    fetch(BOTSURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          bots: data
        });
      });
  }
  handleClick = selected => {
    this.setState({
      selectedBot: selected
    });
  };
  render() {
    return (
      <div>
        <ul>
          <BotCollection
            bots={this.state.bots}
            handleClick={this.handleClick}
          />
        </ul>
        <YourBotArmy selectedBot={this.state.selectedBot} />
      </div>
    );
  }
}

export default BotsPage;
