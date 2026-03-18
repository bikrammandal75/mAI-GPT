import { AiOutlineLink } from "react-icons/ai";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

export default function LoginReminder({ isOpen, onClose }) {
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800/90">
                    {/* Header */}
                    <div className="flex items-end justify-between">
                        <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                            Login to change modal
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
                        <p>
                            To experience the full capabilities of mAI like different models uasage, chat history, new
                            chat etc, please log in.
                        </p>
                    </div>
                    <div className="mt-4 mb-2 flex items-center justify-center rounded-full">
                        <Link to="/login">
                            <button className="border-theme w-full min-w-40 rounded-full border px-4 py-1 font-semibold dark:bg-white">
                                Login
                            </button>
                        </Link>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
