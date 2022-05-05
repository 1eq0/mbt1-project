import React,{useState,useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';

import { theme } from "./../../styles/colors.js"; 

export default function Result({navigation,route}){
    const data = route.params
  
    const oneRM = (w,r) => {
      let best = 0
      
      if (r >= 12)  
          best = w / (0.7)
      else if (r === 11)
          best = w / (0.73)
      else if (r == 10)
          best = w / (0.75)
      else if (r == 9
  )        best = w / (0.77)
      else if (r == 8
  )        best = w / (0.80)
      else if (r == 7
  )        best = w / (0.83)
      else if (r == 6
  )        best = w / (0.85)
      else if (r == 5
  )        best = w / (0.87)
      else if (r == 4
  )        best = w / (0.90)
      else if (r == 3
  )        best = w / (0.93)
      else if (r == 2
  )        best = w / (0.95)
      else if (r == 1
  )        best = w
  
      return Math.round(best)
    }
  
    const jsonToServer = () => {
      const result = {
        event : data.ex_event,
        weight : data.weight,
        reps : data.reps,
        volume : data.weight * data.reps,
        oneRM : oneRM(data.weight, data.reps)
      }
      json = JSON.stringify(result);
  
      fetch(`${defURL}/result`,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: json
      });
    }
  
    return(
      <View style={styles.container}>
        <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text>UserName</Text>
        </View>
        <View style={{...styles.repBox,flex:1}}>
          <Text style={styles.repText}>Event : {data.ex_event}</Text>
          <Text style={styles.repText}>Weight : {data.weight}</Text>
          <Text style={styles.repText}>REPS : {data.reps}</Text>
          <Text style={styles.repText}>Volume : {data.weight * data.reps}</Text>
          <Text style={styles.repText}>Estimated 1RM : {oneRM(data.weight,data.reps)}</Text>
        </View>
        <TouchableOpacity style={styles.submit} onPress={jsonToServer}>
          <Text style={styles.submit__text}>SAVE</Text>
        </TouchableOpacity>
      </View>
    )
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
      flex:0.2,
      backgroundColor:"white",
      justifyContent:"center",
      alignItems:"center",
      borderRadius:50,
    },
    btnText:{
      fontSize:38,
      fontWeight:"500"
    },
    repBox:{
      flex:0.2,
      width:"90%",
      borderRadius:20,
      justifyContent:"center",
      alignItems:"flex-start",
      padding:20,
      marginVertical:20,
      backgroundColor: theme.grey
    },
    repText:{
      fontSize:18,
    },
    submit:{
      flex:0.05,
      width:"90%",
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:20,
      marginBottom:20,
      borderRadius:20,
      backgroundColor:"navy"
    },
    submit__text:{
      fontSize:20,
      color:"white",
      fontWeight:"600",
    },
  });
  