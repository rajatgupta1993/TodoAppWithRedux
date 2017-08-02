/**
 * Created by RAGU on 31-07-2017.
 */
import * as action from '../actions/action'

import * as actionTypes from '../constants/actionType'
const initialState=[]


export default function baseReducer(state = [] , action){

    switch (action.type){

        case actionTypes.ADD_TASK:

        
               console.log(state);

                return [  ...state,
                    {
                      task:action.data.task,
                      id: action.data.id,
                      completed:false
                    }
                ];
                    //task:state.task.push(action.data)
              //  task:[...state.task,action.data]
        
        case actionTypes.TOGGLE_TASK: 

                return state.map( (item) => ( (item.id == action.data ) ? {   task:item.task,
                                                                       id:item.id,
                                                                       completed: !item.completed
                                                                    } : item )
        );
                                   /* if(item.id===action){
                                        {...item, completed:!item.completed}
                                    }*/ 

        case actionTypes.DELETE_TASK:
                console.log(state);

               return state.filter( (item) => !(item.id == action.data ));

        case actionTypes.FILTER_TASK:
                var FilterType=action.data;
                var counter=0;
                var defaultSate;
                if(counter===0){
                    defaultSate=state;
                }


                ++counter
            
               if(FilterType==='Completed'){
                    return defaultSate.filter( (item) => (item.completed===true)) ;
                }

                 else if(FilterType==='Incompleted'){
                    return defaultSate.filter( (item) => (item.completed===false)) ;
                }
                else{
                     return defaultSate;
                }
           


        default:
            console.log(state);
            return initialState;
    }
}