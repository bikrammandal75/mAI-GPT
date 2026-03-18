import { useState, useEffect } from "react";
import { useChat } from "../components/context/ChatContext";
import { FiMail, FiSave, FiRotateCcw } from "react-icons/fi";

const EmailTemplatePanel = () => {
    const { outreachTemplate } = useChat();

    const [subject, setSubject] = useState("");
    const [templateText, setTemplateText] = useState("");

    useEffect(() => {
        if (!outreachTemplate) return;

        let body = outreachTemplate;
        let extractedSubject = "";

        // Extract Subject from template
        const subjectMatch = outreachTemplate.match(/subject\s*[:\-]\s*(.*)/i);

        if (subjectMatch) {
            extractedSubject = subjectMatch[1].trim();

            // Remove subject line from body
            body = outreachTemplate.replace(/subject\s*[:\-]\s*.*\n?/i, "").trim();
        }

        setSubject(extractedSubject);
        setTemplateText(body);

    }, [outreachTemplate]);

    const handleReset = () => {
        if (!outreachTemplate) return;

        let body = outreachTemplate;
        let extractedSubject = "";

        const subjectMatch = outreachTemplate.match(/subject\s*[:\-]\s*(.*)/i);

        if (subjectMatch) {
            extractedSubject = subjectMatch[1].trim();
            body = outreachTemplate.replace(/subject\s*[:\-]\s*.*\n?/i, "").trim();
        }

        setSubject(extractedSubject);
        setTemplateText(body);
    };

    return (
        <div className="h-full flex flex-col bg-white">

            {/* HEADER */}
            <div className="flex items-center gap-2 px-6 py-4 ">
                <FiMail className="text-blue-600" />
                <h2 className="font-semibold text-gray-800">
                    Email Template
                </h2>
            </div>

            {/* EDITOR */}
            <div className="flex flex-col flex-grow p-6 gap-6">

                {/* SUBJECT */}
                <div>
                    <label className="text-sm text-gray-500 mb-2 block">
                        Subject
                    </label>

                    <input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full border rounded-md px-3 py-2 text-sm outline-none "
                        placeholder="Enter email subject..."
                    />
                </div>

                {/* BODY */}
                <div className="flex flex-col flex-grow">
                    <label className="text-sm text-gray-500 mb-2">
                        Email Body
                    </label>

                    <textarea
                        value={templateText}
                        onChange={(e) => setTemplateText(e.target.value)}
                        className="flex-grow w-full resize-none outline-none text-sm leading-relaxed border rounded-md p-3 "
                        placeholder="Write your outreach email..."
                    />
                </div>

            </div>

            {/* FOOTER */}
            <div className="flex justify-end gap-3 px-6 py-4">

                <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-3 py-2 text-sm border rounded-md hover:bg-gray-50"
                >
                    <FiRotateCcw />
                    Reset
                </button>

                <button
                    className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    <FiSave />
                    Save
                </button>

            </div>

        </div>
    );
};

export default EmailTemplatePanel;