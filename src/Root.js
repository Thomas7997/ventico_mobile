import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Navigate from './pages/Navigate';

export default function App() {
  console.log(`WIDTH : ${Dimensions.get('window').width}`);

  return (
    <Fragment>
      <View style={styles.container}>
        <View>
          <Text>Ventico</Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.page}>
        <Navigate />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  page : {
    flex : 1,
    width : Math.trunc(Dimensions.get('window').width),
    height : Math.trunc(Dimensions.get('window').height)
  }
});
