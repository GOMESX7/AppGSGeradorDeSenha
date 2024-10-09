import { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import {ModalPassword}  from '../../components/modal';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&* "

export function Home() {
   
  const[size,setSize] = useState(10)
  const[passwordValue,setPasswordValue] = useState()
  const[modalVisible,setModalVisible] = useState(false);

  // Função para gerar a senha aleatória

  function generatePassword(){
    
    let password = '';

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random()* n))
    }


     setPasswordValue(password)
     setModalVisible(true)
  }
  

  
  
  return (
    <View style={styles.container}>
      <Image  
      source={require("../../../assets/cade1.png")}
      style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
        style={{height:50}}
        minimumValue={8}
        maximumValue={25}
        maximumTrackTintColor='#ff0000'
        minimumTrackTintColor='#000'
        thumbTintColor='#392de9'
        value={size}
        onValueChange={ (value) => setSize(value.toFixed(0))}
        
        />

      </View>
      
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
      <Text style={styles.buttonText}> 
        Gerar Senha
      </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}></ModalPassword>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 20,
    width: 250,
    height: 250
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF", 
    borderRadius: 6,
    padding: 6
  },
  button:{
    backgroundColor: "#000",
    width:"80%",
    height:50,
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 8
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20,
  },
  title:{
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10
  }

});
