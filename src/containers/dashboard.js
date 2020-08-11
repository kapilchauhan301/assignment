import React from 'react';
import Teampanel from './teampanel';
import store from '../store';
import { createTeam } from '../actions/action';

class Dashboard extends React.Component{
  constructor() {
    super();
    this.state = {
      counter: 0,
      selectType:'',
      selectName:'',
      tooltip:false
    }
  }
  submitForm(){
    let teamType = this.state.selectType;
    let teamName = this.state.selectName;
    if(teamType === '' || teamName === ''){
      this.setState({tooltip:true});
      let self = this;
      setTimeout(() => {
        self.setState({tooltip:false});
      }, 1500);
      return false;
    }
    let data = {teamType, teamName, user:[]};
    store.dispatch(createTeam(data));
    this.setState({selectType:'', selectName:''});
  }
  render() {
    return(
      <div className="wrapper">
          <header className="header clearfix">
              <div className="c_t_form">
                <div className="in_form f1">
                    <label>Select Type</label>
                    <select name="type" value={this.state.selectType} onChange={(e) => this.setState({selectType: e.target.value})} data-parse="uppercase" className="form-control">
                        <option value="">choose any</option>
                        <option value="teams">Teams</option>
                    </select>
                </div>
                <div className="in_form f1">
                    <label>Team Name</label>
                    <input type="" value={this.state.selectName} data-parse="uppercase" onChange={(e) => this.setState({selectName: e.target.value})} name="teamName" className="form-control" />
                </div>
                <div className="in_form f2">
                  <button className="btn-submit" onClick={() => this.submitForm()}>Send data!</button>
                </div>
              </div>
          </header>
          <Teampanel />
          {
            this.state.tooltip ? <div className="deletemesg2">select type or team name is empty</div> : null 
          }
      </div>
    )
  }
}
export default Dashboard;
