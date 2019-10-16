import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="ui four column grid">
        <div className="row">Collection of all bots</div>

        {this.props.botData.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={this.props.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default BotCollection;
