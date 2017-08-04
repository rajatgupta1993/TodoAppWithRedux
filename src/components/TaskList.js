import React from "react"
import PropTypes from 'prop-types';
import '../styles.css';


export default  class TaskList extends React.Component{

    
    render(){

     return (
                    <div style={{width:'60%' , height:'60%'}}>


                        {   (this.props.tasks.length>0) ?
                                               <ol >
                                                      {  this.props.tasks.map( (item, i ) =>  <li  data-key={item.id} key={item.id} onClick={this.props.handleClick}
                                                                                                 style={{ textDecoration: (item.completed)?'line-through' : 'inherit'}}> 
                                                                                                 {item.task} 
                                        
                                                                                                 <span onClick={this.props.onDeletePressed}> delete </span>
                                                                                              </li> )  }
                                             </ol> : <p className='font30'>No Tasks Added yet . Please enter tasks </p>}

                     </div>
                     )
           }      
}


TaskList.propTypes={

    tasks : PropTypes.array,
    handleClick: PropTypes.func,
    onDeletePressed : PropTypes.func
}
