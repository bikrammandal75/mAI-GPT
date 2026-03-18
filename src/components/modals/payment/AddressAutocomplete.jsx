import { useEffect, useRef } from "react";

const AddressAutocomplete = ({ value, onChange, country }) => {
    const inputRef = useRef(null);
    const autocompleteRef = useRef(null);

    useEffect(() => {
        const initAutocomplete = () => {
            if (!inputRef.current) return;

            // Cleanup old instance
            if (autocompleteRef.current) {
                console.log("[Autocomplete] Cleaning up old instance...");
                window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
                autocompleteRef.current = null;
            }

            autocompleteRef.current = new window.google.maps.places.Autocomplete(
                inputRef.current,
                {
                    types: ["address"],
                    componentRestrictions: country
                        ? { country: country.toLowerCase() }
                        : undefined,
                }
            );

            console.log("[Autocomplete] Initialized with country:", country);

            autocompleteRef.current.addListener("place_changed", () => {
                const place = autocompleteRef.current.getPlace();
                console.log("[Autocomplete] place_changed triggered:", place);

                if (place?.formatted_address) {
                    onChange(place.formatted_address);
                } else {
                    console.warn("[Autocomplete] No formatted address found:", place);
                }
            });
        };

        const waitForGoogleMaps = () => {
            if (
                window.google &&
                window.google.maps &&
                window.google.maps.places &&
                inputRef.current
            ) {
                initAutocomplete();
            } else {
                console.log("[Autocomplete] Google Maps API not ready yet. Retrying...");
                setTimeout(waitForGoogleMaps, 300);
            }
        };

        waitForGoogleMaps();

        return () => {
            if (autocompleteRef.current) {
                window.google.maps.event.clearInstanceListeners(autocompleteRef.current);
                autocompleteRef.current = null;
                console.log("[Autocomplete] Cleaned up on unmount");
            }
        };
    }, [country]);

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Address line 1"
            autoComplete="off"
            className="w-full px-3 py-2 border-b focus:outline-none focus:ring-0"
        />
    );
};

export default AddressAutocomplete;
