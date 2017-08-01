import React from "react"
import {connect} from 'react-redux';


const ListItem = (props)=> (<li style={{border:'1px solid', padding:'10px',textAlign:'left',marginBottom:'10px'}}>  {props.item} </li>);

let  List = (props) => (   <ol>
    {props.task.map( (item,i) => <ListItem key={i} item={item} /> )}
</ol>
);

let ToDoList= (props)=>{

    let items =props.tasks;
    return (
        <div style={{width:'60%' , height:'60%'}}>
            <List task={items}/>
        </div>
    )
};

 class TaskList extends React.Component{

     constructor(props){
         super(props);
     }


    render(){

         console.log(this.props.tasks);
            return (
                <ToDoList tasks={this.props.tasks}/>
            )
        }
}

const mapStateToProps= (state)=>{

    var taskList={

        tasks: state.state.task
    }

    return taskList;
}

export default connect (mapStateToProps)(TaskList);