import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Image
} from 'react-native';
import styles from './Styles';

class HitungBMI extends Component{
    state={tinggi:null,berat:null,bmi:null}
    hitungBMI=()=>{
        let berat=parseInt(this.state.berat)
        let tinggi=parseInt(this.state.tinggi)/100
        let hasilBMI=Number((berat/(tinggi*tinggi)).toFixed(2))
        this.setState({bmi:hasilBMI})
        if(hasilBMI<18.5){
            this.setState({
                keterangan:'Kekurangan berat badan',
                gambar:<Image source={require('./assets/kurus.png')}/>
            })
        }else if((hasilBMI>=18.5) && (hasilBMI<25)){
            this.setState({
                keterangan:'Normal (ideal)',
                gambar:<Image source={require('./assets/normal.png')}/>
            })
        }else if((hasilBMI>=25)&&(hasilBMI<30)){
            this.setState({
                keterangan:'Kelebihan berat badan',
                gambar:<Image source={require('./assets/gemuk.png')}/>
            })
        }else if((hasilBMI>=30)){
            this.setState({
                keterangan:'Kegemukan (Obesitas)',
                gambar:<Image source={require('./assets/obesitas.png')}/>
            })
        }else{
            this.setState({keterangan:'input error'})
        }
        console.log(this.state)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.beratTinggiContainer}>
                        <Text style={styles.textBerat}>Berat Badan</Text>
                        <TextInput style={styles.textInput} onChangeText={(input_berat)=>this.setState({berat:input_berat})}/>
                        <Text>kg</Text>
                    </View>
                    <View style={styles.beratTinggiContainer}>
                        <Text style={styles.textTinggi}>Tinggi</Text>
                        <TextInput style={styles.textInput} onChangeText={(input_tinggi)=>this.setState({tinggi:input_tinggi})}/>
                        <Text>cm</Text>
                    </View>
                </View>
                <Button title="hitung BMI" onPress={()=>{this.hitungBMI()}}/>
                <View style={styles.hasilContainer}>
                    <View style={styles.hasilBMIContainer}>
                        <Text>BMI Anda: </Text>
                        <View style={styles.angkaHasilBMIContainer}>
                            <Text>{this.state.bmi}</Text>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        {this.state.gambar}
                    </View>
                    <View style={styles.keteranganContainer}>
                        <Text>{this.state.keterangan}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default HitungBMI;