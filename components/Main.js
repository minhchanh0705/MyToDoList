import React, {Component} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Todo from './Todo'
import Header from './Header'
import Filter from './Filter'
import Form from './Form'
class Main extends Component{
  showListByStatus(){
    const{myFilter, myArrTodos} = this.props
      if(myFilter==='DONE') return myArrTodos.filter(e=>e.done);
      if(myFilter==='NEED_DO') return myArrTodos.filter(e=>!e.done);
      return myArrTodos;
  }
  render(){
    return(
      <View style={styles.container}>
        <Header />
       
        <View style={{flex:10}}>
        {this.props.myAdding ?<Form />:null}
          <FlatList
            data={this.showListByStatus()}
            renderItem={({item})=><Todo todo={item}/>}
            keyExtractor={item=>item.id+''}
          />
        </View>
        <Filter />
      </View>
    );
  }
}
function mapStatetoProps(state){
  return{
    myArrTodos: state.arrTodos,
    myFilter: state.filterDisplay,
    myAdding: state.adding,
  };
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#5bbe01',
    flex:1
  }
})

export default connect(mapStatetoProps)(Main);