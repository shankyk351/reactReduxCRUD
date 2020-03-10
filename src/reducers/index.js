import {combineReducers} from 'redux';
import uuid from 'uuid';

const initialState = {
    items: [
        {id: uuid(),name: 'table'},
        {id: uuid(),name: 'chair'},
        {id: uuid(),name: 'fan'},
        {id: uuid(),name: 'television'}
    ]
}

const itemReducer = (state=initialState, data)=>{
    switch(data.type){
        case 'GET_ITEMS':
            return {...state};
        case 'ADD_ITEM':
            return {
                items: [...state.items, data.payload]
            };
        case 'UPDATE_ITEM':
            return {
                items: state.items.map(obj=>obj.id===data.payload.id?{...obj, id: data.payload.id, name: data.payload.name}:obj)
            };
        case 'REMOVE_ITEM':
            return {
                items: [...state.items.filter(item=>item.id!==data.payload)]
            }
        case 'SUBMIT_ITEM':
            return {
                items: [...state.items, data.payload]
            }
        default:
            return state;
    }
}

const AllReducers = combineReducers({
    itemReducer
})

export default AllReducers;