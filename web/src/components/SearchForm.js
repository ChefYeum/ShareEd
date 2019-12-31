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

    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state.value);

    }

    render(){
        return(
        <form className ='text-center' onSubmit={(event) => this.handleSubmit(event)}>
            <label >Course Name:
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