import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  handleClick = (bot) => {
		  this.props.addBot(bot)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => <BotCard handleClick={this.handleClick} key={bot.id} bot={bot}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
