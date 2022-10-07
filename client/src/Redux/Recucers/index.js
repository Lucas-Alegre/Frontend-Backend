import {
    GET_ALL_COUNTRY,
    GET_COUNTRY_DETAILS,
    CREATE_COUNTRY,
    DELETE_COUNTRY
} from '../Actions';

const initialState = {
    countries: [],
    allCountry: [],
    turistas: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRY:
            return {
                ...state,
                countries: action.payload,
                allCountry: action.payload
            }
        case 'FILTER_BY_VALUE':
            const allCountry = state.allCountry;
            const statusFiltered = allCountry.filter(e => e.continents == action.payload)
            return {
                ...state,
                countries: statusFiltered
            }
        case 'GET_NAME_COUNTRY':
            return {
                ...state,
                countries: action.payload
            }
        /*case 'POST_TURISTAS':
            return {
                ...state,
            }
        case 'GET_TURISTAS':
            return {
                ...state,
                turistas: action.payload
            }*/
        case 'ORDER_BY_NAME':
            let allCountryOrder = action.payload === 'asc' ?

                state.countries.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                })
                :
                state.countries.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });

            return {
                ...state,
                countries: allCountryOrder
            }
        case GET_COUNTRY_DETAILS:
            return state
        default:
            return state;
    }
}

export default rootReducer;