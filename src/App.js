import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { CATS } from './cats';

const App = () => {
    return (
        <div className='tc'>
            <h1>CatoFriends</h1>
            <SearchBox />
            <CardList cats={CATS} />
        </div>
    );
}

export default App;