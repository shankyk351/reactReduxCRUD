import {apiRequest} from './../globals/api';
import {urls} from './../globals/constant';

const getItemsAction = () => dispatch => {
    let res = apiRequest('get','');
    res.then(res=>{
        dispatch({type: 'GET_ITEMS', payload: res})
    }).catch(err=>{
        console.log('err', err);
    })
}

const addItemAction = name => dispatch=>{
    let res = apiRequest('post', '', {name: name});
    res.then(res).then(res=>{
            dispatch(getItemsAction());
        }).catch(err=>{
            console.log('create item err', err);
        })
}

const updateItemAction = data => dispatch =>{
    let res = apiRequest('post', urls.update, data);
    res.then(res=>{
            dispatch(getItemsAction());
        }).catch(err=>{
            console.log('update item err', err);
        })
}

const removeItemAction = (id) => dispatch =>{
    let res = apiRequest('delete', id)
        res.then(res=>{
            dispatch(getItemsAction());
        }).catch(err=>{
            console.log('err', err);
        })
}

export {getItemsAction, addItemAction, updateItemAction, removeItemAction};