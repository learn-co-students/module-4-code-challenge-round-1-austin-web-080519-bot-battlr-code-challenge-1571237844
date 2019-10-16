import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {
    const allBots = this.props.botData;

    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          Collection of all bots
          {allBots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              name={bot.name}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
              class={bot.bot_class}
              catchphrase={bot.catchphrase}
              avatar_url={bot.avatar_url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BotCollection;
