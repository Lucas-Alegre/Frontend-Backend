import {
    GET_ALL_COUNTRY,
    GET_COUNTRY_DETAILS,
    CREATE_COUNTRY,
    DELETE_COUNTRY
} from '../Actions';

const initialState = {
    countries: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRY_DETAILS:
            return state
        default:
            return state;
    }
}

export default rootReducer;