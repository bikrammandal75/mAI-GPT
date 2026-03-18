export const formatResumeHTML = (text) => {
    if (!text) return "";

    const lines = text.split("\n").filter(Boolean);

    let html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
  `;

    lines.forEach((line) => {
        // Headings
        if (line.match(/^\*\*(.+)\*\*$/)) {
            html += `<h2 style="margin-top:24px;">${line.replace(/\*\*/g, "")}</h2>`;
        }

        // Section titles
        else if (line.endsWith(":")) {
            html += `<h3 style="margin-top:18px;">${line}</h3>`;
        }

        // Bullet points
        else if (line.startsWith("* ")) {
            html += `<ul><li>${line.replace("* ", "")}</li></ul>`;
        }

        // Normal text
        else {
            html += `<p>${line}</p>`;
        }
    });

    html += `</div>`;
    return html;
};
