import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';


 export default function Getstarted() {
  
  return (
    
    <View style={styles.image}>
    <Image  source={require('../../images/Truck.png')}/>
    <View>
    <Text style={styles.text}>Manage Fleet</Text>
   <Text style={styles.text1}>Easily</Text>
    <Text style={styles.text2}> lorem ipsum dolar amit set</Text>
    <Text style={styles.text3}> lorem ipsum dolar amit set</Text>
   </View> 
   <View style={styles.hellostarted}>
   <Button 
    
    title="Get started"
    color={'#2871E6'}
    />
    </View>
  
   
  </View>
  );
  
}

const styles = StyleSheet.create({
  container:{

  },
  image: {
    paddingTop: 60,
    paddingLeft:30,
    height:400,
    Width:330
  
  },
  text:{
     
    
   // position: 'absolute',
    //width: 300,
    //height: 120,
    paddingTop: 48,
    paddingLeft: 48,
    paddingRight:47,
    fontFamily:'',
 
   // fontFamily: 'Raleway',
  
    fontStyle: 'normal',
    //fontWeight: 800,
    fontSize: 40,
    lineHeight: 47,
    textAlign:'center',
    color: '#0058DB',
  },
  text1:{
    paddingLeft: 48,
    paddingRight:47,
    //fontWeight: 800,
    fontSize: 40,
    lineHeight: 47,
    textAlign:'center',
    color: '#0058DB',
  },
  text2:{
    fontSize:20,
    paddingTop:10,
    paddingLeft:47,
    paddingRight:40
  },
  text3:{
   // paddingTop:10,
   fontSize:20,
    paddingLeft: 47,
    paddingRight:40
  },
  hellostarted:{
    paddingTop:40,
    paddingRight:100,
    paddingLeft:90,
    padding: 50
    
  }
}); 


