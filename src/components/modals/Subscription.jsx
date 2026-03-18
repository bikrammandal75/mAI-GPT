import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import UpgradePayment from "./payment/UpgradePayment";

const stripePromise = loadStripe("pk_test_..."); // your Stripe publishable key

const CheckoutForm = ({ onClose }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);

        // Dummy handling – real token/intent would come from backend
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Payment successful (simulated): " + paymentMethod.id);
            onClose();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <CardElement className="p-2 border rounded" />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
                Pay
            </button>
        </form>
    );
};

const Subscription = () => {
    const [showPayment, setShowPayment] = useState(false);

    const plans = [
        {
            name: "Basic Plan",
            price: "$100",
            period: "Month",
            active: true,
            features: [
                "Access to dashboard",
                "Basic analytics",
                "Email support",
                "Custom reports",
                "Advanced security",
                "Team collaboration",
            ],
            enabled: [true, true, true, false, false, false],
            button: {
                text: "Current Plan",
                bg: "bg-white",
                border: "border border-blue-500",
                textColor: "text-blue-600",
                disabled: true,
            },
        },
        {
            name: "Pro",
            price: "$11",
            period: "Month",
            active: false,
            features: [
                "Access to dashboard",
                "Basic analytics",
                "Email support",
                "Custom reports",
                "Advanced security",
                "Team collaboration",
            ],
            enabled: [true, true, true, true, true, true],
            button: {
                text: "Coming",
                bg: "bg-blue-600 hover:bg-blue-700",
                border: "",
                textColor: "text-white",
                disabled: false,
            },
        },
    ];

    return showPayment ? (
        <UpgradePayment onClose={() => setShowPayment(false)} />
    ) : (
        <div className="p-6 mt-8">
            <h3 className="text-xl font-semibold mb-6">Subscription</h3>
            <div className="flex flex-wrap gap-6">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-[400px] min-h-[400px]  border-gray-300 rounded-md flex flex-col justify-between"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-gray-300">
                            {/* Left: Plan name and Active label */}
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold">{plan.name}</span>

                                {plan.active && (
                                    <span className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 border border-green-500 rounded-full">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Active
                                    </span>
                                )}
                            </div>

                            {/* Right: Price */}
                            <span className="text-xl font-semibold">
                                {plan.name === "Basic Plan" ? "Free" : plan.price}
                                {plan.name !== "Basic Plan" && (
                                    <span className="text-xs font-normal text-gray-500">
                                        /{plan.period}
                                    </span>
                                )}
                            </span>
                        </div>


                        {/* Features */}
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <div>
                                <p className="text-sm font-bold mb-2">Features</p>
                                <ul className="space-y-2 text-sm mb-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span
                                                className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${plan.enabled[i]
                                                    ? "bg-green-600 text-white"
                                                    : "bg-red-600 text-white"
                                                    }`}
                                            >
                                                {plan.enabled[i] ? "✔" : "✖"}
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="px-4 py-3 border-gray-300">
                            <button
                                disabled={plan.button.disabled}
                                className={`w-full h-[42px] text-sm font-medium py-2 rounded border ${plan.button.border} ${plan.button.bg} ${plan.button.textColor}`}
                                onClick={() => setShowPayment(false)}
                            >
                                {plan.button.text}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Subscription;
