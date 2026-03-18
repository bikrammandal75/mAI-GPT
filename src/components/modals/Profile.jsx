import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function Profile({ isOpen, onClose }) {
    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800/90">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                            Profile
                        </DialogTitle>
                        <button
                            onClick={onClose}
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-zinc-700"
                        >
                            <IoMdClose className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Profile Info */}
                    <div className="mt-6 flex flex-col items-center space-y-3">
                        {/* Profile Picture */}
                        <FaUserCircle className="h-24 w-24 text-gray-400 dark:text-gray-500" />

                        {/* Name */}
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h2>
                            <p className="text-gray-600 dark:text-gray-400">johndoe@example.com</p>
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 w-full space-y-2">
                            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 font-medium text-white hover:bg-blue-500">
                                <MdEdit />
                                Edit Profile
                            </button>
                            <button className="w-full rounded-md bg-zinc-700 px-3 py-2 font-medium text-white hover:bg-zinc-600">
                                Change Profile Picture
                            </button>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
