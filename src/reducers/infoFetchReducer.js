import{
  NAME_CHANGE,
  LASTNAME_CHANGE,
  SEND_INFO,

} from '../actions'
const INITIAL_STATE={
  firstName:'',
  lastName:'',
}

export default(state=INITIAL_STATE, action)=>{
  switch (action.type) {
    case NAME_CHANGE:
      return{...state, firstName:action.payload}
    case LASTNAME_CHANGE:
      return{...state, lastName:action.payload}
    case SEND_INFO:
      return{...state, ...INITIAL_STATE}

    default:
      return state;
  }
}
