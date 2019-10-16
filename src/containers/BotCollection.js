import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

   displayBots = () => {
	  return this.props.bots.map( (bot, index) => <BotCard bot={bot} key={index} onClick={this.props.onClick}/>)
   }
  

  render() {
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{this.displayBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
