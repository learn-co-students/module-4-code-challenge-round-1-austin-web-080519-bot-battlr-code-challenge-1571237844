import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
	  super(props)

	  this.state = {
	  }
  }

  


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
			{this.props.bots.map((bot, index) => (
				<BotCard bot={bot} key={bot.id}/>
			))}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
