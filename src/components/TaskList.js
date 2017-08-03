import React from "react"
import {connect} from 'react-redux';
import {toggleTask,deleteTask} from '../actions/action'
import PropTypes from 'prop-types';

 class TaskList extends React.Component{

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


console.log(this.props.tasks);
/* return (
                            
                
                               <ol style={{width:'60%' , height:'60%'}}>
                             {  this.props.tasks.map( (item, i ) =>  <li  data-key={item.id} key={item.id} onClick={this.handleClick}
                                                                         style={{border:'1px solid', borderColor:'#AEAEAE', borderBottomWidth:'2px' , padding:'10px',textAlign:'left',marginBottom:'10px', textDecoration: (item.completed)?'line-through' : 'inherit' }}> 
                                                                         {item.task} 
                
                                                                         <span style={{ border:'1px solid',background:'#ec2d2d', borderColor:'#AEAEAE', borderBottomWidth:'2px' , paddingLeft:'5px', paddingRight:'5px' , float:'right' }}
                                                                                onClick={this.onDeletePressed}> delete </span>
                                                                     </li> )  }
                             </ol>
                )   */



      
                 return (

                    <div style={{width:'60%' , height:'60%'}}>


                        {   (this.props.tasks.length>0) ?
                                               <ol style={{width:'60%' , height:'60%'}}>
                                                      {  this.props.tasks.map( (item, i ) =>  <li  data-key={item.id} key={item.id} onClick={this.handleClick}
                                                                                                 style={{border:'1px solid', borderColor:'#AEAEAE', borderBottomWidth:'2px' , padding:'10px',textAlign:'left',marginBottom:'10px', textDecoration: (item.completed)?'line-through' : 'inherit' }}> 
                                                                                                 {item.task} 
                                        
                                                                                                 <span style={{ border:'1px solid',background:'#ec2d2d', borderColor:'#AEAEAE', borderBottomWidth:'2px' , paddingLeft:'5px', paddingRight:'5px' , float:'right' }}
                                                                                                        onClick={this.onDeletePressed}> delete </span>
                                                                                              </li> )  }
                                             </ol> : <p style= {{fontSize:'30px'}}>No Tasks Added yet . Please enter tasks </p>}

                     </div>)



                      
      
                

              }
        
}

TaskList.propTypes={

    tasks : PropTypes.array,
}

const mapStateToProps= (store)=>{

    var taskList={

        tasks: store.state.filteredTasks
    }

    return taskList;
}

const mapDispatchToProps=(dispatch) =>{

    return{

        toggleTask: (id)=>dispatch(toggleTask(id)),
        deleteTask: (id)=>dispatch(deleteTask(id))


    } 
}

export default connect (mapStateToProps,mapDispatchToProps)(TaskList);