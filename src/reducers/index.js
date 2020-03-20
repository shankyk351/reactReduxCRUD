import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

const initialState = {
    items: []
}

const itemReducer = (state=initialState, data)=>{
    switch(data.type){
        case 'GET_ITEMS':
            return {
                items: data.payload.data
            };
        case 'ITEMS_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

const AllReducers = combineReducers({
    form: formReducer,
    itemReducer
})

export default AllReducers;