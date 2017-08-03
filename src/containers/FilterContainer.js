import React from 'react'
import FilterComponent from '../components/FilterComponent'
import {connect} from 'react-redux';
import {filterTask} from '../actions/action'

class FilterContainer extends React.Component{


    constructor(props){
        super(props)

        this.state={
            AllFilter:0,
            CompletedFilter:0,
            IncompleteFilter:0
        };
     
            this.onAllPressed=this.onAllPressed.bind(this);
            this.onCompletedPressed=this.onCompletedPressed.bind(this);
            this.onIncompletePressed=this.onIncompletePressed.bind(this);

    }

onAllPressed (){

    this.setState({
        AllFilter: ++this.state.AllFilter,
        CompletedFilter:0,
        IncompleteFilter:0
    })

    if(this.state.AllFilter==1 || (this.state.CompletedFilter==0 && this.state.IncompleteFilter==0)){

            this.props.filterTask('All');

    }
}

onCompletedPressed(){


    this.setState({
        CompletedFilter: ++this.state.CompletedFilter,
        IncompleteFilter:0,
        AllFilter:0
    });

      this.props.filterTask('Completed');
}

onIncompletePressed(){

    this.setState({
        IncompleteFilter: ++this.state.IncompleteFilter,
        AllFilter:0,
        CompletedFilter:0,
    });
      this.props.filterTask('Incompleted');
}


    render(){

        console.log(this.state);

        return(
            <FilterComponent AllFilter={this.state.AllFilter} CompletedFilter={this.state.CompletedFilter} IncompleteFilter={this.state.IncompleteFilter}
                              onAllPressed={this.onAllPressed} onCompletedPressed={this.onCompletedPressed} onIncompletePressed={this.onIncompletePressed} />

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

        filterTask: (data)=> dispatch(filterTask(data))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FilterContainer);