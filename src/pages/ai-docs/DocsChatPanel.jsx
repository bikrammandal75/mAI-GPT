import { useState, useRef } from "react";
import { Paperclip, Mic, CornerDownLeft, ArrowLeft } from "lucide-react"; // Added ArrowLeft

const DocsChatPanel = ({ prompt, response, onSend, onBack }) => { // Added onBack prop
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  const MAX_HEIGHT = 160;

  const hasInitialPrompt = prompt && prompt.trim() !== "";
  const hasResponse = response && response.trim() !== "";

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
    setInput(e.target.value);
    autoResize();
  };

  const handleSend = () => {
    if (!input.trim()) return;
    onSend?.(input.trim());
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">

      {/* ===== HEADER SECTION ===== */}
      <div className="flex items-center px-2 py-3">
        <button
          onClick={onBack}
          className="p-2 rounded-full transition-colors text-gray-800 cursor-pointer"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* ===== CHAT AREA ===== */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">

        {!hasInitialPrompt ? (
          <div className="h-full flex flex-col items-center justify-start text-center max-w-lg mx-auto px-6 pt-48"> {/* Adjusted pt-60 to pt-40 due to new header */}

            <h2 className="text-3xl font-semibold text-gray-800 mb-5">
              Template Selected
            </h2>

            <ul className="text-base text-gray-800 space-y-2 text-left">
              <li>• You've chosen a template to start with</li>
              <li>• Tell me what changes or customizations you'd like to make</li>
              <li>• I'll help you modify the content to match your needs</li>
            </ul>

          </div>


        ) : (
          <div className="max-w-3xl mx-auto space-y-4">

            <div className="bg-white border rounded-2xl px-4 py-3 text-sm text-gray-800 shadow-sm">
              {prompt}
            </div>

            {hasResponse && (
              <div className="bg-gray-100 border rounded-2xl px-4 py-3 text-sm text-gray-800 whitespace-pre-wrap">
                {response}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ===== MODERN INPUT (MATCHES AIDocsHome) ===== */}
      <div className="bg-white px-4 py-5">

        <div className="mx-auto w-full max-w-3xl bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-2">

          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask to refine, rewrite, or expand the document..."
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

            <Paperclip
              size={18}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            />

            <Mic
              size={18}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            />

            <button
              onClick={handleSend}
              className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
            >
              <CornerDownLeft size={18} className="text-gray-700" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsChatPanel;
