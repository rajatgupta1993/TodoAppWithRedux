import React from "react"
import PropTypes from 'prop-types';


export default class FilterComponent extends React.Component{

	render (){

			console.log(this.props);
		return (
				<div className='filterContainer'>

					<div className='filterBox' style={{ background:(this.props.AllFilter % 2 !== 0)? 'green':null}}
						onClick={this.props.onAllPressed}> All </div>

					<div className='filterBox' style={{ background:(this.props.CompletedFilter % 2 !== 0)? 'green':null}}
						onClick={this.props.onCompletedPressed}> Completed </div> 

					<div className='filterBox' style={{background:(this.props.IncompleteFilter % 2 !== 0)? 'green':null}}
						onClick={this.props.onIncompletePressed}> Incomplete </div>
				</div>
			);
	}
} 

FilterComponent.propTypes={

	onAllPressed : PropTypes.func,
	onCompletedPressed : PropTypes.func,
	onIncompletePressed : PropTypes.func,

}