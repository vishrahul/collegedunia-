import React from 'react';
import {
    Image,
  Text,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      dataSource: "",
      isLoading: true,
    };
  }
componentDidMount(){
    
  const url = "https://randomuser.me/api/?results=10";
  fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        dataSource: res.results,
        isLoading: false,
      });
    })
    .catch(error => {
      console.log("get data error:" + error);
    });
}




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

