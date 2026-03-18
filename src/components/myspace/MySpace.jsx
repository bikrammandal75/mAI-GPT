import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  FaSearch,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaFileDownload,
  FaFileAlt,
  FaPaperclip,
  FaEllipsisV,
  FaArrowLeft, // Added for back button
} from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  GetDocuments,
  UploadDocument,
  DeleteDocument,
  DownloadDocument,
} from "../myspace/Api";

const MySpace = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParam, setSearchParam] = useState({
    searchTerm: "",
    offSet: 0,
    limit: 20,
  });
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false); // State for progress bar
  const [uploadProgress, setUploadProgress] = useState(0); // State for upload progress
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const [isMobile, setIsMobile] = useState(false); // State for mobile detection

  useEffect(() => {
    fetchDocuments(searchParam).finally(() => setLoading(false));
  }, [searchValue]);

  // Effect to determine if it's a mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount to set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      const newSearchParam = {
        ...searchParam,
        searchTerm: searchValue,
        offSet: 0,
        limit: 20,
      };
      setSearchParam(newSearchParam);
      setLoading(true);
      fetchDocuments(newSearchParam).finally(() => setLoading(false));
    }
  };

  const fetchDocuments = async (searchParam) => {
    try {
      const response = await GetDocuments(searchParam);
      if (response?.status === 200) {
        let docs = response?.data?.docs ?? [];
        setDocs(docs);
      } else {
        toast.error("Error fetching docs details:", response);
      }
    } catch (error) {
      toast.error("Error fetching docs details:", error);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Content = reader.result.split(",")[1]; // Extract base64 content
      const payload = {
        filename: file.name,
        base64Content,
        fileSize: Math.round(file.size / 1024), // Convert size to KB
      };

      try {
        setLoading(true); // Start loading
        setUploadProgress(0); // Reset progress
        const response = await UploadDocument(payload, (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress); // Update progress
        });
        if (response?.status === 200) {
          toast.success("File uploaded successfully!");
          fetchDocuments(searchParam); // Refresh the document list
        } else {
          console.error("Error uploading file:", response);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setLoading(false); // Stop loading
        setUploadProgress(0); // Reset progress
      }
    };

    reader.readAsDataURL(file); // Read file as base64
  };

  const handleDelete = async (file) => {
    try {
      setLoading(true); // Start loading
      const response = await DeleteDocument(file);
      if (response?.status === 200) {
        toast.success("File deleted successfully!");
        fetchDocuments(searchParam); // Refresh the document list
      } else {
        console.error("Error deleting file:", response);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleDownload = async (docId) => {
    try {
      setLoading(true); // Start loading
      const response = await DownloadDocument(docId);
      if (response?.data?.filename && response?.data?.base64Content) {
        const link = document.createElement("a");
        link.href = `data:application/octet-stream;base64,${response.data?.base64Content}`;
        link.download = response?.data?.filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error(
          "Error: Invalid response for file download",
          response?.data
        );
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleMenuToggle = (e, idx) => {
    e.stopPropagation();
    const menu = document.getElementById(`menu-${idx}`);
    const allMenus = document.querySelectorAll("[id^='menu-']");

    allMenus.forEach((m) => {
      if (m !== menu) m.style.display = "none";
    });

    menu.style.display = menu.style.display === "block" ? "none" : "block";

    const handleClickOutside = (event) => {
      if (!menu.contains(event.target)) {
        menu.style.display = "none";
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("keydown", handleKeyPress);
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        menu.style.display = "none";
        document.removeEventListener("click", handleClickOutside);
        document.removeEventListener("keydown", handleKeyPress);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);
  };

  const getFileIcon = (filename) => {
    const extension = filename.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return <FaFilePdf className="text-red-600" />;
      case "doc":
      case "docx":
        return <FaFileWord className="text-blue-600" />;
      case "xls":
      case "xlsx":
        return <FaFileExcel className="text-green-600" />;
      default:
        return <FaFileAlt className="text-gray-600" />;
    }
  };

  // Utility function to truncate filename
  const truncateFilename = (filename, maxLength = 10) => {
    if (filename.length <= maxLength) {
      return filename;
    }
    const extension = filename.split(".").pop();
    const nameWithoutExtension = filename.substring(0, filename.length - extension.length - 1);

    // Adjust max length for the name part based on the extension length
    const adjustedMaxLength = maxLength - (extension.length > 0 ? extension.length + 1 : 0);

    if (nameWithoutExtension.length > adjustedMaxLength) {
      return `${nameWithoutExtension.substring(0, adjustedMaxLength)}...${extension}`;
    }
    return filename; // Fallback if truncation logic somehow fails for edge cases
  };


  return (
    <div className="min-h-screen bg-gray-50 text-sm">
      {/* Progress Bar */}
      {loading && (
        <div className="fixed top-0 left-0 w-full z-50">
          <div
            className="h-1 bg-blue-500 transition-all"
            style={{ width: `${uploadProgress || 100}%` }}
          ></div>
        </div>
      )}



      {/* Header for Desktop and Tablet */}
      <div className="hidden md:flex items-center justify-between bg-white px-6 py-3 shadow">
        <div className="relative w-1/2">
          <input
            id="search"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            placeholder="Search"
            className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 focus:outline-none"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>
        <div className="flex items-center space-x-4">
          <label
            htmlFor="file-upload"
            className="flex cursor-pointer items-center gap-1 rounded bg-gray-100 px-3 py-2 text-gray-600 hover:bg-gray-200 hover:text-black dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-700/60 dark:hover:text-white"
          >
            <FaPaperclip />
            <span className="hidden text-sm md:block">Upload file</span>
          </label>
          <input
            id="file-upload"
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 p-4 md:p-6">
        {/* Search and Upload for Mobile */}
        <div className="md:hidden flex flex-row items-center justify-between gap-2 mb-4">
          <div className="relative flex-grow min-w-0">
            <input
              id="search-mobile"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search"
              className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 focus:outline-none"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-500" />
          </div>
          <label
            htmlFor="file-upload-mobile"
            className="flex-shrink-0 flex cursor-pointer items-center gap-1 rounded bg-gray-100 px-3 py-2 text-gray-600 hover:bg-gray-200 hover:text-black dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-700/60 dark:hover:text-white"
          >
            <FaPaperclip />
            <span className="text-sm">Upload file</span>
          </label>
          <input
            id="file-upload-mobile"
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        <h2 className="mb-4 text-lg font-semibold">Documents</h2>

        {/* Document Table */}
        <div className="overflow-x-visible w-full"> {/* Added w-full */}
          <div className="rounded border shadow">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200 text-left">
                <tr>
                  <th className="p-2">Name</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Size</th>
                  <th className="p-2">Date</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {docs.length > 0 &&
                  docs.map((file, idx) => {
                    const formattedDate = new Date(file.createdDate)
                      .toISOString()
                      .split("T")[0];

                    return (
                      <tr key={idx} className="border-t hover:bg-gray-50 relative overflow-visible">
                        <td className="flex items-center space-x-2 p-2 whitespace-nowrap">
                          {getFileIcon(file.filename)}
                          <span className="md:hidden">
                            {truncateFilename(file.filename, 10)}
                          </span>
                          <span className="hidden md:block">
                            {file.filename}
                          </span>
                        </td>
                        <td className="p-2 text-gray-600 whitespace-nowrap">{file.processingStatus}</td>
                        <td className="p-2 text-gray-600 whitespace-nowrap">{file.fileSize} KB</td>
                        <td className="p-2 text-gray-600 whitespace-nowrap">{formattedDate}</td>
                        <td className="relative p-2 text-gray-600">
                          <FaEllipsisV
                            className="cursor-pointer"
                            onClick={(e) => handleMenuToggle(e, idx)}
                          />
                          <div
                            id={`menu-${idx}`}
                            className="absolute right-0 z-10 mt-2 w-40 rounded border bg-gray-300 text-sm shadow-lg"
                            style={{
                              display: "none",
                              backgroundColor: "#e5e7eb",
                              opacity: 1,
                            }}
                          >
                            <button
                              className="block w-full px-4 py-2 text-left hover:bg-gray-400"
                              onClick={async () => {
                                await handleDownload(file.docId);
                                const menu = document.getElementById(`menu-${idx}`);
                                if (menu) menu.style.display = "none";
                              }}
                            >
                              <FaFileDownload className="mr-2 inline" />
                              <span className="inline">Download File</span>
                            </button>
                            <button
                              className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-400"
                              onClick={async () => {
                                await handleDelete(file);
                                const menu = document.getElementById(`menu-${idx}`);
                                if (menu) menu.style.display = "none";
                              }}
                            >
                              <RiDeleteBinLine className="mr-2 inline" />
                              <span className="inline">Delete File</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          {/* Message shown only if no documents */}
          {docs.length === 0 && (
            <div className="flex justify-center items-center h-96 text-gray-600 text-lg">
              Upload your documents here
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default MySpace;