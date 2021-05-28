import axios from 'axios';

const ip = 'http://172.20.10.12:5000';

export const sendACOn = () => async dispatch => {
    try {
        console.log("Pressed on");
        const res = await axios.get(`${ip}/ac/on`);
        dispatch({
            type : 'ON_SUCCESS',
            payload : res.data
        });
    }

    catch (e) {
        console.log(e);
        dispatch({
            type : 'ON_FAILURE'
        });
    }
}

export const sendACOff = () => async dispatch => {
    try {
        console.log("Pressed off");
        const res = await axios.get(`${ip}/ac/off`);
        dispatch({
            type : 'OFF_SUCCESS',
            payload : res.data
        });
    }

    catch (e) {
        console.log(e);
        dispatch({
            type : 'OFF_FAILURE'
        });
    }
}