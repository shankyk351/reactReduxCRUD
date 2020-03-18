import {combineReducers} from 'redux';

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
    itemReducer
})

export default AllReducers;