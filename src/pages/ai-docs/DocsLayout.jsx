import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AIDocsHome from "./AIDocsHome";
import DocsEditorLayout from "./DocsEditorLayout";
import { GENERATE_DOC } from "./docsApi";
import { formatResumeHTML } from "./utils/formatResume";
import { allTemplates } from "./templates";

const DocsLayout = () => {
    const { docId } = useParams();
    const [activeDoc, setActiveDoc] = useState(null);
    const [loading, setLoading] = useState(false);

    /* ========= SYNC UI WITH URL ========= */
    useEffect(() => {
        if (!docId) {
            setActiveDoc(null); // BACK BUTTON FIX ✅
            return;
        }

        const tpl = allTemplates.find(t => t.id === docId);
        if (tpl) {
            setActiveDoc({
                id: tpl.id,
                prompt: "",
                content: tpl.content,
            });
        }
    }, [docId]);

    const handleCreateDoc = async (input) => {
        if (typeof input === "object" && input?.content) {
            setActiveDoc({
                id: input.id || Date.now(),
                prompt: "",
                content: input.content,
            });
            return;
        }

        if (typeof input === "object" && input?.type === "file") {
            try {
                setLoading(true);
                const aiResponse = await GENERATE_DOC({
                    prompt: `Improve and format:\n${input.text}`,
                });
                setActiveDoc({
                    id: Date.now(),
                    prompt: "Uploaded document",
                    content: formatResumeHTML(aiResponse),
                });
            } finally {
                setLoading(false);
            }
            return;
        }

        if (typeof input === "string") {
            try {
                setLoading(true);
                const aiResponse = await GENERATE_DOC({
                    prompt: `Create document:\n${input}`,
                });
                setActiveDoc({
                    id: Date.now(),
                    prompt: input,
                    content: formatResumeHTML(aiResponse),
                });
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="h-full relative">
            {!activeDoc ? (
                <AIDocsHome onCreate={handleCreateDoc} />
            ) : (
                <DocsEditorLayout doc={activeDoc} />
            )}

            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    Generating document…
                </div>
            )}
        </div>
    );
};

export default DocsLayout;
