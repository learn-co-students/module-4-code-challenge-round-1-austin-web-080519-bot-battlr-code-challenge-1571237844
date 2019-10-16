import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props) {
    super(props);

    // save data in state
    this.state = {
      bot: props.bot
    };
  }
  handleAddBot = () => {
    const bot = this.stae.bot.slice;
    let size = bot.length + 1;
    bot.push(size);
    this.setState({
      bot: bot
    });
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            <BotCard bot={this.props.bot} />
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
