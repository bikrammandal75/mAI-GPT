import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const extractTextFromFile = async (file) => {
    const ext = file.name.split(".").pop().toLowerCase();

    // TXT
    if (ext === "txt") {
        return await file.text();
    }

    // PDF
    if (ext === "pdf") {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let text = "";
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((i) => i.str).join(" ") + "\n";
        }
        return text;
    }

    // DOC / DOCX (basic support)
    if (ext === "doc" || ext === "docx") {
        const buffer = await file.arrayBuffer();
        const textDecoder = new TextDecoder("utf-8");
        return textDecoder.decode(buffer);
    }

    throw new Error("Unsupported file type");
};
