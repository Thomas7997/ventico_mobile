import * as React from 'react';
import { Button, Title } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { sendACOn, sendACOff } from '../actions/http';
import { connect } from 'react-redux';

const Activation = ({ isLoading, success, on, sendACOn, sendACOff }) => {
    console.log(isLoading, success, on);
  
    return (
    <React.Fragment>
        <View styles={styles.container}>
            <View styles={styles.blank}>
                <Text></Text>
            </View>
            <View style={styles.centeredItem}>
                <View styles={styles.item}>
                    <Button mode="contained" color="#606060" onPress={sendACOn}>ON</Button>
                </View>
                <Text></Text>
                <View styles={styles.item}>
                    <Button mode="contained" color="#BBBBBB" onPress={sendACOff}>OFF</Button>
                </View>
            </View>
        </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        width : window.outerWidth,
        height : window.outerHeight,
        backgroundColor : '#000'
    },
    centeredItem : {
        width : '100%',
        textAlign : 'center',
        alignItems : 'center',
        paddingBottom : 200,
        paddingTop: 200
    },
    item : {
        width : '100%',
        paddingBottom : 10,
        paddingTop : 10
    }
});

const mapStateToProps = state => ({
    isLoading : state.http.isLoading,
    on : state.http.on,
    success : state.http.success
});

export default connect(mapStateToProps, { sendACOff, sendACOn })(Activation);