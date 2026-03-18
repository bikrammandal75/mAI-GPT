import { AiOutlineLink } from "react-icons/ai";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

export default function Share({ isOpen, onClose }) {
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800/90">
                    {/* Header */}
                    <div className="flex items-end justify-between">
                        <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                            Share public link to chat
                        </DialogTitle>
                        <button
                            onClick={onClose}
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-700"
                        >
                            <IoMdClose className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Profile Info */}
                    <div className="mt-6 flex flex-col items-center space-y-3 dark:text-white">
                        <p>Your name, custom instructions, and any messages you add after sharing stay private.</p>
                        {/* input */}
                    </div>
                    <div className="border-theme mt-4 mb-2 flex items-center rounded-full border">
                        <input
                            value="https://mai.com/chat/unique_ID"
                            className="w-full px-4 outline-none dark:text-white"
                        />
                        <button className="bg-theme m-0.5 flex w-48 items-center rounded-full bg-blue-950 px-4 py-2 text-white dark:text-white">
                            <span className="mr-2">
                                <AiOutlineLink />
                            </span>
                            Copy Link
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
