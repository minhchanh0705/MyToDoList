import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {done} from '../redux/actionCreator'


class Todo extends Component{
    
    render(){
        const {todo,done, id} = this.props.todo;
        const textDecorationLine = done ? 'line-through' :'none';
        return(
            <View style={styles.container}>
                
                <TouchableOpacity onPress={()=>this.props.done(id)}>
                    <Text style={{textDecorationLine}}>{todo}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default connect(null, {done})(Todo);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ccccff',
        paddingHorizontal:10,
        height:40,
        margin:20,
        justifyContent:'center'
    }
})
