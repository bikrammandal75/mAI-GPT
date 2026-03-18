import React from "react";
import { Link } from "react-router";

function Logo({ customStyles }) {
    return (
        <>
            <Link to="/">
                <Link to="/">
                    <img
                        src="/icon.svg"
                        alt="Logo"
                        className={`h-9 w-9 cursor-pointer ${customStyles}`}
                    />
                </Link>

            </Link>
        </>
    );
}

export default Logo;
