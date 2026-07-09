import React, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }
    const handlePaymentChange = (event) =>{
        setPayment(event.target.value);
    }
    const handleShippingChange = (event) =>{
        setShipping(event.target.value);
    }


    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <p>Name: {name}</p>

            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
            />
            <p>Quantity: {quantity}</p>

            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder='write some notes about the delivery of the pizza.'
            />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option:</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type='radio' value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShippingChange}>
                </input>
                Pick Up
            </label><br/>
            <label>
                <input type='radio' value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}>
                </input>
                Delivery
            </label><br/>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default MyComponent