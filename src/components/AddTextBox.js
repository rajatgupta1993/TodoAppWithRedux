import React from "react"

export default class AddTextBox extends React.Component{

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
                   style={{border:'1px solid' , width: '400px' ,height:'40px' ,padding:'10px' }}
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