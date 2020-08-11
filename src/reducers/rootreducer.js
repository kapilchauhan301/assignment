const init = {
  name: 'kapil',
  flag : false,
  startGame: [],
  user:[]
};

const rootReducer = (state = init, action) => {
    switch (action.type) {
      case 'FORMSUBMIT':
        return state = {
          ...state,
          startGame : [...state.startGame, action.payload]
        };
      case 'CREATEUSER':
        let prevState = {...state};
        prevState.startGame[action.index]['user'] = [...prevState.startGame[action.index]['user'], action.payload];
        return prevState;
      case 'DELETEUSER':
        let prevState2 = {...state};
        let deleteobj = prevState2.startGame[action.teamindia]['user'];
        deleteobj = deleteobj.filter((item, index) => index !== action.index);
        prevState2.startGame[action.teamindia]['user'] = [...deleteobj];
        return prevState2;
      default:
        return state
    }
}

export default rootReducer;