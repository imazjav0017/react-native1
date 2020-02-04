import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default class loginScreen extends Component
{
    handleLogin=()=>
    {
        this.props.navigation.navigate('home');
    }
    render()
    {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:25,fontWeight:"bold"}}>Login</Text>
        <View style={styles.inputContainer}>
        <TextInput placeholder="Enter Email" style={styles.input}/>
        <TextInput placeholder="Enter Password" style={styles.input}/>
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this.handleLogin}>
          <Text style={{color:"white"}}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
  const styles = StyleSheet.create({
    container:
    {
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#fff"
    },
    inputContainer:
    {
      width:"80%",
      marginTop:20
    },
    input:
    {
      width:"100%",
      borderWidth:1,
      borderColor:"#bbb",
      marginBottom:10,
    },
    loginBtn:
    {
      backgroundColor:"#34c6eb",
      width:"80%",
      alignItems:"center",
      height:35,
      justifyContent:"center"
    },
    bgImage:
    {
      width:"100%",
      flex:1
    }
  });
