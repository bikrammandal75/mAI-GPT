import { BiChevronLeft } from "react-icons/bi";
import { motion } from "motion/react";
import { Link } from "react-router";

const plans = [
    {
        title: "Free Plan",
        price: "₹0",
        features: ["Basic AI Access", "Limited Messages", "Community Support"],
        button: "Get Started",
    },
    {
        title: "Pro Plan",
        price: "₹999/month",
        features: ["Priority Access", "Unlimited Messages", "Faster Responses"],
        button: "Upgrade Now",
    },
    {
        title: "Enterprise",
        price: "Custom",
        features: ["Dedicated Support", "Custom Solutions", "API Access"],
        button: "Contact Us",
    },
];

export default function Plans() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 py-16 dark:bg-zinc-900">
            {/* Page Header */}
            <h1 className="mb-8 flex items-center gap-4 text-center text-4xl font-bold text-gray-900 dark:text-white">
                <Link to="/">
                    <BiChevronLeft size={50} />
                </Link>
                Choose Your Plan
            </h1>

            {/* Plans Section */}
            <div id="plans-section" className="flex flex-col gap-6 md:flex-row">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group border-theme relative flex w-80 cursor-pointer flex-col rounded-xl border bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-zinc-800"
                    >
                        {/* Plan Title */}
                        <h2 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">{plan.title}</h2>

                        {/* Price */}
                        <p className="mb-4 text-lg font-medium text-gray-600 dark:text-zinc-400">{plan.price}</p>

                        {/* Features List */}
                        <ul className="space-y-2 text-sm text-gray-500">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    ✅ {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button className="mt-6 w-full rounded-lg bg-black py-2 text-white transition-all duration-300 group-hover:bg-gray-900">
                            {plan.button}
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
