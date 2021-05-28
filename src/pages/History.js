import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const History = () => {
  return (
    <React.Fragment>
        <View styles={styles}>
            <Text>
                History
            </Text>
        </View>
    </React.Fragment>
  );
};


const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        width : window.innerWidth,
        height : window.innerHeight,
        backgroundColor : '#ccc'
    }
});

export default History;