import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
  constructor(props){
	  super(props);
	  this.state = {
		  showSpecs: false,
		  bot: {}
	  }
  }
  

  handleClick = (bot) => {
	  this.setState({showSpecs: true, bot: bot})
  }

  viewAll = () => {
	  this.setState({showSpecs: false, bot: {}})
  }

  addBot = (bot) => {
	  this.props.addBot(bot);
	  this.setState({showSpecs: false, bot: {}})
  }

  render(){
	if(this.state.showSpecs === false){
  	  return (
  	    <div className="ui four column grid">
    	  	<div className="row">
    		  {this.props.bots.map(bot => <BotCard handleClick={this.handleClick} key={bot.id} bot={bot}/>)}
    		  Collection of all bots
    		</div>
  	    </div>
	  );
	}
	else {
		return (<BotSpecs bot={this.state.bot} viewAll={this.viewAll} addBot={this.addBot}/>)
	}
  }

};

export default BotCollection;
