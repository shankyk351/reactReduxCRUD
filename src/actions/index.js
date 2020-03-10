
const getItemsAction = ()=>{
    return {
        type: 'GET_ITEMS'
    }
}

const addItemAction = (data)=>{
    return {
        type: 'ADD_ITEM',
        payload: data
    }
}

const updateItemAction = (data)=>{
    return {
        type: 'UPDATE_ITEM',
        payload: data
    }
}

const removeItemAction = (data)=>{
    return {
        type: 'REMOVE_ITEM',
        payload: data
    }
}

const submitItemAction = (data)=>{
    return {
        type: 'SUBMIT_ITEM',
        payload: data
    }
}

export {getItemsAction, addItemAction, updateItemAction, removeItemAction, submitItemAction};