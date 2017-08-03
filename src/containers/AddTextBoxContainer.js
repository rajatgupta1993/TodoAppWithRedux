import React from 'react'
import AddTextBox from '../components/AddTextBox'
import {connect} from 'react-redux';
import {addTask} from '../actions/action'
import PropTypes from 'prop-types';

class AddTextBoxContainer extends React.Component{


    constructor(props){
        super(props)

        this.state={
            text:'',
            id:0
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
           this.props.addTask({
                     task:this.state.text,
                     id: this.state.id,
                              });

           this.setState({id: ++this.state.id});
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

AddTextBoxContainer.propTypes={

    addTask: PropTypes.func
}

const mapStateToProps=(state)=> {

    return{
            state:state
         }
}

const mapDispatchToProps= (dispatch)=>{

    return{
             addTask: (task)=> dispatch(addTask(task))
          }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddTextBoxContainer);