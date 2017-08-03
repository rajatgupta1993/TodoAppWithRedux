/*/**
 * Created by RAGU on 31-07-2017.
 */
 'use-strict'
 
import * as actionTypes from '../constants/actionType'
var initialState={

  tasks:[],
  filteredTasks:[]
}

 let tasks , filteredTasks;

function addTask(state,action){

     let taskObj={   task:action.data.task,
                     id: action.data.id,
                     completed:false
                   }

      return {...state, tasks:[...state.tasks, taskObj ],filteredTasks:[...state.tasks, taskObj ] }

}

function toggleTask(state,action){

     let tempTask=state.tasks;

     tasks = tempTask.map( (item) => ( (item.id === action.data ) ? {   task:item.task,
                                                                       id:item.id,
                                                                       completed: !item.completed } 
                                                                  : item )
     );

      filteredTasks = tempTask.map( (item) => ( (item.id === action.data ) ?
                                                         {  task:item.task,
                                                            id:item.id,
                                                            completed: !item.completed
                                                         } : item )
     );

        return {...state, tasks ,filteredTasks}

}

function deleteTask(state,action){

     tasks = state.tasks.filter( (item) => !(item.id === action.data ));
     filteredTasks = state.tasks.filter( (item) => !(item.id === action.data ));
      return {...state, tasks,filteredTasks }
}

function filterTasks (state,action){

 var FilterType=action.data;
               
      if(FilterType==='Completed'){

           filteredTasks= state.tasks.filter( (item) => (item.completed === true)) ;

          return  {...state, filteredTasks}
       }

      else if(FilterType==='Incompleted'){
          filteredTasks = state.tasks.filter( (item) => (item.completed === false)) ;
          return  {...state, filteredTasks}
       }
      else{
            return {...state,filteredTasks:state.tasks};
       }
           
}


export default function baseReducer(state = initialState , action){

 
    switch (action.type){

     

        case actionTypes.ADD_TASK:

             return addTask(state,action);
                    //task:state.task.push(action.data)
              //  task:[...state.task,action.data]
        
        case actionTypes.TOGGLE_TASK: 

              return toggleTask(state,action);
                                   

        case actionTypes.DELETE_TASK:
               
              return deleteTask(state,action);


        case actionTypes.FILTER_TASK:
               
              return filterTasks(state,action);

        default:
      
              return initialState;
    }
}