import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/'); // Replace with your home page route
    };

    return (
        <div className="order-success-container">
            <div className="order-success-content">
                <h1>Order Successful!</h1>
                <p>Thank you for your purchase. Your order has been placed successfully.</p>
                <div className="order-details">
                    <h2>Order Details</h2>
                    <p><strong>Order Number:</strong> #123456</p>
                    <p><strong>Estimated Delivery:</strong> 3-5 business days</p>
                </div>
                <button onClick={handleContinueShopping} className="continue-button">
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderSuccess;
