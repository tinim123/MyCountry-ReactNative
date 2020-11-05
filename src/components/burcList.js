import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {connect} from 'react-redux';
import BurcItem from './burcItem';


class BurcList extends Component{
renderItem({item}){
  return(
    <BurcItem burc={item}/>

  )
}
  render(){
const {burclar} =this.props;
    return(
      <View>
      <FlatList
       data={burclar}
       renderItem={this.renderItem}
       keyExtractor={(item)=>item.isbn}
      />
      </View>
    )
  }
}


const mapStateToProps= state =>{
  return{
    burclar:state.burclar
  }
}


export default connect(mapStateToProps)(BurcList);
