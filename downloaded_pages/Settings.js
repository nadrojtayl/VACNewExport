
import React, { Component } from "react";
import { Button, Picker, Switch, Image, ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import Calendar from "./Components/Calendar.js";
import AudioPlayer from 'react-native-play-audio';

var d = new Date();
var month = d.getMonth();
var day = d.getDate();
global.month = d.getMonth();
global.day = d.getDate();

function hasNumber(myString) {
  return /d/.test(myString);
}


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
global.inputs = {
  0:"This"
}




//READ ONLY API: format
//https://spreadsheets.google.com/feeds/cells/1P0tGuikrAg5ZGpC2fHxLY49Osp6nhwseK2DSr34HM-o/1/public/full?alt=json

function runWithInterval(script_string,interval){
  var script_string = script_string + "; window.FrontPage.forceUpdate(); window.updateAppData();"
    try{
        eval("function y(){"+script_string+"}")
        return setInterval(function(){ eval(script_string)},interval);
      } catch(e){
        alert("There was an error trying to run this!" + e);
      }
}

window.runWithInterval = runWithInterval;
runWithInterval = runWithInterval;

function try_eval(input){
  try {
    var output =  eval(input);
    return output
  } catch(e){
    return input;

  }
 }

 function filter_obj_by_phrase(arr,key_name,phrase){
  return arr.filter(function(elem){
    return elem[key_name].indexOf(phrase) !== -1;
  })
}


function filter(arr,phrase){
  return arr.filter(function(elem){
    return elem.indexOf(phrase) !== -1;
  })
}

window.filter = filter;

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

window.onlyUnique = onlyUnique;

function unique(arr){
  return arr.filter(onlyUnique);
}

window.unique = unique;

function unique_return_one_key(arr,key){
  return arr.map(function(obj){
    return obj[key]
  }).filter(onlyUnique);
}

function findInArrayOfObjects(array,search_obj) {
          
            for(var i = 0; i < array.length;i++){
              var match = true;

              Object.keys(search_obj).forEach(function(key){
                if(search_obj[key] !== array[i][key]){
                  match = false;
                }
              })

              if(match){
                return array[i];
              }

            }
            return false;
        }

  window.findInArrayOfObjects = findInArrayOfObjects;

window.unique_return_one_key = unique_return_one_key;

function filter_list_of_objs(arr,key,filter_value){
  return arr.filter(function(obj){
    return obj[key] === filter_value
  })
}

window.filter_list_of_objs = filter_list_of_objs;

function filter_list_of_objs_multiple_keys(arr,filter_object){
  return arr.filter(function(obj){
    var match = true;
    Object.keys(filter_object).forEach(function(key){
      if(filter_object[key] !== obj[key]){
        match = false;
      }
    })
    return match
  })
}

global.filter_list_of_objs_multiple_keys = filter_list_of_objs_multiple_keys;


function map_list_of_objs(arr,key){
  return arr.map(function(obj){
    return obj[key];
  })
}

global.map_list_of_objs = map_list_of_objs;

function clone(arr){
  return arr.slice();
}

global.audio = [];
function play(url){
  
AudioPlayer.prepare(url, () => {
  AudioPlayer.play();
    
  AudioPlayer.getDuration((duration) => {
    console.log(duration);
  });
  setInterval(() => {
    AudioPlayer.getCurrentTime((currentTime) => {
      console.log(currentTime);
    });
  }, 1000);
  AudioPlayer.stop();
  AudioPlayer.pause();
  AudioPlayer.setCurrentTime(50.5);
})



}

function pause(){
  window.audio.forEach(function(a){
    a.pause();
  })
}

global.play = play;
global.pause = pause;

global.clone = clone;

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
  var value = (try_eval(value) === undefined) ? (default_value):  try_eval(value);
  if(typeof value === "object"){return "Error: This is an object"}
  return value;
}




 class {Settings} extends React.Component {
     

    constructor(props)
    {
        super(props);
        this.state = {"key":"value","FirstPageinput1":"hhhhhhi","Settingsswitch0":true,"Settingsswitch2":true,"X":330,"Move":105,"Move2":1310,"Mainswitch78":true,"inter":4014,"inter2":0,"loaded":false,"dbLinks":{},"tomove2":365,"yeet":2666,"thet":2667,"enemies":[54,55,56,55,56,57,58],"spawned":4,"ended":true,"done":false}
    }
      
  


   

    render()
    { 
      var that = this; 
      
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



  