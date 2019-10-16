import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //initialize component with props data of bots
  constructor(props) {
    super(props);
    this.state = {
      bots: props.bots
    };
  }

  render() {
    //check if data got passed through
    //console.log("Current BotsCollection State = ", this.state.bots);

    //pass data to BotCard to render individual cards, map through array
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.state.bots.map(bot => {
            return (
              <BotCard
                key={bot.id}
                bot={bot}
                handleClick={this.props.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BotCollection;
