import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {adding} from '../redux/actionCreator'

class Header extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.btnAdd}>  </Text>
                <Text style={styles.header}>ToDo List</Text>
                {/* <TouchableOpacity onPress={this.btnAddTodo.bind(this)}> */}
                <TouchableOpacity onPress={()=>this.props.adding()}>
                    <Text style={styles.btnAdd}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#0000cc',
        flexDirection:'row',    
        paddingHorizontal:15,   
        flex:1,
    },
    header:{
        fontWeight:'bold',
        fontSize:25, 
        color: '#ff0000',
        alignItems:'center'
    },
    btnAdd:{
        color:'#ffcc00',
        fontSize:30,
        // fontWeight:'bold',
    }
})

export default connect(null, {adding})(Header);