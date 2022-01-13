/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 
 import {Cards} from './src/components/cards';
 
 import {StyleSheet, View, SafeAreaView} from 'react-native';
 
 const App: () => Node = () => {
   return (
     <SafeAreaView style={styles.container}>
       <Cards />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });
 
 export default App;
 