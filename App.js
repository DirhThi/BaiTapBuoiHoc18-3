
import React from 'react';
import type {Node} from 'react';
import { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';



const App = () => {
  const [UserName,setUserName ] = useState("");
  const [Password,setPassword ] = useState("");
  const [isLogined,setIsLogined ] = useState(false);

  function loginCheck(){
    if(UserName=='user' && Password=='123456')
    {
      setIsLogined(true);
    }
  }

  if(isLogined==true)
  {
    return(
      <Text>
        Login successed
      </Text>
    )
  }
  else{
    return (
      <View  style={[styles.container]}>
        <Text style={[styles.tbLogin]}>
          LOGIN
        </Text>
        <Text >
          User Name
          </Text>
        <TextInput  style={[styles.textip]} onChangeText={(text)=>setUserName(text)} value={UserName}   >
  
        </TextInput>
        <Text>
          Password
        </Text>
        <TextInput secureTextEntry={true} style={[styles.textip]} onChangeText={(text)=>setPassword(text)} value={Password}>
  
        </TextInput>
       
        <TouchableHighlight style={[styles.btn]}  onPress={loginCheck} >
          <Text>
            Login
          </Text>
        </TouchableHighlight>
        
      </View>
    );
  }
 
};

const styles=StyleSheet.create({
  container:{
    
    height:'100%',
    justifyContent:'center',
    paddingLeft:40,
    paddingRight:40,
    flexDirection:'column',
  },
  textip:{
    backgroundColor:'#d9d9d9',
    borderRadius:10,
    marginTop:40,
    marginBottom:40,
    minWidth:300,
  },
  tbLogin:{
  alignSelf:'center',
  fontWeight:'bold',
  fontSize:40,
  marginBottom:40,
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'#d9d9d9',
    width:100,
    height:40,
    marginTop:20,
    borderRadius:10,
  }
})

export default App;
