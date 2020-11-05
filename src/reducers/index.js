import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import InfoReducer from './infoReducer';
import InfoFetchReducer from './infoFetchReducer';
import BurcReducer from './burcReducer';
import SelectedBurcReducer from './selectedBurcReducer';



export default combineReducers({
  auth:AuthReducer,
  info:InfoReducer,
infoForm:InfoFetchReducer,
burclar:BurcReducer,
selectedBurc: SelectedBurcReducer
})
