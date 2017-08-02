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



 class App extends  React.Component{

    render () {

        return (

            <div style={{width:'100%' , height:'100%'}}>
                <p style={{fontSize:'30px', textAlign:'center'}}> TO DO APP </p>
                <AddTextBoxContainer/>
                <TaskList/>
            </div>
        );
    }
}

export default App;

