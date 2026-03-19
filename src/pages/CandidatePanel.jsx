import React, { useState } from "react";
import {
    MapPin,
    Briefcase,
    ChevronDown,
    ChevronUp,
    Check,
    GraduationCap,
    Star
} from "lucide-react";
import { createGoodFit, createCandidate, createJob } from "../components/chat/Api/post";
import { toast } from "sonner";

const CandidatePanel = ({ candidates, jobData }) => {
    const [expandedCards, setExpandedCards] = useState(new Set());
    const [shortlisted, setShortlisted] = useState(new Set());
    const [jobId, setJobId] = useState(null);
    const [creatingJob, setCreatingJob] = useState(false);

    const toggleExpand = (idx) => {
        const next = new Set(expandedCards);
        next.has(idx) ? next.delete(idx) : next.add(idx);
        setExpandedCards(next);
    };

    const calculateTotalExp = (experiences) => {
        if (!experiences || !Array.isArray(experiences)) return "0 Years";

        let totalMonths = 0;

        experiences.forEach((exp) => {
            const start = exp.from ? new Date(exp.from) : null;
            const end = exp.to ? new Date(exp.to) : new Date();

            if (start && !isNaN(start.getTime())) {
                const months =
                    (end.getFullYear() - start.getFullYear()) * 12 +
                    (end.getMonth() - start.getMonth());

                totalMonths += Math.max(0, months);
            }
        });

        const years = Math.floor(totalMonths / 12);
        const remainingMonths = totalMonths % 12;

        return years === 0
            ? `${totalMonths} Months`
            : remainingMonths > 0
                ? `${years}.${remainingMonths} Years`
                : `${years} Years`;
    };

    if (!candidates || candidates.length === 0) {
        return (
            <div className="p-6 text-center text-gray-400">
                No candidates found
            </div>
        );
    }

    const buildJobPayload = (jobData) => {
        const now = new Date().toISOString();

        return {
            JobId: 0,
            JobCode: "",
            JobTitle: jobData?.jobTitle || "Untitled Job",
            JobTitleSynonyms: "",
            PublishedJD: jobData?.publishedJD || "",
            JobDesc: jobData?.jobDesc || jobData?.publishedJD || "Job Description",

            MustHaveSrchStr: "",
            GoodHaveSrchStr: "",
            SearchString: "",

            Organization: 0,
            JobCreatedDate: now,

            Location: jobData?.location || "",
            RequiredSkills: "",
            Skills: Array.isArray(jobData?.skills)
                ? jobData.skills.join(",")
                : jobData?.skills || "",

            Degree: "",
            University: "",
            Responsibilities: "",
            Education: "",
            Certifications: "",

            TotalExpMin: 0,
            TotalExpMax: 0,

            JobStatusId: 1,

            AllocatedTo: "",
            CreatedById: 0,
            CreatedDate: now,
            ModifiedById: 0,
            ModifiedDate: now,

            StateId: 0,
            Zipcode: "",
            Company: "",
            Country: 0,
            CountryCode: "",

            JobUrl: "",
            JobApplyUrl: "",

            Miles: 0,
            Industries: "",
            JobSource: "",

            ClientId: 0,
            ClientName: "",

            IdealCanFileName: "",

            GoodFit: 0,
            Contacted: 0,
            Replied: 0
        };
    };

    const handleShortlist = async (candidate, index) => {
        try {
            let currentJobId = jobId;

            if (!currentJobId) {

                const jobPayload = buildJobPayload(jobData);
                const jobRes = await createJob(jobPayload);
                currentJobId = jobRes?.data?.jobid?.result || jobRes?.data?.id;

                setJobId(currentJobId);
            }

            // 2️⃣ Split candidate name
            const nameParts = (candidate.name || "").split(" ");
            const firstName = nameParts[0] || "";
            const lastName = nameParts.slice(1).join(" ") || "NA";

            // 3️⃣ Create Candidate
            const candidateRes = await createCandidate({
                FirstName: firstName,
                LastName: lastName,
                name: candidate.name,
                title: candidate.title,
                location: candidate.location,
                skills: candidate.skills,
                experiences: candidate.experiences,
                educations: candidate.educations
            });


            const candidateId =
                candidateRes?.data?.candidateId || candidateRes?.data?.id;

            // 4️⃣ Create GoodFit (Shortlist)
            await createGoodFit(candidateId, currentJobId, 1, {});

            // 5️⃣ Update UI
            setShortlisted((prev) => {
                const next = new Set(prev);
                next.add(index);
                return next;
            });
            toast.success("Candidate shortlisted successfully!");

        } catch (err) {
            console.error("Shortlist error", err);
            toast.error("Failed to shortlist candidate.");
        }
    };

    return (
        <div className="h-full overflow-y-auto p-4 bg-[#F8F9FB] dark:bg-zinc-950">
            <div className="max-w-[850px] mx-auto space-y-3">

                {candidates.map((candidate, index) => {

                    const allSkills =
                        (candidate.skills || "")
                            .split(",")
                            .map((s) => s.trim())
                            .filter((s) => s !== "");

                    const isExpanded = expandedCards.has(index);
                    const currentExp = candidate.experiences?.[0];
                    const totalExpLabel = calculateTotalExp(candidate.experiences);

                    return (
                        <div
                            key={index}
                            className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm overflow-hidden"
                        >

                            <button
                                onClick={() => handleShortlist(candidate, index)}
                                disabled={shortlisted.has(index)}
                                className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 text-sm font-semibold rounded-lg border transition
  ${shortlisted.has(index)
                                        ? "bg-[#4F7DB5] text-white border-[#4F7DB5]"
                                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                                    }`}
                            >
                                <Star className={`w-4 h-4 ${shortlisted.has(index) ? "fill-yellow-400 text-yellow-400" : ""}`} />
                                {shortlisted.has(index) ? "Shortlisted" : "Shortlist"}
                            </button>

                            <div className="p-6">
                                <div className="flex items-start gap-4">

                                    {/* Avatar */}
                                    <div className="w-10 h-10 rounded-full bg-[#1A4384] flex items-center justify-center text-white font-bold text-sm shrink-0">
                                        {candidate.name
                                            ?.split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .toUpperCase()
                                            .slice(0, 2)}
                                    </div>

                                    <div className="flex-1">

                                        {/* Name */}
                                        <h3 className="text-xl font-bold text-[#111827] dark:text-zinc-100 leading-tight">
                                            {candidate.name}
                                        </h3>

                                        {/* Title */}
                                        <p className="text-sm text-[#4B5563] dark:text-zinc-400 font-medium mt-0.5">
                                            {candidate.title}
                                            {currentExp?.company && ` @ ${currentExp.company}`}
                                        </p>

                                        {/* Location + Experience */}
                                        <div className="flex items-center gap-3 mt-3 text-[#6B7280] text-xs">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-3.5 h-3.5 text-red-400" />
                                                {candidate.location}
                                            </span>

                                            <span className="flex items-center gap-1 border-l border-zinc-200 pl-3">
                                                <Briefcase className="w-3.5 h-3.5 text-orange-800" />
                                                {totalExpLabel}
                                            </span>
                                        </div>

                                        {/* Skills */}
                                        <div className="mt-4 flex flex-wrap gap-1.5 items-center">

                                            {(isExpanded
                                                ? allSkills
                                                : allSkills.slice(0, 5)
                                            ).map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="flex items-center gap-1 px-2.5 py-1 bg-[#ECFDF5] text-[#065F46] text-[11px] font-semibold rounded-full border border-[#D1FAE5]"
                                                >
                                                    <Check className="w-3 h-3" />
                                                    {skill}
                                                </span>
                                            ))}

                                            {allSkills.length > 5 && (
                                                <button
                                                    onClick={() => toggleExpand(index)}
                                                    className="flex items-center gap-1 text-[13px] font-bold text-[#1D4ED8] hover:underline ml-1"
                                                >
                                                    {isExpanded ? (
                                                        <>
                                                            Show Less <ChevronUp className="w-4 h-4" />
                                                        </>
                                                    ) : (
                                                        <>
                                                            More <ChevronDown className="w-4 h-4" />
                                                        </>
                                                    )}
                                                </button>
                                            )}
                                        </div>

                                    </div>
                                </div>

                                {/* Expanded Section */}
                                {isExpanded && (
                                    <div className="mt-6 pt-6 border-t border-zinc-100">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            {/* Experience */}
                                            <div>
                                                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <Briefcase className="w-3.5 h-3.5" />
                                                    Recent Experience
                                                </h4>

                                                <div className="space-y-3">
                                                    {candidate.experiences?.slice(0, 2).map((exp, i) => (
                                                        <div key={i} className="border-l-2 border-zinc-100 pl-3">
                                                            <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                                                                {exp.title}
                                                            </p>
                                                            <p className="text-xs text-zinc-500">
                                                                {exp.company}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Education */}
                                            <div>
                                                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                    <GraduationCap className="w-3.5 h-3.5" />
                                                    Education
                                                </h4>

                                                {(candidate.education || candidate.educations)?.slice(0, 1).map((edu, i) => (
                                                    <div key={i} className="border-l-2 border-zinc-100 pl-3">
                                                        <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                                                            {edu.degree || "Degree"}
                                                        </p>
                                                        <p className="text-xs text-zinc-500">
                                                            {edu.school || "Institution"}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>

                                    </div>
                                )}

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CandidatePanel;