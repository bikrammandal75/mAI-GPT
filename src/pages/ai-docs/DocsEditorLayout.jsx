import { useState } from "react";
import DocsChatPanel from "./DocsChatPanel";
import DocsEditorPanel from "./DocsEditorPanel";

const DocsEditorLayout = ({ doc }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleBack = () => {
        window.history.back();

        // router.push('/ai-docs'); 
        // navigate(-1);
    };

    return (
        <div className="flex h-full bg-gray-50 relative">

            {/* CHAT — hide when fullscreen */}
            {!isExpanded && (
                <div className="w-[37%] bg-white flex flex-col">
                    <DocsChatPanel
                        prompt={doc.prompt}
                        response={doc.content}
                        onBack={handleBack}
                    />
                </div>
            )}

            {/* EDITOR */}
            <div className="flex-1 bg-white">
                <DocsEditorPanel
                    initialContent={doc.content}
                    onToggleExpand={setIsExpanded}
                />
            </div>

        </div>
    );
};

export default DocsEditorLayout;
