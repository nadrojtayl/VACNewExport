
import React from 'react';
import Multiplier from './Multiplier.js'
 import { TextInput, StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
      import appData from './global.js';
      function try_eval(input){
      try {
        var output =  eval(input);
        return output
      } catch(e){
        return input;
      }
     }
function filter(arr,phrase){
  return arr.filter(function(elem){
    return elem.indexOf(phrase) !== -1;
  })
}
function filter_list_of_objs(arr,key,filter_value){
  return arr.filter(function(obj){
    return obj[key] === filter_value
  })
}
function map_list_of_objs(arr,key){
  return arr.map(function(obj){
    return obj[key];
  })
}
function clone(arr){
  return arr.slice();
}
function convert_spreadsheet_data_to_obj(data){
  return {
    row: data.gs$cell.row,
    col: data.gs$cell.col,
    data: data.content.$t,
    type:data.content.type
  }
}
function unwrap_dynamically(value,default_value){
  if(default_value === undefined){
    default_value = "undefined"
  }
  return try_eval(value) === undefined ? (default_value):  try_eval(value) 
}



 class {Settings} extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","FirstPageinput1":"hhhhhhi","Settingsswitch0":true,"Settingsswitch2":true,"X":330,"Move":105,"Move2":1310,"Mainswitch78":true,"inter":4014,"inter2":0,"loaded":false,"dbLinks":{},"tomove2":365,"yeet":2666,"thet":2667,"enemies":[54,55,56,55,56,57,58],"spawned":4,"ended":true,"done":false}
    }
      
  


   

    render()
    { 
      var appData = this.state; var that = this; 
      
      if(!that.props.loaded){
        return(<View><Text>LOADING</Text></View>)
      }
      return (
      <View style = {{width:"100%", height:"100%", borderWidth:5, borderColor:"black", backgroundColor:"undefined"}}>
      <Switch
         value={that.state["Settingsswitch0"]}
         onValueChange={function(val){that.setState({Settingsswitch0: val})}}   
        style= {{"top":"39.49%","left":"44.72%"}}
        ></Switch>
<Text
          style= {{"top":"35.59%","left":"43.65%","innerText":"'Audio'"}}
        > {'Audio'} </Text>
        
<Text
          style= {{"top":"34.8%","left":"43.65%","innerText":"'Audio'"}}
        > {'Audio'} </Text>
        
<Text
          style= {{"top":"34.54%","left":"45.43%","innerText":"'\"Audio\"'"}}
        > {'"Audio"'} </Text>
        
 <TouchableOpacity
          
          onPress = { function(){]; that.forceUpdate(); }}  
          style= {[{
            shadowColor: 'rgba(0,0,0, .4)', // IOS
            shadowOffset: { height: 1, width: 1 }, // IOS
            shadowOpacity: 1, // IOS
            shadowRadius: 1, //IOS
            backgroundColor: '#fff',
            elevation: 2, // Android
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"innerText":"'To Home'","top":"50.3%","left":"40.97%"}]}
        ><Text>{'To Home'}</Text>
        </TouchableOpacity>
        </View>
        )
      }
    }
    
      

    }
    export default Settings; 



  