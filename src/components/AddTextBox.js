import React from "react"
import PropTypes from 'prop-types';

 class AddTextBox extends React.Component{

    constructor(props){
        super(props)

        this.state={
            text: ''
        }
    }
    render(){

        return (
        <div style={{textAlign:'center'}}>

            <input type="text"
                   style={{border:'2px solid' ,  borderColor:'#AEAEAE' , width: '400px' ,height:'40px' ,padding:'5px' , paddingLeft:'20px' }}
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