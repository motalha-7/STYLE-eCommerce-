import React, { useState } from 'react';
import './CSS/Checkout.css';
import OrderSuccess from '../Components/OrderSuccess/OrderSuccess';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        mobileNumber: ''
    });

    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleCodClick = () => {
        const { firstName, lastName, addressLine1, city, state, zipCode, mobileNumber } = formData;
        if (firstName && lastName && addressLine1 && city && state && zipCode && mobileNumber) {
            setOrderPlaced(true); // Place the order and show the OrderSuccess component
        } else {
            alert('Please fill in all the fields');
        }
    };

    // const handleRazorpayClick = () => {
    //     const { firstName, lastName, addressLine1, city, state, zipCode, mobileNumber } = formData;
    //     if (firstName && lastName && addressLine1 && city && state && zipCode && mobileNumber) {
    //         navigate('/payment'); // Replace with your payment page route
    //     } else {
    //         alert('Please fill in all the fields');
    //     }
    // };

    if (orderPlaced) {
        return <OrderSuccess />;
    }

    return (
        <div className="checkout">
            <h1>CHECKOUT</h1>
            <div className="name-container">
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
            </div>
            <div>
                <label htmlFor="addressLine1">Address Line 1:</label>
                <input type="text" id="addressLine1" value={formData.addressLine1} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="addressLine2">Address Line 2:</label>
                <input type="text" id="addressLine2" value={formData.addressLine2} onChange={handleChange} />
            </div>
            <div className="location-container">
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" value={formData.city} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" value={formData.state} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input type="text" id="zipCode" value={formData.zipCode} onChange={handleChange} />
                </div>
            </div>
            <div>
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input type="text" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
            </div>
            <div className="payment-buttons">
                <button onClick={handleCodClick} className="cod-button">
                    Pay with COD
                </button>
                <button  className="razorpay-button">
                    Pay Online
                </button>
            </div>
        </div>
    );
};

export default Checkout;
