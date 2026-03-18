import jsPDF from "jspdf";
import { sanitizeStreamingText } from "./sanitizeStreamingText";

export const downloadPDF = async (titleText, fullText) => {
    const doc = new jsPDF();
    const lineHeight = 10;
    const margin = 20;
    const pageHeight = doc.internal.pageSize.height;

    let y = margin;

    const cleanText = sanitizeStreamingText(fullText);

    doc.setFontSize(16);
    doc.text(titleText, margin, y);
    y += 20;

    doc.setFontSize(12);

    const lines = doc.splitTextToSize(cleanText, 170);
    lines.forEach((line) => {
        if (y + lineHeight > pageHeight - margin) {
            doc.addPage();
            y = margin;
        }
        doc.text(line, margin, y);
        y += lineHeight;
    });

    doc.save("chat.pdf");
};
