/**
 * Created by RAGU on 31-07-2017.
 */
/**
 * Created by RAGU on 28-07-2017.
 */
import React from "react"
import ReactDOM from "react-dom"
import {connect} from 'react-redux';
import AddTextBoxContainer from './containers/AddTextBoxContainer'
import TaskList from './components/TaskList'
import FilterContainer from './containers/FilterContainer'



 class App extends  React.Component{

    render () {

        return (

            <div style={{width:'100%' , height:'100%'}}>
                <p style={{fontSize:'30px', textAlign:'center'}}> TO DO APP </p>
                <AddTextBoxContainer/>
                <TaskList/>

               { (this.props.tasks.length>0)?
                               <FilterContainer/> : null}
            </div>
        );
    }
}

const mapStateToProps= (store)=>{

    var taskList={

        tasks: store.state
    }

    return taskList;
}

const mapDispatchToProps=(dispatch) =>{

    return{

     

    } 
}

export default connect (mapStateToProps,mapDispatchToProps)(App);



