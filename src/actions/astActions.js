export const SELECT_BURC='select_burc';
export const DESELECT_BURC='deselect_burc';

export const selectBurc=(burc) =>{
  return{
    type:SELECT_BURC,
    payload:burc
  }
}

export const deselectBurc=()=>{
  return{
    type:DESELECT_BURC,
    payload:{}
  }
}
