import React from 'react';

const Filters = ({cuisine, rating}) => {

    let cuisineList = ['Italian', 'American', 'Californian', 'French', 'Seafood', 'Japanese', 'Indian']
        .map((type, i) => {
           return (
               <p> {type} </p>
           ) 
        });

    let ratings = [0, 1, 2, 3, 4, 5]
        .map((star, i) => {
            return (
                <p>{star}</p>
            )
        })

    return (
        <div>
        { cuisineList }
        { ratings }
        </div>
    )

}

export default Filters;
