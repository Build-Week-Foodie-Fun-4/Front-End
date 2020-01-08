import React from 'react';

function RestaurantPage()
{
    return (
        <div>
            <h1>Restaurant Title</h1>
            <h3>Cuisine: </h3>
            <h3>Address: </h3>
            <h3>City: </h3>
            <h3>State: </h3>
            <h3>Zip Code: </h3>

            <div className='MenuCard'>
                <h2>Restaurant Menu</h2>
                <ul>
                    <li>Menu Item</li>
                    <p>Description of item</p>
                </ul>
            </div>

        </div>
    );
}

export default RestaurantPage;