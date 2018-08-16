import {CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DEL_LIST_ITEM} from './actionTypes';

export const getInputChangeAction  = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
});

export const getAddListAction =  () => ({
    type:  ADD_LIST_ITEM,
});

export const getDelListAction = (index) => ({
    type:DEL_LIST_ITEM,
    index:index
});