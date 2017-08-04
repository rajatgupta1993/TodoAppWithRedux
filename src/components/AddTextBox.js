import React from "react"
import PropTypes from 'prop-types';
import '../styles.css';

 class AddTextBox extends React.Component{

    constructor(props){
        super(props)

        this.state={
            text: ''
        }
    }
    render(){

        return (
        <div className='TextCenter'>

            <input className="AddTaskTetView" type="text"
                   placeholder="What needs to be done?"
                   autoFocus={true}
                   onKeyDown={this.props.handleNewTodoKeyDown}
                   onChange={this.props.handleChange}
                   value={this.props.value}
            ></input>

        </div>
        );
    }
}

AddTextBox.propTypes={
  handleNewTodoKeyDown : PropTypes.func,
  handleChange : PropTypes.func,
  value : PropTypes.string 

}

export default AddTextBox;