import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Customization({ isOpen, onClose }) {
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState("Medium");
    const [density, setDensity] = useState("Comfortable");

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800/90">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                            Customization
                        </DialogTitle>
                        <button
                            onClick={onClose}
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"
                        >
                            <IoMdClose className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-4 space-y-6">
                        {/* Theme Toggle */}
                        <div className="flex items-center justify-between">
                            <span className="text-gray-800 dark:text-gray-300">Dark Mode</span>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300"
                            >
                                {darkMode ? <MdDarkMode className="text-blue-600" /> : <MdOutlineLightMode />}
                                {darkMode ? "Dark" : "Light"}
                            </button>
                        </div>

                        {/* Font Size Selection */}
                        <div className="flex items-center justify-between">
                            <span className="text-gray-800 dark:text-gray-300">Font Size</span>
                            <button className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                                {fontSize}
                                <IoMdArrowDropdown />
                            </button>
                        </div>

                        {/* UI Density */}
                        <div className="flex items-center justify-between">
                            <span className="text-gray-800 dark:text-gray-300">UI Density</span>
                            <button className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300">
                                {density}
                                <IoMdArrowDropdown />
                            </button>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
