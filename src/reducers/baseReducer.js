/**
 * Created by RAGU on 31-07-2017.
 */
import * as action from '../actions/action'

import * as actionTypes from '../constants/actionType'
const initialState={

  task:[1,2,3,4]

}


export default function baseReducer(state = initialState , action){

    switch (action.type){

        case actionTypes.ADD_TASK:

            console.log( `PREVIOUS STATE  IN INCREMENT IS `);
            console.log(state);
            return{
                ...state,
                task:state.task.concat(action.data)

                //task:state.task.push(action.data)
          //  task:[...state.task,action.data]
            };

        case actionTypes.DELETE_TASK:
            console.log(state);

            //throw("exception");
            return {
                ...state,
                counter:--state.counter
            };

        default:
            console.log(state);
            return initialState;
    }
}