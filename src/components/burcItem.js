import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Card} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

 class BurcItem extends Component{

   onPressed(){
     const{burc, selected}=this.props;
    selected? this.props.deselectBurc()
    : this.props.selectBurc(burc);
   }
  render(){
    const{burc, selected}=this.props;
    const aciklama= selected?(
      <Text style={styles.aciklamaStyle}>{burc.description}</Text>
    ): null;
    return(
      <TouchableOpacity onPress={this.onPressed.bind(this)}
      style={styles.buttonWrapper}>
        <Card>
        <Text style={styles.titleDesign}>{burc.title}</Text>
        <Text style={styles.authorDesign}>{burc.author}</Text>
        </Card>
        {aciklama}
      </TouchableOpacity>
    )
  }
}
const styles=StyleSheet.create({
  titleDesign:{
    alignItems:'center',
    fontSize:16,
    color:'black',
    justifyContent:'center'
  },
  authorDesign:{
    opacity:0.5,
    fontSize:12
  },
  aciklamaStyle:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    opacity:0.5,
    borderWidth:1,
    borderRadius:10,
    borderColor:'gray',
    fontSize:13,
    paddingTop:3,
    paddingLeft:7,
    paddingRight:5,
    paddingBottom:10

  },
  buttonWrapper:{

  }
})

const mapStateToProps=(state, props)=>{
  const selected=state.selectedBurc
  && state.selectedBurc.isbn==props.burc.isbn;
  return{
    selected
  }
}

export default connect(mapStateToProps, actions)(BurcItem);
