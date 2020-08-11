import React from 'react';
import Cardpanel from './cardpanel';
import store from '../store'

class Teampanel extends React.Component{
  constructor() {
    super();
    this.state = {
      counter: 0,
      selectedIndex:null
    }
  }
  handleTeam(index){
    this.setState({selectedIndex:index});
  }

  render() {
    const state = store.getState();
    let teamData = state.startGame;
    let selected = this.state.selectedIndex;
    let teamName = teamData[selected] ? teamData[selected].teamName : '';
    return(
      <div className="content_wrap">
        <aside className="sidebar">
          <div className="nav">
              <ul>
                {
                  teamData && teamData.length > 0 ?
                  teamData.map((item, index) => {
                    return(
                      <li key={index} className={selected === index ? 'active' : ''} onClick={()=>this.handleTeam(index)}>{item.teamName}</li>
                    )
                  }) : null 
                }
              </ul>
          </div>
        </aside>
        <div className="main_content">
            {
              selected !== null ?
                <Cardpanel index={this.state.selectedIndex} teamName={teamName} />
              : null
            }
        </div>
      </div>
    )
  }
}

export default Teampanel;
