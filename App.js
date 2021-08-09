import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createAppStackNavigator} from 'react-navigation-stack'


export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
);
}


const AppStackNavigator = createAppStackNavigator(
  {
    Home:{
      screen : HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Details:{
      screen: DetailsScreen
    }
  },
  {
   initialRouteName: "Home" 
  }
);

const AppContainer = createAppContainer(AppStackNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
