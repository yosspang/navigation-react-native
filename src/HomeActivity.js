import React,{Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import HitungBMI from '../src1/HitungBMI';

class HomeActivity extends Component{
    static navigationOptions = {
        title: 'Home',
        headerStyle: {backgroundColor:'#03A9F4'},
        headerTintColor:'#fff',
        headerTitleStyle:{fontWeight:'bold'},
    };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Home Activity</Text>
                <Button title="Go to Profile Activity" onPress={()=>this.props.navigation.push("Profile")}/>
                <HitungBMI/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor:'#F5FCFF'
    },
    headerText:{
        fontSize:20, 
        textAlign:'center',
        margin:10, 
        fontWeight:'bold'
    }
});

export default HomeActivity;