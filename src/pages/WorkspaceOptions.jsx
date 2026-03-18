import { useNavigate } from "react-router-dom";
import {
    FiGrid,
    FiFileText,
    FiImage,
    FiVideo,
    FiMessageSquare,
    FiLayers,
    FiCode,
    FiPenTool,
    FiScissors,
    FiUsers,
    FiFilePlus,
    FiZap,
} from "react-icons/fi";

const options = [
    // {
    //     label: "Custom Super Agent",
    //     icon: FiLayers,
    //     route: "/agents/custom",
    // },
    // {
    //     label: "AI Slides",
    //     icon: FiFilePlus,
    //     route: "/slides",
    // },
    // {
    //     label: "AI Sheets",
    //     icon: FiGrid,
    //     route: "/sheets",
    // },
    // {
    //     label: "AI Docs",
    //     icon: FiFileText,
    //     route: "/ai-docs",
    // },
    // {
    //     label: "AI Developer",
    //     icon: FiCode,
    //     route: "/developer",
    // },
    // {
    //     label: "AI Designer",
    //     icon: FiPenTool,
    //     route: "/designer",
    // },
    // {
    //     label: "Clip Genius",
    //     icon: FiScissors,
    //     route: "/clip-genius",
    // },
    // {
    //     label: "AI Chat",
    //     icon: FiMessageSquare,
    //     route: "/",
    //     badge: "UNLIMITED",
    // },
    // {
    //     label: "AI Image",
    //     icon: FiImage,
    //     route: "/image",
    //     badge: "UNLIMITED",
    // },
    // {
    //     label: "AI Video",
    //     icon: FiVideo,
    //     route: "/video",
    // },
    // {
    //     label: "AI Meeting Notes",
    //     icon: FiUsers,
    //     route: "/meeting-notes",
    // },
    // {
    //     label: "AI Agents",
    //     icon: FiZap,
    //     route: "/agents",
    // },
];

const WorkspaceOptions = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
            {options.map((item, index) => {
                const Icon = item.icon;

                return (
                    <div
                        key={index}
                        onClick={() => navigate(item.route)}
                        className="flex flex-col items-center cursor-pointer group w-[90px]"
                    >
                        {/* Icon */}
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full 
                            bg-gray-100 dark:bg-zinc-800 
                            group-hover:bg-indigo-50 dark:group-hover:bg-zinc-700 
                            transition-all duration-200">
                            <Icon className="text-xl text-gray-700 dark:text-gray-200" />

                            {/* Badge */}
                            {item.badge && (
                                <span className="absolute -bottom-2 px-2 py-[2px] 
                                 text-[10px] rounded-full 
                                 bg-yellow-400 text-black font-semibold">
                                    {item.badge}
                                </span>
                            )}
                        </div>

                        {/* Label */}
                        <p className="mt-2 text-center text-sm text-gray-700 
                          dark:text-gray-300 group-hover:text-indigo-600 leading-tight">
                            {item.label}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default WorkspaceOptions;
