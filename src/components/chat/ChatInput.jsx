import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineFileText } from "react-icons/ai";
import { useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { FaGlobe, FaMicrophone, FaStopCircle, FaPause, FaFileAlt } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import { useChat } from "../context/ChatContext";
import { startSpeechRecognition } from "../helper/speechHelpers";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ChatInput = ({ disabled }) => {
    const location = useLocation();
    const {
        sendMessage,
        isPaused,
        togglePause,
        uploadFile,
        uploadedFile,
        setUploadedFile,
        isGenerating,
        messages,
        chatParam,
        setChatParam,
        isTypingDone
    } = useChat();
    const fileInputRef = useRef(null);
    const [message, setMessage] = useState("");
    const [isListening, setIsListening] = useState(false);
    const navigate = useNavigate();
    const lastTranscriptRef = useRef("");
    const textareaRef = useRef(null);

    useEffect(() => {
        // debugger;
        setChatParam((prev) => ({
            ...prev,
            chatType: 1,
        }));
    }, [location.pathname]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() || (uploadedFile && !isPaused)) {
            sendMessage(message.trim());
            setMessage("");
            // Clear the uploaded file after submitting the message
            setUploadedFile(null);
        }
    };
    const handleKeyPress = (e) => {
        if (isGenerating || !isTypingDone) {
            e.preventDefault(); // Block all typing + enter
            return;
        }

        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };
    const handleFileUpload = (e) => {
        if (e.target.files.length > 0) {
            uploadFile(e.target.files[0]);
        }
    };
    const handleMicClick = () => {
        if (isListening) {
            window.speechSynthesis.cancel();
            setIsListening(false);
            return;
        }

        const recognition = startSpeechRecognition(
            (transcript) => {
                // Only update if the transcript has grown
                if (transcript.length > lastTranscriptRef.current.length) {
                    lastTranscriptRef.current = transcript;
                    setMessage(transcript);
                }
            }
            ,
            (finalText) => {
                if (finalText.trim()) {
                    lastTranscriptRef.current = finalText.trim(); // update last transcript
                    setMessage(finalText.trim());
                }
            },
            () => {
                setIsListening(false);
                lastTranscriptRef.current = "";
            }
        );

        if (recognition) {
            setIsListening(true);
        }
    };
    const handlePaste = (e) => {
        // Prevent paste if isGenerating is true
        if (isGenerating) {
            e.preventDefault();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="static w-full p-4 dark:border-gray-600">
            <div className="mx-auto flex max-w-[47rem] flex-col rounded-4xl p-3 shadow-[0px_0px_8px_0.1px_#ccc] md:px-4 dark:shadow-[0px_0px_8px_0.1px_#111]">
                {uploadedFile && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <AiOutlineFileText size={18} className="text-blue-500" />
                        <span>{uploadedFile.name}</span>
                        <button
                            onClick={() => {
                                setUploadedFile(null);
                                if (fileInputRef.current) {
                                    fileInputRef.current.value = "";
                                }
                            }}
                            className="text-xs text-red-500 hover:underline"
                        >
                            Remove
                        </button>
                    </div>
                )}

                <textarea
                    ref={textareaRef}
                    value={message}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setMessage(e.target.value)}
                    onPaste={handlePaste} // Add the paste handler here
                    placeholder="Ask anything..."
                    rows={1}
                    className="dark:bg-secondary w-full flex-1 resize-none rounded-lg p-2 py-1 outline-none focus:outline-none dark:text-white"
                    disabled={disabled || isPaused || isGenerating} // Disable when generating
                />
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    id="file-upload"
                    onChange={(e) => {
                        if (!Cookies.get('token')) {
                            e.preventDefault();
                            return;
                        }
                        handleFileUpload(e);
                    }}
                />


                <div className="mt-4 hidden justify-between md:flex">
                    <div className="flex items-center gap-2">
                        {/* <div
                            className="flex cursor-pointer items-center rounded-full border border-zinc-700 p-1.5 hover:bg-zinc-400/20 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-600/70"
                            // onClick={() => {
                            //     handleClearMessages();
                            //     navigate("/");
                            // }}
                        >
                            <AiOutlinePlus size={18} />
                        </div> */}
                        <div className="relative group">
                            <button
                                type="button"
                                className={`flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-2 ${chatParam.chatType === 2
                                    ? "bg-zinc-500 text-white dark:bg-zinc-400"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-700/60 dark:hover:text-white"
                                    }`}
                                onClick={() => {
                                    if (!Cookies.get('token')) {
                                        navigate('/login');
                                        return;
                                    }
                                    setChatParam((prev) => ({
                                        ...prev,
                                        chatType: prev.chatType === 2 ? null : 2,
                                    }));
                                }}
                            >
                                <FaFileAlt size={20} /> <span className="hidden text-sm md:block">Doc</span>
                            </button>

                            {!Cookies.get('token') && (
                                <div className="border absolute mt-2 left-20 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 bg-white text-black text-sm px-2 py-1.5 rounded-md z-10 whitespace-nowrap">
                                    Document search
                                </div>
                            )}

                        </div>

                        <div className="relative group">
                            <button
                                type="button"
                                className={`flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-2 ${chatParam.chatType === 3
                                    ? "bg-zinc-500 text-white dark:bg-zinc-400"
                                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-700/70 dark:hover:text-white"
                                    }`}
                                onClick={() => {
                                    if (!Cookies.get('token')) {
                                        navigate('/login');
                                        return;
                                    }
                                    setChatParam((prev) => ({
                                        ...prev,
                                        chatType: prev.chatType === 3 ? null : 3,
                                    }));
                                }}
                            >
                                <FaGlobe size={15} /> <span className="hidden text-sm md:block">Web</span>
                            </button>

                            {!Cookies.get('token') && (
                                <div className="border absolute mt-2 left-20 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 bg-white text-black text-sm px-2 py-1.5 rounded-md z-10 whitespace-nowrap">
                                    Web search
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="flex items-center gap-2">
                        <div className="relative group inline-block">
                            <label
                                htmlFor="file-upload"
                                onClick={(e) => {
                                    if (!Cookies.get('token')) {
                                        e.preventDefault(); // prevent label click
                                        navigate('/login');
                                    }
                                }}
                                className="flex cursor-pointer items-center gap-1 rounded-2xl px-3 py-2 text-gray-600 hover:bg-gray-200 hover:text-black dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-700/60 dark:hover:text-white"
                            >
                                <AiOutlinePaperClip size={20} />
                            </label>

                            {!Cookies.get('token') && (
                                <div className="border absolute left-20 mt-2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 bg-white text-black text-sm px-2 py-1.5 rounded-md z-10 whitespace-nowrap">
                                    Upload file
                                </div>
                            )}
                        </div>

                        <button
                            type={message.trim() || uploadedFile ? "submit" : "button"}
                            onClick={message.trim() || uploadedFile ? undefined : handleMicClick}
                            disabled={disabled || isPaused || isGenerating}
                            className="flex cursor-pointer items-center gap-2 md:pr-4"
                        >
                            {isGenerating ? (
                                <FaPause className="h-6 w-6 text-red-500" />
                            ) : message.trim() || uploadedFile ? (
                                <IoSend className="h-6 w-6 dark:text-white" />
                            ) : isListening ? (
                                <FaStopCircle className="h-6 w-6 text-red-500" />
                            ) : (
                                <FaMicrophone className="h-6 w-6 dark:text-white" />
                            )}
                        </button>
                    </div>

                </div>
                {/* Mobile Layout */}
                <div className="mt-2 flex items-center justify-between gap-2 md:hidden">
                    <div className="flex items-center gap-1">
                        {/* Doc Upload Button */}
                        <button
                            type="button"
                            className={`flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-2 ${chatParam.chatType === 2
                                ? "bg-zinc-500 text-white dark:bg-zinc-400"
                                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-800/90 dark:hover:text-white"
                                }`}
                            onClick={() => {
                                setChatParam((prev) => ({
                                    ...prev,
                                    chatType: prev.chatType === 2 ? null : 2,
                                }));
                            }}
                        >
                            <FaFileAlt size={20} />
                        </button>

                        {/* Web Button */}
                        <button
                            type="button"
                            className={`flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-2 ${chatParam.chatType === 3
                                ? "bg-zinc-500 text-white dark:bg-zinc-400"
                                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-800/90 dark:hover:text-white"
                                }`}
                            onClick={() => {
                                setChatParam((prev) => ({
                                    ...prev,
                                    chatType: prev.chatType === 3 ? null : 3,
                                }));
                            }}
                        >
                            <FaGlobe size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Upload (Paperclip) Button */}
                        <label
                            htmlFor="file-upload"
                            className={`flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-2 ${uploadedFile
                                ? "bg-zinc-500 text-white dark:bg-zinc-400"
                                : "text-zinc-600 hover:bg-zinc-200 hover:text-black dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-800/90 dark:hover:text-white"
                                }`}
                            onClick={() => {
                                setChatParam((prev) => ({
                                    ...prev,
                                    chatType: prev.chatType === 4 ? null : 4,
                                }));
                            }}
                        >
                            <AiOutlinePaperClip size={20} />
                        </label>

                        {/* Submit or Mic Button */}
                        <button
                            type={message.trim() || uploadedFile ? "submit" : "button"}
                            onClick={message.trim() || uploadedFile ? undefined : handleMicClick}
                            disabled={disabled || isPaused || isGenerating || !isTypingDone}
                            className="flex cursor-pointer items-center gap-2 md:pr-4"
                        >
                            {isGenerating ? (
                                <FaPause className="h-6 w-6 text-red-500" />
                            ) : message.trim() || uploadedFile ? (
                                <IoSend className="h-6 w-6 dark:text-white" />
                            ) : isListening ? (
                                <FaStopCircle className="h-6 w-6 text-red-500" />
                            ) : (
                                <FaMicrophone className="h-6 w-6 dark:text-white" />
                            )}
                        </button>
                    </div>
                </div>

            </div>
            {/* {messages.length === 0 && (
                <div className="mx-auto hidden max-w-3xl justify-center gap-2 py-4 md:flex">
                    <button className="border-theme flex items-center gap-2 rounded-md border px-4 py-1 text-sm hover:bg-gray-200 hover:text-black dark:text-zinc-500 dark:hover:bg-zinc-700/50">
                        <span>
                            <TbPhoto stroke="green" />
                        </span>
                        Create image
                    </button>
                    <button className="border-theme flex items-center gap-2 rounded-md border px-4 py-1 text-sm hover:bg-gray-200 hover:text-black dark:text-zinc-500 dark:hover:bg-zinc-700/50">
                        <span>
                            <AiOutlineFileText className="fill-orange-500" />
                        </span>
                        Summarized text
                    </button>
                    <button className="border-theme flex items-center gap-2 rounded-md border px-4 py-1 text-sm hover:bg-gray-200 hover:text-black dark:text-zinc-500 dark:hover:bg-zinc-700/50">
                        <span>
                            <AiOutlineEye fill="darkblue" />
                        </span>
                        Analyze images
                    </button>
                    <button className="border-theme flex items-center gap-2 rounded-md border px-4 py-1 text-sm hover:bg-gray-200 hover:text-black dark:text-zinc-500 dark:hover:bg-zinc-700/50">
                        <span>
                            <AiOutlineCode fill="purple" />
                        </span>
                        Code
                    </button>
                    <button className="border-theme flex items-center gap-2 rounded-md border px-4 py-1 text-sm hover:bg-gray-200 hover:text-black dark:text-zinc-500 dark:hover:bg-zinc-700/50">
                        More...
                    </button>
                </div>
            )} */}
        </form>
    );
};

export default ChatInput;
