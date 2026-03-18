// src/components/payment/Return.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import { getSessionStatus } from "../api/put";

const Return = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (sessionId) {
      getSessionStatus(sessionId)
        .then((data) => {
          setStatus(data.status);
          setCustomerEmail(data.customer_email);
        })
        .catch((err) => {
          console.error("Failed to get session status", err);
        });
    }
  }, [searchParams]);

  if (status === "open") {
    return <Navigate to="/checkout" />;
  }

  if (status === "complete") {
    return (
      <section className="p-4">
        <p>
          Thank you for your purchase! A confirmation email has been sent to{" "}
          <strong>{customerEmail}</strong>.
        </p>
      </section>
    );
  }

  return <p className="p-4">Checking payment status...</p>;
};

export default Return;
