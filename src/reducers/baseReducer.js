/*/**
 * Created by RAGU on 31-07-2017.
 */
 'use-strict'
import * as action from '../actions/action'

import * as actionTypes from '../constants/actionType'
var initialState={

  tasks:[],
  filteredTasks:[]
}



export default function baseReducer(state = initialState , action){

  let tasks , filteredTasks;
    switch (action.type){

     

        case actionTypes.ADD_TASK:

               console.log(state);

               /* return [  ...state,
                    {
                      task:action.data.task,
                      id: action.data.id,
                      completed:false
                    }
                ];*/


                let taskObj={   task:action.data.task,
                                id: action.data.id,
                                completed:false
                             }

                return {...state, tasks:[...state.tasks, taskObj ],filteredTasks:[...state.tasks, taskObj ] }
                    //task:state.task.push(action.data)
              //  task:[...state.task,action.data]
        
        case actionTypes.TOGGLE_TASK: 

                let tempTask=state.tasks;

                tasks = tempTask.map( (item) => ( (item.id == action.data ) ? {   task:item.task,
                                                                       id:item.id,
                                                                       completed: !item.completed
                                                                    } : item )
                );

                 filteredTasks = tempTask.map( (item) => ( (item.id == action.data ) ? {   task:item.task,
                                                                       id:item.id,
                                                                       completed: !item.completed
                                                                    } : item )
                );

                  return {...state, tasks ,filteredTasks}
                                   

        case actionTypes.DELETE_TASK:
                console.log(state);
                

                tasks = state.tasks.filter( (item) => !(item.id == action.data ));

                 filteredTasks = state.tasks.filter( (item) => !(item.id == action.data ));
                return {...state, tasks,filteredTasks }


        case actionTypes.FILTER_TASK:
                var FilterType=action.data;
               
               if(FilterType==='Completed'){

                    filteredTasks= state.tasks.filter( (item) => (item.completed===true)) ;

                   return  {...state, filteredTasks}
                }

                 else if(FilterType==='Incompleted'){
                   filteredTasks = state.tasks.filter( (item) => (item.completed===false)) ;
                   return  {...state, filteredTasks}
                }
                else{
                     return {...state,filteredTasks:state.tasks};
                }
           


        default:
            console.log(state);
            return initialState;
    }
}