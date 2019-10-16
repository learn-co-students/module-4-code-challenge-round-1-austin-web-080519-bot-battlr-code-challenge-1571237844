import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  handleClick = (bot) => {
    this.props.deleteBot(bot)
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          Your Bot Army
          <button className = "ui button fluid" onClick={this.props.clearAllBots}>Clear All Bots</button>
            {this.props.bots.map(bot => <BotCard handleClick={this.handleClick} key={bot.id} bot={bot}/>)}
            
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
