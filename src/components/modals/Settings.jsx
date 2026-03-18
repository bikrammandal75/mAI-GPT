import { BiChevronDown } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Dialog, DialogPanel, DialogTitle, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useModel } from "../context/ModelContext";

export default function Settings({ isOpen, onClose }) {
    const [theme, setTheme] = useState(() => {
        return (
            localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light")
        );
    });

    const [chatHistory, setChatHistory] = useState(true);
    // const [selectedModel, setSelectedModel] = useState("GPT-4");
    const { models, selectedModel, setSelectedModel } = useModel();

    // Apply theme on load and when theme changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme.toLowerCase());
        document.documentElement.classList.toggle("dark", theme === "Dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                            Settings
                        </DialogTitle>
                        <button
                            onClick={onClose}
                            className="rounded-md p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-zinc-700"
                        >
                            <CgClose className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="mt-4 space-y-6">
                        {/* General Settings */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">General</h3>
                            <div className="relative mt-3 space-y-3">
                                {/* Theme Selection */}
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-800 dark:text-gray-300">Theme</p>
                                    <div className="w-fit text-right">
                                        <Menu>
                                            <MenuButton className="border-theme inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm/6 font-semibold focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:bg-white/40 dark:bg-zinc-800 dark:text-white dark:data-[hover]:bg-zinc-700 dark:data-[open]:bg-zinc-700">
                                                {theme}
                                                <span>
                                                    <BiChevronDown />
                                                </span>
                                            </MenuButton>

                                            <MenuItems
                                                transition
                                                anchor="bottom end"
                                                className="border-theme mt-1 ml-20 w-40 origin-top-right rounded-xl border bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 dark:bg-zinc-800 dark:text-white"
                                            >
                                                <MenuItem>
                                                    <button
                                                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-zinc-800/10 dark:data-[focus]:bg-white/10"
                                                        onClick={() => setTheme("dark")}
                                                    >
                                                        Dark
                                                    </button>
                                                </MenuItem>
                                                <MenuItem>
                                                    <button
                                                        className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-zinc-800/10 dark:data-[focus]:bg-white/10"
                                                        onClick={() => setTheme("light")}
                                                    >
                                                        Light
                                                    </button>
                                                </MenuItem>
                                            </MenuItems>
                                        </Menu>
                                    </div>
                                </div>
                                {/* Model Selection */}
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 dark:text-gray-300">Model</span>
                                    <Menu>
                                        <MenuButton className="border-theme inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm/6 font-semibold focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[hover]:bg-white/40 dark:bg-zinc-800 dark:text-white dark:data-[hover]:bg-zinc-700 dark:data-[open]:bg-zinc-700">
                                            {selectedModel?.name ?? "Default"}
                                            <span>
                                                <BiChevronDown />
                                            </span>
                                        </MenuButton>

                                        <MenuItems
                                            transition
                                            anchor="bottom end"
                                            className="border-theme mt-1 ml-20 h-72 origin-top-right rounded-xl border bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 dark:bg-zinc-800 dark:text-white"
                                        >
                                            {models?.map((t, index) => (
                                                <MenuItem key={index}>
                                                    <button
                                                        className="group flex w-[300px] flex-col items-center rounded-lg px-3 py-1.5 data-[focus]:bg-zinc-800/10 dark:data-[focus]:bg-white/10"
                                                        onClick={() => setSelectedModel(t)}
                                                    >
                                                        <h6 className="text-base font-medium">{t?.name ?? ""}</h6>
                                                        <p className="opacity-70">{t?.company ?? ""}</p>
                                                    </button>
                                                </MenuItem>
                                                // <div
                                                //     key={index}
                                                //     className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-zinc-700"
                                                //     onClick={() => {
                                                //         token
                                                //             ? (setSelectedModel(t), setShowModelDropdown(false))
                                                //             : setIsReminderModalOpen(true);
                                                //     }}
                                                // >
                                                //     <h6 className="text-base font-medium">{t?.name ?? ""}</h6>
                                                //     <p className="opacity-70">{t?.company ?? ""}</p>
                                                // </div>
                                            ))}
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        {/* Data Controls */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Data Controls</h3>
                            <div className="mt-3 space-y-3">
                                {/* Chat History Toggle */}
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-800 dark:text-gray-300">Chat History</span>
                                    <Switch
                                        checked={chatHistory}
                                        onChange={setChatHistory}
                                        className={`${chatHistory ? "bg-green-600" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition`}
                                    >
                                        <span
                                            className={`${chatHistory ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                        />
                                    </Switch>
                                </div>

                                {/* Export Data Button */}
                                {/* <button className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-center text-sm text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                                    Export Data
                                </button> */}
                            </div>
                        </div>

                        {/* Account Section */}
                        <div className="flex w-full items-center justify-between gap-4">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Account</h3>
                            <button className="w-fit rounded-md border border-red-500 px-3 py-1 text-center text-sm text-red-600 hover:bg-red-100">
                                Log Out
                            </button>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
