import React, { Component } from 'react';

//lets the user enter the name of a drive
//requires onSubmit(event) in props
class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            sort:'',
            dir:'',
        };
    }

    handleChangeValue(event){
        this.setState({
            value: event.target.value,
        });
    }

    handleChangeSort(event){
        this.setState({
            sort: event.target.value,
        });
    }

    handleChangeDir(event){
        this.setState({
            dir: event.target.value,
        });
    }


    handleSubmit(event){
        console.log(event);
        event.preventDefault();
        this.props.onSubmit(this.state.value,this.state.sort,this.state.dir);

    }

    render(){
        return(
        <form className ='search-form text-center' onSubmit={(event) => this.handleSubmit(event)}>
            <label >Course Name:
                <input 
                    type="text" value={this.state.value} 
                    onChange={(event)=>this.handleChangeValue(event)} />
            </label>
            <input type="submit" value={"Submit"}/>
            <select name="sortBy" value={this.state.sort} onChange={(event)=>this.handleChangeSort(event)}>
                <option value="name" selected>sort by name</option>
                <option value="author">sort by author</option>
                <option value ="rating">sort by rating</option>
            </select>
            <select name = "sort order" value={this.state.dir} onChange={(event)=>this.handleChangeDir(event)}>
                <option value={1}>ascending</option>
                <option value={-1}>descending</option>
            </select>
        </form>
        );
    }
}

export default SearchForm;