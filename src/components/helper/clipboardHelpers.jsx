export const copyToClipboard = async (text, onSuccess) => {
    try {
        await navigator.clipboard.writeText(text);
        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error("Failed to copy:", err);
    }
};
