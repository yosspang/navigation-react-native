import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        height:'80%',
        width: '70%',
        //backgroundColor:'turquoise'
    },
    inputContainer:{
        /* alignItems: 'flex-start',
        flexDirection: 'row' */
        
    },
    beratTinggiContainer:{
        flexDirection:'row',
        width: '100%',
        marginVertical: 20
    },
    textBerat:{
        marginRight:30
    },
    textTinggi:{
        marginRight:66
    },
    inputContainer:{
        flexDirection:'column'
    },
    textInput:{
        /* width: '30%',
        height: '20%', */
        width: 100,
        height: 50,
        marginRight: 10,
        backgroundColor:'green'
    },
    hasilContainer:{
        alignItems: 'center',
        marginVertical: '10%'
    },
    hasilBMIContainer:{
        marginVertical: 10,
        flexDirection: 'row'
    },
    angkaHasilBMIContainer:{
        alignItems: 'center',
        width: 50,
        height: 40,
        backgroundColor: 'blue'
    },
    imageContainer:{
        marginVertical: 5,
        height: 180,
        width: 110, 
        
        alignItems:'center'
     },
    keteranganContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 20,
        height: 50,
        width: 150,
        backgroundColor: 'yellow'
    }
});

export default styles;