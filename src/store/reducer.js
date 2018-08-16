import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DEL_LIST_ITEM} from './actionTypes'

const defaultState = {
    inputValue: 'hello',
    list: []
}


export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === ADD_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === DEL_LIST_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}