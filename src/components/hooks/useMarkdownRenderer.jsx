import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Dark theme
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism"; // Light theme
import { TbCopy } from "react-icons/tb";
import { copyToClipboard } from "../helper/clipboardHelpers";

const useMarkdownRenderer = () => {
    const [copied, setCopied] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(document.documentElement.getAttribute("data-theme") === "dark");

    // Listen for theme changes from [data-theme]
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const theme = document.documentElement.getAttribute("data-theme");
            setIsDarkMode(theme === "dark");
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => observer.disconnect();
    }, []);

    const handleCopy = (code) => {
        copyToClipboard(code, () => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const renderMarkdown = (text) => (
        <ReactMarkdown
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    const codeString = String(children).replace(/\n$/, "");
                    const theme = isDarkMode ? oneDark : vs; // Match [data-theme]

                    return !inline && match ? (
                        <div className="relative">
                            <button
                                className="absolute top-2 right-2 text-gray-400 hover:text-gray-300"
                                onClick={() => handleCopy(codeString)}
                            >
                                <TbCopy size={16} />
                            </button>
                            <SyntaxHighlighter style={theme} language={match[1]} PreTag="div" {...props}>
                                {codeString}
                            </SyntaxHighlighter>
                            {copied && <span className="absolute top-2 right-8 text-xs text-green-400">Copied!</span>}
                        </div>
                    ) : (
                        <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800" {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {text}
        </ReactMarkdown>
    );

    return { renderMarkdown };
};

export default useMarkdownRenderer;
