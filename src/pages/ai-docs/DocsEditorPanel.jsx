import React, { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  FiDownload,
  FiMaximize2,
  FiMinimize2,
  FiPlus,
  FiMinus,
  FiEdit2,
  FiBold,
  FiItalic,
  FiUnderline,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiList,
  FiChevronDown,
  FiFileText,
  FiSave,
  FiRotateCcw,
  FiRotateCw,
  FiType, // Added for font icon
  FiSearch, // Added for modern searchbar
  FiCheck   // Added for active selection
} from "react-icons/fi";
import { AiOutlineStrikethrough } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { MdFormatListNumbered } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

// List of 20 popular Google Fonts
const GOOGLE_FONTS = [
  // Sans-Serif (Modern & Clean)
  "Inter", "Roboto", "Open Sans", "Lato", "Montserrat",
  "Poppins", "Raleway", "Ubuntu", "Nunito", "PT Sans",
  "Josefin Sans", "Quicksand", "Source Sans Pro", "Work Sans", "Fira Sans",
  "Mulish", "Kanit", "Barlow", "Titillium Web", "Heebo",

  // Serif (Classic & Elegant)
  "Playfair Display", "Merriweather", "Lora", "PT Serif", "Arvo",
  "Crimson Text", "Libre Baskerville", "EB Garamond", "Bree Serif", "Noto Serif",
  "Domine", "Old Standard TT", "Zilla Slab", "Prata", "Vollkorn",

  // Display & Bold
  "Oswald", "Bebas Neue", "Abel", "Righteous", "Archivo Black",
  "Cinzel", "Abril Fatface", "Permanent Marker", "Alfa Slab One", "Luckiest Guy",

  // Handwriting & Script
  "Dancing Script", "Pacifico", "Caveat", "Satisfy", "Shadows Into Light"
];

