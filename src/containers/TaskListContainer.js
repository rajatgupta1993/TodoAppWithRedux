import React from "react"
import {connect} from 'react-redux';
import {toggleTask,deleteTask} from '../actions/action'
import '../styles.css';
import TaskList from '../components/TaskList'


 class TaskListContainer extends React.Component{

     constructor(props){
         super(props);

         this.handleClick= this.handleClick.bind(this);
         this.onDeletePressed= this.onDeletePressed.bind(this);
     }

      handleClick(e){

         this.props.toggleTask(parseInt (e.target.getAttribute('data-key')));
       
     }

     onDeletePressed(e){

        this.props.deleteTask(parseInt (e.target.parentNode.getAttribute('data-key')));
     }


    render(){
            console.log ('-------------store ------------------');
            console.log(this.props.state);
            console.log ('--------------------------------------');
      
             return (

                     <TaskList tasks={this.props.tasks} handleClick={this.handleClick} onDeletePressed={this.onDeletePressed}/>

                     )
           }      
}


const mapStateToProps= (store)=>{

  return {
             tasks: store.state.filteredTasks,
             state: store
         }

}

const mapDispatchToProps=(dispatch) =>{

    return {
              toggleTask: (id)=>dispatch(toggleTask(id)),
              deleteTask: (id)=>dispatch(deleteTask(id))
            } 
}

export default connect (mapStateToProps,mapDispatchToProps)(TaskListContainer);