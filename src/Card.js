import React from 'react';

const Card = ({ name, email, id }) => {
   
    return(
        <div className='tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt='photo' src={`https://robohash.org/kuzya${id}/set_set4/?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;