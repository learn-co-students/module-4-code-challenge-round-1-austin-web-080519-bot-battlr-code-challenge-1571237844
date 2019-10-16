import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  displayBotArmy = () => {
    return this.props.botArmy.map( (bot, index) => <BotCard bot={bot} key={index} onClick={this.props.onClick}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.displayBotArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
