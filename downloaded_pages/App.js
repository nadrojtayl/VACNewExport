


import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Button, Picker, Switch, Image, Text, View } from 'react-native';
import FirstPage from './downloadedpages/FirstPage.js'
import Main from './downloadedpages/Main.js'
import Settings from './downloadedpages/Settings.js'
import Pause from './downloadedpages/Pause.js'
import End from './downloadedpages/End.js'
import appData from './global.js';
/*
EXPORT PROCESS

1. Click export in AppBuilder

2. Go through all the pages in the app, click export, and copy the page code into their own files in downloaded pages directory

3. Import pages. In the render function of class App, add if statements that wil render the pages if that.state.page is changed.

4. Fix errors (Adding quotation marks and semicolons where necessary). Go through every page code and replace 'goTo' with 'that.props.goTo'


5. Take the generated componentdidmount from the class and paste it over the App class's componentdidmount

6. Delete componentdidmount from generated classes

*/


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


//prettifier: https://www.prettifier.net/js/
class App extends React.Component {

constructor(props){
super(props);
this.state = {dbLinks:{}, loaded:false, page:"FirstPage"}
}

      componentDidMount(){
        
        var that = this;
        var dbLinks = "{}"
        Object.keys(dbLinks).forEach(function(key){
          that.connectToDatabase(dbLinks[key], key);
        })
      };



render(){ 

  var appData = this.state; var that = this; 

  
    if(that.state.page === "FirstPage"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <FirstPage goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></FirstPage>
          </View>
        )
    }



    


    if(that.state.page === "Main"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Main goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Main>
          </View>
        )
    }



    


    if(that.state.page === "Settings"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Settings goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Settings>
          </View>
        )
    }



    


    if(that.state.page === "Pause"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <Pause goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></Pause>
          </View>
        )
    }



    


    if(that.state.page === "End"){
        return(
          <View style = {{width:"100%",height:"100%"}}>
             <End goTo = {that.goTo.bind(that)} loaded = {that.state.loaded}></End>
          </View>
        )
    }



      

  

}

connectToDatabase(db_link,name){
      var that = this;
      that.state.dbLinks[name] = db_link;
      console.log(db_link)
      if(db_link === null || name === null){
        return
      }
      if(db_link.indexOf("google.com") !== -1){
         var schema = fetch(db_link, {
                  method: 'GET',
                  headers: {
                    "Content-Type": "application/json"
                  }
          }).then(async function(res){
            
 
           var res = await res.json();
           var cols = {};
           var data = res.feed.entry.map(convert_spreadsheet_data_to_obj);
           var output = {};
           data.forEach(function(cell){
            
            if(parseInt(cell.row) === 1){
              cols[cell.col] = cell.data;
            }
           })

          data.forEach(function(cell){
            if(output[cell.row] !== 1){
              if(output[cell.row] === undefined){
                output[cell.row] = {};
              }
              output[cell.row][cols[cell.col]] = cell.data;
            }
          })

          var data_arr = Object.keys(output).map(function(key){
            return output[key]
          })
              
          data_arr.shift();
    
            window[name] = data_arr;
            global[name] = data_arr;
            that.forceUpdate();
            that.setState({dbLinks:that.state.dbLinks, loaded:true})
          


          })

        return;
      }

      
      
      var schema = fetch(db_link, {
                  method: 'GET',
                  headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  }
        }).then(async function(res){
          console.log("SAVED");
          res = await res.json();
          window[name] = res;
          global[name] = res;
          that.forceUpdate();
          that.setState({dbLinks:that.state.dbLinks, loaded:true})
        


        })
    }

  goTo(pageName){
    console.log("page");
    console.log(pageName);
    this.setState({page:pageName})
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;







  