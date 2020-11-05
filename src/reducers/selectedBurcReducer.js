import {SELECT_BURC, DESELECT_BURC} from '../actions';

export default(state={}, action) => {
  switch(action.type){
    case SELECT_BURC:
      return action.payload
    case DESELECT_BURC:
    return{}
    default:
       return state;
  }
}
