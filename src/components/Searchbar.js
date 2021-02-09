import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchQuery: ""
    }
    

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        return (
    <form onSubmit={this.handleFormSubmit}>
        <div className ="md-form active-pink active-pink-2 mb-3 mt-0">
            <input 
            
            onChange={(event) => this.setState({searchQuery: event.target.value})}className ="form-control"
            type="text" placeholder="Search a Book" aria-label="Search">
        </div>
    </form>

        )
    }
}