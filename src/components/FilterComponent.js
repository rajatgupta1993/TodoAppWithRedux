import React from "react"
import {connect} from 'react-redux';


export default class FilterComponent extends React.Component{

	render (){

			console.log(this.props);
		return (
				<div style={{textAlign:'center',marginTop:'-10px',width:'30%'}}>

					<div style={{display:'inline-block',border:'1px solid', width:'25%',padding:'5px', background:(this.props.AllFilter % 2 !=0)? 'green':null}}
						onClick={this.props.onAllPressed}> All </div>

					<div style={{display:'inline-block',border:'1px solid', width:'25%',padding:'5px', background:(this.props.CompletedFilter % 2 !=0)? 'green':null}}
						onClick={this.props.onCompletedPressed}> Completed </div> 

					<div style={{display:'inline-block',border:'1px solid', width:'25%',padding:'5px', background:(this.props.IncompleteFilter % 2 !=0)? 'green':null}}
						onClick={this.props.onIncompletePressed}> Incomplete </div>
				</div>
			);
	}
} 