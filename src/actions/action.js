export const createTeam = payload => ({
  type: 'FORMSUBMIT', 
  payload
});

export const createUser = (payload, index) => ({
  type: 'CREATEUSER', 
  payload,
  index
});

export const deleteUser = (teamindia, index) => ({
  type: 'DELETEUSER', 
  teamindia,
  index
});

