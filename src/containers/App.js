import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';


function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         cats: [],
    //         searchfield: ''
    //     }
    // }

    const [cats, setCats] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({cats: users}));
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setCats(users));
    },[]);

    const onSearchChange = (e) => {
        setSearchfield(e.target.value);        
    };

    const filteredCats = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !cats.length ?
            <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='mb1' style={{fontSize: '5rem'}}>CatoFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll >
                    <ErrorBoundry>
                        <CardList cats={filteredCats} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );        

    
}

export default App;