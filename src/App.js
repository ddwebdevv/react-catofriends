import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { CATS } from './cats';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: [],
            searchfield: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({cats: users}));
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value});        
    }

    render(){
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.cats.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1 mb1'>CatoFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <CardList cats={filteredCats} />
                </div>
            );
        }
    }
    
}

export default App;