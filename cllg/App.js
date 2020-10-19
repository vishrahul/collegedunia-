/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



// // showLastCommitMessageForThisLibrary.js
// import { create } from 'apisauce'

// // define the api
// const api = create({
//   baseURL: 'https://api.github.com',
//   headers: { Accept: 'application/vnd.github.v3+json' },
// })

// // start making calls
// api
//   .get('/repos/skellock/apisauce/commits')
//   .then(response => response.data[0].commit.message)
//   .then(console.log)

// // customizing headers per-request
// api.post('/users', { name: 'steve' }, { headers: { 'x-gigawatts': '1.21' } })

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
  
<ScrollView>
 
      <View style={styles.container}>


<Image  
 source={require('./src/image/abc.gif')}
 style = {{width: 150, height: 150}} />


</View>
</ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:"center"
  }
 
});

export default App;
