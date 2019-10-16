import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderYourBotArmyCards = () => {
    return this.props.yourBots.map( (bot, index) => {
      return <BotCard bot={bot} key={index} enlistOrDismissBot={this.props.enlistOrDismissBot}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderYourBotArmyCards()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
