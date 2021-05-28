import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <React.Fragment>
        <View styles={styles.container}>
            <Image source={require('../../assets/v.png')} style={styles.img} />
        </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        width : '100%',
        height : '100%',
        alignItems: 'center',
        alignContent : 'center',
        justifyContent: 'center',
        width : window.innerWidth,
        height : window.innerHeight,
        backgroundColor : '#ccc'
    },
    img : {
        position : 'absolute',
        top : 50,
        left : 50
    }
});

export default Home;