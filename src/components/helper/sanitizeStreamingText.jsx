export const sanitizeStreamingText = (text) => {
    // Remove common markdown symbols (headers, code blocks, etc.)
    const cleanedText = text
        .replace(/(#{1,6})\s+/g, "") // Remove Markdown headers (e.g., ### Header)
        .replace(/`{1,3}(.*?)`{1,3}/g, "") // Remove inline code blocks (e.g., `code`)
        .replace(/\*\*(.*?)\*\*/g, "$1") // Convert bold markdown to plain text
        .replace(/\*(.*?)\*/g, "$1") // Convert italic markdown to plain text
        .replace(/\[(.*?)\]\(.*?\)/g, "$1") // Remove markdown links, just keeping the text
        .replace(/\n{2,}/g, "\n") // Remove excess newlines
        .trim(); // Trim the text

    // Now split the text into lines and remove any redundant whitespace
    const lines = cleanedText
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

    // Remove duplicate lines
    const uniqueLines = [];
    const seen = new Set();
    for (const line of lines) {
        const clean = line.replace(/\s+/g, " ");
        if (!seen.has(clean)) {
            uniqueLines.push(line);
            seen.add(clean);
        }
    }

    return uniqueLines.join("\n");
};
