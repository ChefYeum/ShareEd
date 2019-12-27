import React, { Component } from 'react';

//lets the user enter the name of a drive
//requires onSubmit(event) in props
class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handleChange(event){
        this.setState({
            value: event.target.value,
        });
    }

    render(){
        return(
        <form onSubmit={(event) => event.preventDefault() || this.props.onSubmit(event.target.value)}>
            <label>Course Name:
                <input 
                    type="text" value={this.state.value} 
                    onChange={(event)=>this.handleChange(event)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

export default SearchForm;