const DocsEditorPanel = ({ initialContent = "", onChange, onToggleExpand }) => {

  const menuRef = useRef(null);
  const iframeRef = useRef(null);
  const debounceRef = useRef(null);
  const fontDropdownRef = useRef(null); // Ref for outside click detection

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [fontOpen, setFontOpen] = useState(false); // Font menu state
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [docTitle, setDocTitle] = useState("Untitled Document");
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [isDownloading, setIsDownloading] = useState(false);


  /* ===== CLOSE DROPDOWNS ON CLICK OUTSIDE ===== */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setOpen(false);
      // Close font dropdown if clicking outside
      if (fontDropdownRef.current && !fontDropdownRef.current.contains(event.target)) {
        setFontOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ===== AUTO TITLE FROM CONTENT ===== */
  useEffect(() => {
    if (!initialContent) return;
    const match = initialContent.match(/<h1[^>]*>(.*?)<\/h1>/i);
    if (match?.[1]) {
      setDocTitle(match[1].replace(/<[^>]+>/g, "").trim());
    }
  }, [initialContent]);

  /* ===== LOAD EDITOR ===== */
  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = buildIframeHTML(initialContent);
    }
  }, []);

  const buildIframeHTML = (html) => `
<!DOCTYPE html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=${GOOGLE_FONTS.map(f => f.replace(/ /g, '+')).join('&family=')}&display=swap" rel="stylesheet">
<style>
body{margin:0;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#334155;overflow:hidden;} /* Hide iframe scrollbar */
#editor{min-height:100vh;outline:none;}
[contenteditable]:empty:before{content:"Start typing...";color:#cbd5e1}
${GOOGLE_FONTS.map(font => `.font-${font.replace(/\s+/g, '-')} { font-family: '${font}'; }`).join('\n')}
</style>
</head>
<body>
<div id="editor" contenteditable="true">${html}</div>
<script>
const editor=document.getElementById("editor");
let timer;
editor.addEventListener("input",()=>{
clearTimeout(timer);
timer=setTimeout(()=>parent.postMessage({type:"EDITOR_UPDATE",html:editor.innerHTML},"*"),300);
});
</script>
</body>
</html>`;

  useEffect(() => {
    const receive = (e) => {
      if (e.data?.type !== "EDITOR_UPDATE") return;
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        setContent(e.data.html);
        onChange?.(e.data.html);
      }, 200);
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [onChange]);

  const exec = (command, value = null) => {
    const doc =
      iframeRef.current?.contentDocument ||
      iframeRef.current?.contentWindow.document;
    doc.execCommand(command, false, value);
    iframeRef.current.contentWindow.focus();
  };

  const download = (blob, name) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = name; a.click();
    URL.revokeObjectURL(url);
    setOpen(false);
  };

  const exportHTML = () => download(new Blob([content], { type: "text/html" }), `${docTitle}.html`);
  const exportWord = () => download(new Blob([`<html><body>${content}</body></html>`], { type: "application/msword" }), `${docTitle}.docx`);

  const exportPDF = async () => {
    try {
      setIsDownloading(true);

      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      const editor = iframeDoc.getElementById("editor");

      const canvas = await html2canvas(editor, {
        scale: 3,
        useCORS: true,
        backgroundColor: "#ECFEFF",
        logging: false,
        windowWidth: editor.scrollWidth,
        windowHeight: editor.scrollHeight
      });

      const imgData = canvas.toDataURL("image/png", 1.0);

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
      pdf.save(`${docTitle}.pdf`);

    } catch (err) {
      console.error("PDF export failed:", err);
    } finally {
      setIsDownloading(false);
    }
  };


  // Filter fonts based on search
  const filteredFonts = GOOGLE_FONTS.filter(font =>
    font.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`flex flex-col bg-[#F8FAFC] transition-all ${isExpanded ? "fixed inset-0 z-[999]" : "h-full"}`}>

      {/* ================= ONLY HEADER UPDATED ================= */}

      <header className="sticky top-0 z-40 bg-white border-slate-200">

        <div className="flex items-center justify-between px-6 py-3">

          <div className="flex items-center gap-3">

            <div className="p-2 rounded-lg bg-blue-600 text-white">
              <FiFileText size={10} />
            </div>

            <div className="group flex items-center gap-2">

              <input
                value={docTitle}
                disabled={!isEditingTitle}
                onChange={(e) => setDocTitle(e.target.value)}
                onBlur={() => setIsEditingTitle(false)}
                className={`text-base font-semibold bg-transparent outline-none border-b-2 transition-all
                  ${isEditingTitle
                    ? "border-blue-500 text-slate-900"
                    : "border-transparent hover:border-slate-300"}
                `}
              />

              <button
                onClick={() => setIsEditingTitle(true)}
                className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-blue-600 transition"
              >
                <FiEdit2 size={14} />
              </button>

            </div>
          </div>

          <div className="flex items-center gap-2">

            <button
              onClick={() => navigate("/ai-docs")}
              className="px-3 py-1.5 text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition"
            >
              <IoMdAdd size={18} />
            </button>

            <button
              onClick={() => {
                document.body.style.overflow = !isExpanded ? "hidden" : "auto";
                setIsExpanded(!isExpanded);
                onToggleExpand?.(!isExpanded);
              }}
              className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
            >
              {isExpanded ? <FiMinimize2 /> : <FiMaximize2 />}
            </button>

            <div ref={menuRef} className="relative">

              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-black rounded-lg text-sm hover:bg-gray-200 transition"
              >
                <FiDownload size={15} /> Export <FiChevronDown size={13} />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden">
                  <button onClick={exportHTML} className="w-full px-4 py-2 text-left text-sm hover:bg-slate-50">Export HTML</button>
                  <button onClick={exportWord} className="w-full px-4 py-2 text-left text-sm hover:bg-slate-50">Export Word</button>
                  <button
                    onClick={exportPDF}
                    disabled={isDownloading}
                    className={`w-full px-4 py-2 text-left text-sm font-medium flex items-center gap-2
    ${isDownloading ? "opacity-60 cursor-not-allowed" : "hover:bg-slate-50"}
  `}
                  >
                    {isDownloading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-600 border-t-transparent rounded-full animate-spin" />
                        Downlading...
                      </>
                    ) : (
                      "Download PDF"
                    )}
                  </button>

                </div>
              )}

            </div>
          </div>
        </div>
      </header>

      {/* ================= EVERYTHING BELOW UNCHANGED ================= */}

      <main className="flex-1 flex overflow-hidden">

        <div className="mx-auto max-w-[1000px] p-2 flex flex-col w-full">

          <div className="bg-white rounded-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.12)] flex flex-col h-full overflow-hidden">

            {/* TOOLBAR */}
            <div className="flex justify-center border-b border-slate-100 py-2 bg-slate-50 sticky top-0 z-20">
              <div className="flex items-center gap-1.5 px-3 rounded-2xl text-slate-600">

                <ToolbarButton onClick={() => exec("undo")} icon={<FiRotateCcw />} />
                <ToolbarButton onClick={() => exec("redo")} icon={<FiRotateCw />} />

                <div className="w-[1px] h-4 bg-slate-300 mx-1" />

                {/* FONT DROPDOWN - REDESIGNED MODERN WITH SEARCH */}
                <div className="relative" ref={fontDropdownRef}>
                  <button
                    onClick={() => setFontOpen(!fontOpen)}
                    className="flex items-center justify-between gap-2 px-3 py-1.5 min-w-[150px] text-sm font-medium rounded-lg hover:bg-white hover:shadow-sm border  border-slate-200 hover:border-slate-200 transition-all text-slate-700 bg-transparent"
                  >
                    <span className="truncate text-left flex-1" style={{ fontFamily: selectedFont }}>{selectedFont}</span>
                    <FiChevronDown size={14} className={`text-slate-400 transition-transform ${fontOpen ? "rotate-180" : ""}`} />
                  </button>

                  {fontOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl z-[100] p-1.5 animate-in slide-in-from-top-1 duration-150">
                      {/* Search Bar */}
                      <div className="flex items-center gap-2 px-3 py-2 mb-1 bg-slate-50 rounded-lg border border-slate-100">
                        <FiSearch size={14} className="text-slate-400" />
                        <input
                          autoFocus
                          placeholder="Search fonts..."
                          className="bg-transparent border-none outline-none text-sm w-full text-slate-600 placeholder:text-slate-400 font-sans"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>

                      {/* Scrollable List */}
                      <div className="max-h-60 overflow-y-auto overflow-x-hidden">
                        {filteredFonts.length > 0 ? (
                          filteredFonts.map((font) => (
                            <button
                              key={font}
                              onClick={() => {
                                setSelectedFont(font);
                                exec("fontName", font);
                                setFontOpen(false);
                                setSearchTerm("");
                              }}
                              className={`w-full flex items-center justify-between px-3 py-2 text-[14px] rounded-lg mb-0.5 transition-all ${selectedFont === font ? "bg-blue-50 text-blue-600 font-semibold" : "text-slate-600 hover:bg-slate-50"}`}
                              style={{ fontFamily: font }}
                            >
                              {font}
                              {selectedFont === font && <FiCheck size={14} className="text-blue-500" />}
                            </button>
                          ))
                        ) : (
                          <div className="text-center py-4 text-xs text-slate-400">No results found</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-[1px] h-4 bg-slate-300 mx-1" />

                <ToolbarButton onClick={() => exec("bold")} icon={<FiBold />} />
                <ToolbarButton onClick={() => exec("italic")} icon={<FiItalic />} />
                <ToolbarButton onClick={() => exec("underline")} icon={<FiUnderline />} />
                <ToolbarButton onClick={() => exec("strikeThrough")} icon={<AiOutlineStrikethrough />} />

                <div className="w-[1px] h-4 bg-slate-300 mx-1" />

                <ToolbarButton onClick={() => exec("justifyLeft")} icon={<FiAlignLeft />} />
                <ToolbarButton onClick={() => exec("justifyCenter")} icon={<FiAlignCenter />} />
                <ToolbarButton onClick={() => exec("justifyRight")} icon={<FiAlignRight />} />

                <div className="w-[1px] h-4 bg-slate-300 mx-1" />

                <ToolbarButton onClick={() => exec("insertUnorderedList")} icon={<FiList />} />
                <ToolbarButton onClick={() => exec("insertOrderedList")} icon={<MdFormatListNumbered />} />
              </div>
            </div>

            {/* SINGLE SCROLL AREA */}
            <div className="flex-1 overflow-y-auto bg-slate-100">

              <iframe
                ref={iframeRef}
                className="w-full min-h-[2000px] border-none outline-none bg-white"
                sandbox="allow-scripts allow-same-origin"
                title="Editor"
              />

            </div>

          </div>
        </div>
      </main>

    </div>
  );
};

const ToolbarButton = ({ onClick, icon }) => (
  <button onClick={onClick} className="p-2 hover:bg-slate-100 hover:text-blue-600 rounded-lg transition-all active:scale-90">
    {React.cloneElement(icon, { size: 18 })}
  </button>
);

export default DocsEditorPanel;