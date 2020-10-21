import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { CATS } from './cats';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cats: CATS,
            searchfield: ''
        }

    }
//check it doesnt work
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value});        
    }

    render(){
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        console.log(filteredCats);
        return (
            <div className='tc'>
                <h1>CatoFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList cats={filteredCats} />
            </div>
        );
    }
    
}

export default App;