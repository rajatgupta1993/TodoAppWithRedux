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

export function deleteTask(data){

    return {

        type: types.DELETE_TASK,
        data : data

    }
}

export function toggleTask(id){

    return {

        type: types.TOGGLE_TASK,
        data: id

    }
}

    export function filterTask(data){

        return{

            type: types.FILTER_TASK,
            data:data
        }
    }


