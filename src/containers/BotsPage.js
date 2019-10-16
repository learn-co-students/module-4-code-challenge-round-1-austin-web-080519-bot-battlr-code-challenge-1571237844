import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    botData: []
  };
  componentDidMount() {
    this.fetchBots();
  }

  fetchBots = () => {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          botData: data
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {/* put your components here */}
        <BotCollection botData={this.state.botData} />
        <YourBotArmy />
      </div>
    );
  }
}

export default BotsPage;
