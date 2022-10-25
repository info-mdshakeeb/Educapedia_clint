import React, { useContext } from 'react';
import { authUser } from '../Context/UserContext';

const Checkout = () => {
    const { bookDetails } = useContext(authUser);

    return (
        <div>
            {bookDetails?.name}
        </div>
    );
};

export default Checkout;