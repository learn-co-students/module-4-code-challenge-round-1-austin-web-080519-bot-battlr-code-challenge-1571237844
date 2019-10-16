import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botStateData: [],
    botClickID: []
  };

  botDataFetching() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(botData => {
        // console.log("this is my data", botData);
        this.setState({
          botStateData: botData
        });
      });
  }
  componentDidMount() {
    this.botDataFetching();
  }

  handleClick = bot => {
    // console.log("this is when i click a bot, what id i'll be given", botID);
    this.setState({
      botClickID: bot
    });
  };

  render() {
    // console.log("My current State after fetching", this.state.botStateData);
    // console.log(
    //   "My current StateID after clicking a bot",
    //   this.state.botClickID
    // );
    return (
      <div>
        <div>
          <YourBotArmy
            bot={this.state.botClickID}
            handleClick={this.handleClick}
          />
        </div>
        <div>
          <BotCollection
            botData={this.state.botStateData}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default BotsPage;
