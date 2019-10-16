import React from "react";
import BotCard from "../components/BotCard";
import { timingSafeEqual } from "crypto";

class BotCollection extends React.Component {
  //your code here
  renderBotCards = () => {
	  return this.props.allBots.map( (bot, index) => {
		return <BotCard key={index} bot={bot} handleBotCardClick={this.props.handleBotCardClick}/>
	  })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			  {this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
