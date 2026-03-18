// src/components/payment/UpgradePayment.jsx
import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { createCheckoutSession } from "../api/put";

const stripePromise = loadStripe("pk_test_51RMIEgCiSzsBhg1mFGiT4nmdfvZx4VlQUBoYaFFcyQWUvAXjHdCo2el3kKIGWMw6gOVYlrQ5SqNBGdgG4zBmu7VB00IEybQbYw"); // Replace with your real key

const UpgradePayment = ({ onClose }) => {
    const fetchClientSecret = useCallback(() => {
        return createCheckoutSession().then((data) => data.clientSecret);
    }, []);


    const options = { fetchClientSecret };

    return (
        <div className="p-4">
            <button className="mb-4 text-blue-600" onClick={onClose}>
                ← Back
            </button>
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    );
};

export default UpgradePayment;
