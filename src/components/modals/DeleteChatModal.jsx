import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

export default function DeleteChatModal({ isOpen, onClose, onDelete }) {
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800/90">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                            Delete Chat
                        </DialogTitle>
                        <button
                            onClick={onClose}
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-zinc-700"
                        >
                            <IoMdClose className="h-5 w-5" />
                        </button>
                    </div>

                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                        Are you sure you want to delete this chat? This action cannot be undone.
                    </p>

                    <div className="mt-6 flex justify-end gap-2">
                        <button
                            onClick={onClose}
                            className="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onDelete}
                            className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
