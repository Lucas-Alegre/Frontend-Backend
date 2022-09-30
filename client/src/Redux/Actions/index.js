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
