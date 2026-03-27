import { useState, useEffect } from "react";
import { useChat } from "../components/context/ChatContext";
import { FiRotateCcw, FiEye, FiSave, FiMail } from "react-icons/fi";

const EmailTemplatePanel = () => {
    const { outreachTemplate, jobData, setJobData } = useChat();

    const [subject, setSubject] = useState("");
    const [templateText, setTemplateText] = useState("");

    // store original values
    const [originalSubject, setOriginalSubject] = useState("");
    const [originalTemplateText, setOriginalTemplateText] = useState("");
    const [isPreview, setIsPreview] = useState(false);
    const previewValues = {
        "{First Name}": jobData?.firstName || "Michael",
        "{Last Name}": jobData?.lastName || "Johnson",
        "{Full Name}": jobData?.fullName || "Michael Johnson",
        "{Company}": jobData?.company || "Mandal Solutions",
        "{Job Title}": jobData?.jobTitle || "Senior Software Engineer",
        "{Location}": jobData?.location || "San Francisco, CA",
        "{Recruiter Name}": jobData?.recruiterName || "Emily Davis",
        "{Recruiter Title}": jobData?.recruiterTitle || "Lead Technical Recruiter"
    };

    const applyPreview = (text) => {
        if (!text) return "";

        let result = text;

        Object.entries(previewValues).forEach(([tag, value]) => {
            const regex = new RegExp(tag.replace(/[{}]/g, "\\$&"), "g");

            if (isPreview) {
                result = result.replace(regex, `<strong>${value}</strong>`);
            } else {
                result = result.replace(regex, value);
            }
        });

        return result;
    };

    const previewSubject = applyPreview(subject);
    const previewBody = applyPreview(templateText);

    useEffect(() => {
        if (!outreachTemplate) return;

        const subjectMatch = outreachTemplate.match(/subject\s*[:\-]\s*(.*)/i);
        const body = outreachTemplate.replace(/subject\s*[:\-]\s*.*\n?/i, "").trim();

        const parsedSubject = subjectMatch ? subjectMatch[1].trim() : "";

        setSubject(parsedSubject);
        setTemplateText(body);

        // save original values
        setOriginalSubject(parsedSubject);
        setOriginalTemplateText(body);

    }, [outreachTemplate]);

    const handleReset = () => {
        setSubject(originalSubject);
        setTemplateText(originalTemplateText);
    };

    return (
        <div className="h-full flex flex-col bg-[#F8F9FA] font-sans antialiased">

            <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200/60 z-10">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                        <FiMail className="text-white" size={13} />
                    </div>
                    <h2 className="text-sm font-bold text-gray-800 tracking-tight">
                        Email Template
                    </h2>
                </div>
            </header>

            <main className="flex-grow overflow-y-auto p-6 md:p-5 flex flex-col items-center">

                <div className="w-full max-w-4xl bg-white min-h-[580px] rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden">

                    <div className="px-5 py-7 border-b border-gray-50 flex items-center gap-6 group transition-colors focus-within:bg-blue-50/30">
                        <span className="text-[16px] font-bold text-gray-800 uppercase w-14">
                            Subject
                        </span>
                        {isPreview ? (
                            <div
                                className="flex-grow text-[16px] font-bold text-gray-800"
                                dangerouslySetInnerHTML={{ __html: previewSubject }}
                            />
                        ) : (
                            <input
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="flex-grow text-[16px] font-bold text-gray-800 outline-none border-none bg-transparent"
                                placeholder="Enter subject line..."
                            />
                        )}
                    </div>

                    <div className="px-5 py-0 flex-grow">
                        {isPreview ? (
                            <div
                                className="w-full h-full min-h-[400px] text-[16px] leading-[1.8] text-gray-800 bg-transparent whitespace-pre-wrap"
                                dangerouslySetInnerHTML={{ __html: previewBody }}
                            />
                        ) : (
                            <textarea
                                value={templateText}
                                onChange={(e) => setTemplateText(e.target.value)}
                                className="w-full h-full min-h-[400px] text-[16px] leading-[1.8] text-gray-800 outline-none border-none resize-none bg-transparent"
                                placeholder="Write your message here..."
                            />
                        )}
                    </div>
                </div>
            </main>

            <footer className="px-6 py-2 bg-white border-t border-gray-200 flex items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.03)] z-10">

                <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                >
                    <FiRotateCcw size={15} />
                    Reset
                </button>

                <div className="flex items-center gap-3">
                    {/* <button className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all active:scale-95">
                        <FiEye size={15} />
                        Preview
                    </button> */}

                    <button className="flex items-center gap-2 px-6 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95">
                        <FiSave size={15} />
                        Save
                    </button>
                    <button
                        onClick={() => setIsPreview(!isPreview)}
                        className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all active:scale-95"
                    >
                        <FiEye size={15} />
                        {isPreview ? "Edit" : "Preview"}
                    </button>
                </div>

            </footer>
        </div>
    );
};

export default EmailTemplatePanel;