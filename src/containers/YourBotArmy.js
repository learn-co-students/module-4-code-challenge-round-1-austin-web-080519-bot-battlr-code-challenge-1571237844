import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  addBot = () => {
    console.log("adding bot");
  };

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
            {/* <BotCard handleClick={this.addBot} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
