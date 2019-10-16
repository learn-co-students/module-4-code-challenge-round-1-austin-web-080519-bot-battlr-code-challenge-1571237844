import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: []
  };

  componentDidMount() {
    this.fetchBots();
  }

  fetchBots() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(botsData => {
        //get all bot data via fetch and check data
        //console.log("Fetch bots data = ", botsData);

        //set to state
        this.setState({
          bots: botsData
        });
      });
  }

  handleClick = e => {
    console.log("Handle Click event hit ", e);
    //render bots army
  };

  render() {
    //pass all bots to BotCollection only if bots array is > 0
    //console.log("Current BotsPage State", this.state.bots);
    return (
      <div>
        {this.state.bots.length > 0 && (
          <BotCollection
            bots={this.state.bots}
            handleClick={this.handleClick}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
