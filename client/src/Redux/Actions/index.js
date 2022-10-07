import axios from 'axios';

export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const CREATE_COUNTRY = "CREATE_COUNTRY";
export const DELETE_COUNTRY = "DELETE_COUNTRY";

/*export const getAllCountry = () => {
    return function (dispatch) {
        return fetch('http://localhost:3001/countries')
            .then(respuesta => respuesta.json())
            .then(json => {
                dispatch({
                    type: GET_ALL_COUNTRY,
                    payload: json
                })
            })
    }
}*/

export function getAllCountry() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3001/countries');
        return dispatch({
            type: GET_ALL_COUNTRY,
            payload: json.data
        })

    }
}
export function getSearchinByNamen(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/countries?name=${name}`);
            return dispatch({
                type: 'GET_NAME_COUNTRY',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

/*export function getTuristas() {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://localhost:3001/activities`);
            return dispatch({
                type: 'GET_TURISTAS',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export function postTuristas(payload) {
    return async function (dispatch) {

        var json = await axios.post(`http://localhost:3001/countries`,payload);
        return json;
    }
}*/

export function filterByContinents(payload) {
    return {
        type: 'FILTER_BY_VALUE',
        payload: payload
    }
}

export function OrderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    }
}