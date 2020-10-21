import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
    const cards = cats.map(cat => {
        return (
            <Card 
                key={cat.id} 
                id={cat.id} 
                name={cat.name} 
                email={cat.email}
             />
        );
    });
    return(
        <React.Fragment>
            {cards}
        </React.Fragment>
    );
}

export default CardList;
