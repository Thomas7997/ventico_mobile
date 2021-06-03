import * as React from 'react';
import { Button, Title } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import { sendAC1On, sendAC1Off, sendAC2On, sendAC2Off } from '../actions/http';
import { connect } from 'react-redux';

const Activation = ({ isLoading, success, on, sendAC1On, sendAC1Off, sendAC2On, sendAC2Off }) => {
    console.log(isLoading, success, on);
  
    return (
    <React.Fragment>
        <View styles={styles.container}>
            <View styles={styles.blank}>
                <Text></Text>
            </View>
            <View styles={styles.hcontainer}>
                <View styles={styles.tcontainer}>
                    <Title>Ventillateur 1</Title>
                </View>
                <View style={styles.centeredItem}>
                    <View styles={styles.item}>
                        <Button mode="contained" color="#606060" onPress={sendAC1On}>ON</Button>
                    </View>
                    <Text></Text>
                    <View styles={styles.item}>
                        <Button mode="contained" color="#BBBBBB" onPress={sendAC1Off}>OFF</Button>
                    </View>
                </View>
            </View>
            <View styles={styles.hcontainer}>
                <View styles={styles.blank}>
                    <Title>Ventillateur 2</Title>
                </View>
                <View style={styles.centeredItem}>
                    <View styles={styles.item}>
                        <Button mode="contained" color="#606060" onPress={sendAC2On}>ON</Button>
                    </View>
                    <Text></Text>
                    <View styles={styles.item}>
                        <Button mode="contained" color="#BBBBBB" onPress={sendAC2Off}>OFF</Button>
                    </View>
                </View>
            </View>
        </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width : window.outerWidth,
        height : window.outerHeight,
        backgroundColor : '#000'
    },
    hcontainer : {
        width : '100%',
        display : 'flex',
        alignItems : 'center',
        marginTop : 10
    },
    tcontainer : {
        width : '100%',
        margin : 'auto',
        paddingLeft : 100
    },
    centeredItem : {
        textAlign : 'center',
        alignItems : 'center',
        paddingBottom : 20,
        paddingTop: 20
    },
    item : {
        paddingBottom : 10,
        paddingTop : 10
    },
    text : {
        textAlign : 'center',
        width : '100%',
        alignItems : 'center',
        paddingLeft : 300,
        marginLeft : 'auto',
        marginRight : 'auto'
    }
});

const mapStateToProps = state => ({
    isLoading : state.http.isLoading,
    on : state.http.on,
    success : state.http.success
});

export default connect(mapStateToProps, { sendAC1Off, sendAC1On, sendAC2Off, sendAC2On })(Activation);