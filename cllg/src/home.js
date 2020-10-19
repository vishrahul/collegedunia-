import React from 'react';
import {
    Image,
  Text,
  StyleSheet,
  View,
  FlatList,

} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

var currentLatitude,currentLongitude

export default class HomeScreen extends React.Component {
  constructor() {
    super();

  

    this.state = {
      dataSource: "",
      isLoading: true,
      lat:"",
      lang:""

     

    };
  }



componentDidMount(){

  Geolocation.getCurrentPosition(
    //Will give you the current location
    (position) => {
       currentLongitude =JSON.stringify(position.coords.longitude);
  
       currentLatitude =  JSON.stringify(position.coords.latitude);

       console.log("sdsdsdsde33 "+ currentLongitude);
    
             
  const url = "https://api.openweathermap.org/data/2.5/onecall?lat="+currentLatitude+"&lon="+currentLongitude+"&exclude=%22%22&appid=89bdd2bafbb33bc69437154ec14b065b";

  fetch(url)
    .then(res => res.json())
    .then(res => {

  
      this.setState({
        dataSource:res.daily,
        isLoading: false,
      });
    })
    .catch(error => {
      console.log("get data error:" + error);
    });


        
     }, (error) => alert(error.message), { 
       enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
     }
  );
    
  //const url = "https://randomuser.me/api/?results=10";






}

renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'black',
        height: 0.9,
      }}
    />
  );



  


  render() {

    console.disableYellowBox = true;

    if (this.state.isLoading) {
      
        return (
          <View style={styles.forprogress}>
          <Image  
 source={require('./image/abc.gif')}
 style = {{width: 150, height: 150}} />
          
          </View>
        );
      }

    return (
        

      <View style={styles.container}>

     <View style={{height:"2%"}}></View>
    
     <Text style={{fontSize:22}}>City Name</Text>
     <View style={{height:"2%"}}></View>
     <Text style={{fontSize:15}}>Curent Latitude : {currentLatitude}</Text>
     <Text style={{fontSize:15}}>Curent Longitude : {currentLongitude}</Text>
     <View style={{height:"2%"}}></View>

    <Text style={{fontSize:12}}>According to Current Location forecast is below down...</Text>


     <View style={{height:"10%"}}></View>


        <FlatList
          style={styles.forflatlist}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.renderSeparator}
         renderItem={({ item }) => {
            return (



    <View >

<View style={{flexDirection:"row",    margin:"1%", }}>

        <Text style={styles.title_order}>
        {item.dt}          
        </Text>

      <Text  style={styles.title_order2} >{item.wind_speed}</Text>



</View> 



</View>



            )}}
        />
       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
    container: {
    flex: 1,
    width:"100%",

    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    fontSize:24
  },

  forprogress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ffffff"
  },


  title_order: {
    width:200,
    height:30,
    fontSize:15
},
title_order2: {
    width:200,
    fontSize:15
},


forflatlist: {
    flex: 1,

    margin:"1%"
  
    
  },

});






  render() {

    if (this.state.isLoading) {
      
        return (
          <View style={styles.forprogress}>
          <Image  
 source={require('./image/abc.gif')}
 style = {{width: 150, height: 150}} />
          
          </View>
        );
      }

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.forflatlist}
          data={this.state.dataSource}
         // renderItem={({item}) => this.renderItem(item)}


         renderItem={({ item, index }) => {
            return (



    <View>

<View style={{flexDirection:"row",backgroundColor:'#42A5F5'}}>

        <Text style={styles.title_order}>
        {item.name.title}          
        </Text>

      <Text  style={{ color: "black" }}> : {item.name.first}</Text>



</View> 



</View>



            )}}
        />
       
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize:24
  },
  forprogress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title_order: {
   
},


forflatlist: {
    flex: 1,
    margin:3
  
    
  },

});

