import axios from 'axios';

const ip = 'http://192.168.1.27:5000';

export const sendAC1On = () => async dispatch => {
    try {
        console.log("Pressed on");
        const res = await axios.get(`${ip}/ac1/on`);
        dispatch({
            type : 'ON1_SUCCESS',
            payload : res.data
        });
    }

    catch (e) {
        console.log(e);
        dispatch({
            type : 'ON1_FAILURE'
        });
    }
}

export const sendAC1Off = () => async dispatch => {
    try {
        console.log("Pressed off");
        const res = await axios.get(`${ip}/ac1/off`);
        dispatch({
            type : 'OFF1_SUCCESS',
            payload : res.data
        });
    }

    catch (e) {
        console.log(e);
        dispatch({
            type : 'OFF1_FAILURE'
        });
    }
}

export const sendAC2On = () => async dispatch => {
    try {
        console.log("Pressed on");
        const res = await axios.get(`${ip}/ac2/on`);
        dispatch({
            type : 'ON2_SUCCESS',
            payload : res.data
        });
    }

    catch (e) {
        console.log(e);
        dispatch({
            type : 'ON2_FAILURE'
        });
    }
}

export const sendAC2Off = () => async dispatch => {
    try {
        console.log("Pressed off");
        const res = await axios.get(`${ip}/ac2/off`);
        dispatch({
            type : 'OFF2_SUCCESS',
            payload : res.data
        });
    }

    catch (e) {
        console.log(e);
        dispatch({
            type : 'OFF2_FAILURE'
        });
    }
}