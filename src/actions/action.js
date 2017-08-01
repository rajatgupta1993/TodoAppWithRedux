/**
 * Created by RAGU on 31-07-2017.
 */

import * as types from '../constants/actionType'


export function addTask(data){

    return {

        type: types.ADD_TASK,
        data: data
    }
}

export function deleteTask(){

    return {

        type: types.DELETE_TASK,

    }
}


export function resetFunction(){

    return {

        type: types.RESET_COUNTER,
        data: 'Reset to default value'
    }
}
