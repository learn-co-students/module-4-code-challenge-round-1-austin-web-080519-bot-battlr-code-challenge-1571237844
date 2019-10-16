import React, { Component } from 'react';

class FilterBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='filter-bar'>
                <form>
                    Filter By Class: <select onChange={ (event) => this.props.handleFilterBots(event, 'bot_class')}>
                        <option value='All'>All</option>
                        <option value='Defender'>Defender</option>
                        <option value='Assault'>Assault</option>
                        <option value='Support'>Support</option>
                    </select>

                    Sort By: <select onChange={ (event) => this.props.handleSortBots(event)}>
                        <option value='name'>Name</option>                       
                        <option value='health'>Health</option>
                        <option value='damage'>Damage</option>
                        <option value='armor'>Armor</option>
                    </select>
                </form>
            </div>
         );
    }
}
 
export default FilterBar;