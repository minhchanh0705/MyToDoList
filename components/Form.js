import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity,TextInput} from 'react-native';
import {connect} from 'react-redux'
import {addTodo, adding} from '../redux/actionCreator'

class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            todo:'',
        };
        this.addTodo=this.addTodo.bind(this);
    }
    addTodo(){
        const {todo} = this.state;
        this.props.addTodo(todo);
        this.props.adding()
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                placeholder='Add Todo' 
                value={this.state} 
                style={styles.addInput} 
                onChangeText={text=>this.setState({todo:text})}/>
                <TouchableOpacity onPress={this.addTodo}>
                    <Text style={styles.btnAdd}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default connect(null, {addTodo, adding})(Form);

const styles = StyleSheet.create({
    container:{
        alignSelf:'stretch',
        alignItems:'center',        
        justifyContent:'center'
    },
    addInput:{
        margin:10,
        backgroundColor:'#d9d9d9',
        height:40,
        width:300,
        paddingHorizontal:10

    },
    btnAdd:{
        color:'#ffff99',
        fontSize:20,
        
    }
})

