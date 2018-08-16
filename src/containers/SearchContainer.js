import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

// Search Container Component
class SearchContainer extends React.Component {

  constructor(props) {
    super(props);
  }
        //   onChange={this.handleInputChange.bind(this)}

    render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.props.handleSearchInputChange}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

const mapStateToProps = (state) => {
    // let props = {
    //     handleSearchInputChange: state.handleSearchInputChange
    // };
    return state
};

export default connect(mapStateToProps)(Search);
