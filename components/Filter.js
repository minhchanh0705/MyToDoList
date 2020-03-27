import React, {Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {showAll,showDone,showNeedDo} from '../redux/actionCreator'

class Filter extends Component{
    changeColorButton(button){
        if(this.props.myButton===button) return {color: '#99ccff'};
        return styles.buttonText
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.showAll()}>
                    <Text style={this.changeColorButton('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.showDone()}>
                    <Text style={this.changeColorButton('DONE')}>DONE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.showNeedDo()}>
                    <Text style={this.changeColorButton('NEED_DO')}>NEED DO</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStatetoProps(state){
    return{
        myButton: state.filterDisplay
    }
}
export default connect(mapStatetoProps,
    {showAll,showDone,showNeedDo})(Filter);
    
const styles = StyleSheet.create({
    container:{
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#b30000',
        flexDirection:'row', 
        flex:1

    },
    buttonText:{
        color:'#ffcc00'
    }
})




//   setFilterStatus(statusName){
//     this.props.dispatch({type: statusName});
//   }
//   render(){
//     return (
//       <View style={styles.container}>
//           <TouchableOpacity onPress={()=>this.setFilterStatus('SHOW_ALL')}>
//             <Text style={styles.buttonText}>SHOW ALL</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>this.setFilterStatus('DONE')}>
//             <Text style={styles.buttonText}>DONE</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>this.setFilterStatus('NEED_DO')}>
//             <Text style={styles.buttonText}>NEED DO</Text>
//           </TouchableOpacity>
//       </View>
//     );
//   }
// }

// // function mapStatetoProps(state){
// //     return{

// //     };
// // }

// const styles = StyleSheet.create({
//   container:{
//         backgroundColor:'#b30000',
//         flex:1,
//         flexDirection:'row',
//         justifyContent:'space-around',
//         alignItems:'center',

        
//     },
//     buttonText:{
//       color:'#ccccff',
//       fontWeight:'bold',
//       fontSize:17
//     }
// })


// export default connect()(Filter)