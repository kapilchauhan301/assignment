import React from 'react';
import { createUser, deleteUser } from '../actions/action';
import store from '../store';

class Cardpanel extends React.Component{
  constructor() {
    super();
    this.state = {
      counter: 0,
      userName:'',
      userDesc:'',
      tooltip:false,
      validmess:false,
      teamData:[],
      selectedIndex:null
    }
  }

  createUser(index){
    console.log(index);
    let userName = this.state.userName;
    let userDesc = this.state.userDesc;
    if(userName === '' || userDesc === ''){
      this.setState({validmess:true});
      let self = this;
      setTimeout(() => {
        self.setState({validmess:false});
      }, 1500);
      return false
    }
    let user = {userName, userDesc};
    store.dispatch(createUser(user, index));
    this.setState({userName:'', userDesc:''});
  }

  deleteUser(teamindia, index){
    console.log(index);
    store.dispatch(deleteUser(teamindia, index));
    this.setState({tooltip:true});
    let self = this;
    setTimeout(() => {
      self.setState({tooltip:false});
    }, 1000);
  }

  render() {
    let selectedIndex = this.props.index;
    let teamName = this.props.teamName;
    const state = store.getState();
    let teamData = state.startGame[selectedIndex].user;
    return(
      <div className="content_inn">
          <div className="main_title">
              <h3>{teamName}</h3>
          </div>
          <div className="card_panel">
              <div className="card_box">
                  <div className="field">
                      <label>Name</label>
                      <input type="text" onChange={(e) => this.setState({userName: e.target.value})} value={this.state.userName} placeholder="Enter here" />
                  </div>
                  <div className="field">
                      <label>Description</label>
                      <textarea onChange={(e) => this.setState({userDesc: e.target.value})} value={this.state.userDesc}></textarea>
                  </div>
                  <div className="btn_c">
                      <button onClick={()=>this.createUser(selectedIndex)}>Create User +</button>
                  </div>
              </div>
              {
                teamData && teamData.length > 0 ?
                teamData.map((item, index) => {
                  return(
                    <div key={index} className="card_box">
                      <div className="field">
                          <label>Name</label>
                          <input type="text" readOnly value={item.userName} placeholder="Enter here" />
                      </div>
                      <div className="field">
                          <label>Description</label>
                          <textarea value={item.userDesc} readOnly></textarea>
                      </div>
                      <div className="d_btn_c">
                          <button onClick={()=>this.deleteUser(selectedIndex, index)}>Delete User -</button>
                      </div>
                  </div>
                  )
                }) : null
              }
          </div>
          {
            this.state.tooltip ? <div className="deletemesg2">User deleted</div> : null 
          }
          {
            this.state.validmess ? <div className="deletemesg">username or description is empty</div> : null 
          }
          
      </div>
    )
  }
}

export default Cardpanel;
