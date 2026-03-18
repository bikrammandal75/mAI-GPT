import { useState, useEffect, useRef } from "react";
import { Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { allTemplates } from "./templates";
import { extractTextFromFile } from "./utils/fileParser";
import { useNavigate } from "react-router-dom";
import { generateThumbnailFromHTML } from "./utils/htmlToThumbnail";


const categories = [
    "All Templates",
    "Career & Hiring",
    "Professional Messaging",
    "Insights & Reports",
    "Data Collection",
    "Compliance & Accounting",
    "Rent Agreements",
    "Learning Resources",
    "Design & Promotion",
];

const AIDocsHome = ({ onCreate }) => {
    const [value, setValue] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Templates");
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const textareaRef = useRef(null);
    const [thumbnails, setThumbnails] = useState({});
    const MAX_HEIGHT = 160; // ~6–7 lines
    const [loadingTemplates, setLoadingTemplates] = useState(true);

    useEffect(() => {
        const buildThumbnails = async () => {
            const map = {};

            for (const tpl of allTemplates) {
                if (!tpl.content?.trim()) continue;

                const img = await generateThumbnailFromHTML(tpl.content);

                map[tpl.id] = img;

                // render progressively (huge UX improvement)
                setThumbnails(prev => ({ ...prev, [tpl.id]: img }));
            }

            setLoadingTemplates(false);
        };

        buildThumbnails();
    }, []);


    const autoResize = () => {
        const el = textareaRef.current;
        if (!el) return;

        el.style.height = "auto";
        el.style.height = Math.min(el.scrollHeight, MAX_HEIGHT) + "px";

        if (el.scrollHeight > MAX_HEIGHT) {
            el.style.overflowY = "auto";
        } else {
            el.style.overflowY = "hidden";
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
        autoResize();
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            value.trim() && onCreate(value.trim());
        }
    };

    const visibleTemplates =
        activeCategory === "All Templates"
            ? allTemplates
            : allTemplates.filter((t) => t.category === activeCategory);

    const handleFileUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const extractedText = await extractTextFromFile(file);

            onCreate({
                type: "file",
                file,
                text: extractedText,
            });
        } catch (err) {
            console.error("File upload failed:", err);
            alert("Failed to read file");
        } finally {
            e.target.value = "";
        }
    };

    if (loadingTemplates && Object.keys(thumbnails).length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4">
                    GenReact AI Docs
                </h1>

                <div className="flex items-center gap-2 text-gray-500">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300" />
                </div>

                <p className="mt-3 text-gray-400">Loading templates...</p>
            </div>
        );
    }


    return (
        <div className="min-h-screen mt-32 px-4">

            <h1 className="text-3xl font-semibold mb-10 text-gray-900 text-center">
                GenReact AI Docs
            </h1>

            {/* PROMPT CARD */}
            <div className="mx-auto w-full max-w-3xl bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-4">

                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    placeholder="Describe the document you want to create (e.g., Resume, Report, Contract...)"
                    className="
      w-full 
      resize-none 
      outline-none 
      text-base 
      text-gray-800 
      placeholder:text-gray-400 
      leading-relaxed 
      overflow-hidden
      transition-all
    "
                />

                <div className="flex items-center justify-end mt-4 gap-4">
                    <button onClick={() => fileInputRef.current.click()}>
                        <Paperclip size={18} className="text-gray-400 hover:text-gray-600" />
                    </button>

                    <input
                        ref={fileInputRef}
                        type="file"
                        hidden
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFileUpload}
                    />

                    <Mic size={18} className="text-gray-400 hover:text-gray-600" />

                    <button
                        onClick={() => value.trim() && onCreate(value.trim())}
                        className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
                    >
                        <CornerDownLeft size={18} className="text-gray-700" />
                    </button>
                </div>
            </div>

            {/* CATEGORIES */}
            <div className="mt-20 w-full">
                <div className="flex items-center justify-center gap-8 border-b border-gray-100 px-10 overflow-x-auto no-scrollbar">
                    {categories.map((item) => {
                        const isActive = activeCategory === item;
                        return (
                            <button
                                key={item}
                                onClick={() => setActiveCategory(item)}
                                className={`
                        relative pb-2 text-sm font-medium transition-all duration-300 whitespace-nowrap
                        ${isActive
                                        ? "text-blue-600"
                                        : "text-gray-500 hover:text-gray-800"
                                    }
                    `}
                            >
                                {item}
                                {/* Animated Underline */}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-full shadow-[0_-2px_8px_rgba(37,99,235,0.4)]" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* TEMPLATES */}
            <div className="mx-4 mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-[1400px]">
                {visibleTemplates.map((tpl) => (
                    <div
                        key={tpl.id}
                        onClick={() => {
                            navigate(`/ai-docs/${tpl.id}`);
                            onCreate(tpl);
                        }}
                        className="group cursor-pointer"
                    >
                        {/* Preview */}
                        <div className="relative aspect-[3/4] bg-white rounded-xl overflow-hidden shadow-md
 transition-all duration-300 
 group-hover:shadow-xl group-hover:-translate-y-1">

                            {/* BLANK TEMPLATE — modern + style */}
                            {tpl.id === "blank" || !tpl.content?.trim() ? (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 transition">

                                    <div className="text-5xl font-light leading-none mb-2">+</div>

                                    <span className="text-sm font-medium">Blank document</span>

                                </div>
                            ) : thumbnails?.[tpl.id] ? (
                                <img
                                    src={thumbnails[tpl.id]}
                                    alt={tpl.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full animate-pulse bg-gray-200 rounded-xl flex items-center justify-center">
                                    <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
                                </div>
                            )}

                        </div>

                        {/* Title */}
                        {/* <p className="mt-3 text-sm font-medium text-gray-800 text-center">
                            {tpl.title}
                        </p> */}
                    </div>

                ))}
            </div>
        </div>
    );
};

export default AIDocsHome;
