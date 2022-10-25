import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData()
    const { name } = data;
    return (
        <div>
            {name}
        </div>
    );
};

export default Checkout;