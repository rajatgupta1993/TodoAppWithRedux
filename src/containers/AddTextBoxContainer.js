import React from 'react'
import AddTextBox from '../components/AddTextBox'
import {connect} from 'react-redux';
import {addTask,deleteTask} from '../actions/action'

class AddTextBoxContainer extends React.Component{


    constructor(props){
        super(props)

        this.state={
            text:''
        };
        this.handleNewTodoKeyDown=this.handleNewTodoKeyDown.bind(this);
        this.handleChange=this.handleChange.bind(this);

    }


    handleNewTodoKeyDown(event){

        if (event.keyCode !== 13) {
            return;
        }

        event.preventDefault();

        var val = this.state.text.trim();

        if (val) {
           console.log(this.state.text);
           this.props.addTask(this.state.text);
           this.setState({text:''});
        }
    }

    handleChange(event){

        this.setState({
            text: event.target.value
        })
    }

    render(){


        return(
            <AddTextBox  handleNewTodoKeyDown={this.handleNewTodoKeyDown}  handleChange={this.handleChange}
                            value={this.state.text}/>

        )
    }
}

const mapStateToProps=(state)=> {

    var data={

        state:state
    }

    return data;
}

const mapDispatchToProps= (dispatch)=>{

    return{

        addTask: (task)=> dispatch(addTask(task))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddTextBoxContainer);