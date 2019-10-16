import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render() {
    const handleClick = this.props.handleClick;
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(function(bot) {
            return (
              <li>
                <BotCard bot={bot} handleClick={handleClick} />
              </li>
            );
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
