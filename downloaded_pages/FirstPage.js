
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



 class {FirstPage} extends React.Component {
     

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
      
      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.imgur.com/aGSr19H.gif","backgroundColor":"transparent","top":"31.75%","left":"35.36%","resizeMode":"contain","alignItems":null,"height":"30%","width":"30%"}]}
        source = {{uri:"https://i.imgur.com/aGSr19H.gif"}}
      >
      </Image>
<TextInput
       style= {{"top":"30.64%","left":"36.87%","borderColor":"black"}}
        value={that.state["FirstPageinput1"]}
        onChangeText={function(val){that.setState({FirstPageinput1: val});  
       }
       }
        />
<Text
          style= {{"top":"26.99%","left":"47.57%","innerText":"'Name'"}}
        > {'Name'} </Text>
        

      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.imgur.com/cQs1QEn.png","top":"16.06%","left":"10.19%","backgroundColor":"transparent","resizeMode":"contain"}]}
        source = {{uri:"https://i.imgur.com/cQs1QEn.png"}}
      >
      </Image>

      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.imgur.com/KbSqCge.jpg","resizeMode":"contain","top":"-55.45%","left":"0.2%","fontSize":null,"width":"100%","backgroundColor":"transparent","zIndex":-10000}]}
        source = {{uri:"https://i.imgur.com/KbSqCge.jpg"}}
      >
      </Image>

      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://cdn1.vectorstock.com/i/1000x1000/52/10/game-scene-pixelated-background-vector-12125210.jpg","height":"100%","width":"100%","top":"15.42%","left":"0.3%","backgroundColor":"transparent","zIndex":-10000000}]}
        source = {{uri:"https://cdn1.vectorstock.com/i/1000x1000/52/10/game-scene-pixelated-background-vector-12125210.jpg"}}
      >
      </Image>
 <TouchableOpacity
          
          onPress = { function(){(; that.forceUpdate(); }}  
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
            position:'absolute',top:0,left:0, backgroundColor:'#8fd158', alignItems:'center',justifyContent:'center', height: "7%",  title:'Test', borderColor: 'gray', color:'black', borderRadius:15, borderWidth: 1},{"top":"57.3%","left":"40.3%","innerText":"'Settings'"}]}
        ><Text>{'Settings'}</Text>
        </TouchableOpacity>

      <Image
        style= {[{width:"20%",height:"20%"}, {"source":"https://i.imgur.com/KbSqCge.jpg","top":"-3.51%","left":"0.08%","width":"100%"}]}
        source = {{uri:"https://i.imgur.com/KbSqCge.jpg"}}
      >
      </Image>
        </View>
        )
      }
    }
    
      

    }
    export default FirstPage; 



  