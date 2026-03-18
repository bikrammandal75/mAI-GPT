import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { GETALL_MODALS } from "../chat/Api/get";
import { putLLMUserConfiguration } from "./api/put";
import { toast } from "sonner";

const SettingsInside = ({ config }) => {
  const themeMap = {
    1: "System",
    2: "Dark",
    3: "Light"
  };

  const [theme, setTheme] = useState("System");
  const [originalTheme, setOriginalTheme] = useState("System");
  const [chatHistory, setChatHistory] = useState(true);
  const [selectedModel, setSelectedModel] = useState("GPT-4");
  const [originalSelectedModel, setOriginalSelectedModel] = useState("GPT-4");
  const [models, setModels] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);
  const [originalSelectedCompany, setOriginalSelectedCompany] = useState("");
  const providerFields = ["meta", "openAI", "google", "anthropic", "groq", "mistralAI", "alibaba", "xAI", "deepSeek"];
  const [providerKeys, setProviderKeys] = useState({});
  const [advancedProvider, setAdvancedProvider] = useState(""); // Dropdown
  const [advancedApiKey, setAdvancedApiKey] = useState("");     // Text field

  useEffect(() => {
    if (config) {
      const keys = {};
      providerFields.forEach((key) => {
        keys[key] = config[key] || "";
      });
      setProviderKeys(keys);
    }
  }, [config]);

  useEffect(() => {
    if (config) {
      // Set theme
      const mappedTheme = themeMap[config.theme];
      if (mappedTheme) {
        setTheme(mappedTheme);
        setOriginalTheme(mappedTheme);
      }

      // Set selected model and provider if present
      if (config.model) {
        setSelectedModel(config.model);
        setOriginalSelectedModel(config.model);
      }

      if (config.provider) {
        setSelectedCompany(config.provider);
        setOriginalSelectedCompany(config.provider);
      }
    }
  }, [config]);

  useEffect(() => {
    const resolvedTheme =
      theme === "System"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme.toLowerCase();

    document.documentElement.setAttribute("data-theme", resolvedTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    localStorage.setItem("theme", theme);

    if (theme !== originalTheme || selectedModel !== originalSelectedModel || selectedCompany !== originalSelectedCompany) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [theme, selectedModel, originalTheme, originalSelectedModel]);

  useEffect(() => {
    if (models.length > 0) {
      const defaultCompany = models[0].company;
      setSelectedCompany(defaultCompany);
    }
  }, [models]);

  useEffect(() => {
    if (selectedCompany) {
      const filtered = models.filter(model => model.company === selectedCompany);
      setFilteredModels(filtered);

      // Set default model for the selected company
      if (filtered.length > 0) {
        setSelectedModel(filtered[0].name);
        setOriginalSelectedModel(filtered[0].name);
      }
    }
  }, [selectedCompany, models]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await GETALL_MODALS();
        setModels(response.data);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    };

    fetchModels();
  }, []);

  useEffect(() => {
    if (models.length > 0 && config) {
      setSelectedCompany(config.provider);
      setOriginalSelectedCompany(config.provider);
      setSelectedModel(config.model);
      setOriginalSelectedModel(config.model);
    }
  }, [models, config]);

  const handleSaveChanges = async () => {
    const themeCode = parseInt(
      Object.keys(themeMap).find((key) => themeMap[key] === theme)
    );

    const configPayload = {
      userId: config?.userId || 0,
      orgId: config?.orgId || 0,
      subscriptionId: config?.subscriptionId || 0,
      theme: themeCode,
      provider: selectedCompany,
      model: selectedModel,
      timeStamp: new Date().toISOString(),
    };

    providerFields.forEach((key) => {
      configPayload[key] = providerKeys[key] || "";
    });

    try {
      await putLLMUserConfiguration(configPayload);
      setOriginalTheme(theme);
      setOriginalSelectedModel(selectedModel);
      setOriginalSelectedCompany(selectedCompany);
      setHasChanges(false);
      toast.success("Configuration updated successfully!");
    } catch (error) {
      console.error("Failed to update configuration:", error);
    }
  };

  return (
    <div className="p-6 mt-8">
      <h3 className="text-xl font-semibold mb-6">Configuration</h3>

      {/* General Section */}
      <div className="w-full md:w-1/2 border border-gray-300 rounded-md p-4 mb-6">
        <h4 className="font-bold text-base mb-4">General</h4>

        {/* Theme Selector */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Theme</p>
            <p className="text-xs text-gray-500">Light or Dark mode</p>
          </div>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="text-sm px-3 py-1 border border-gray-300 rounded-md bg-white w-32"
          >
            <option value="System">System</option>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>

        {/* Provider Selector */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Provider</p>
            <p className="text-xs text-gray-500">Choose the model provider</p>
          </div>
          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="text-sm px-3 py-1 border border-gray-300 rounded-md bg-white w-60"
          >
            {[...new Set(models.map((model) => model.company))].map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        {/* Model Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-2 sm:mb-0 pr-2">
            <p className="text-sm font-medium text-gray-700">Model</p>
            <p className="text-xs text-gray-500">Current model in use</p>
          </div>
          <select
            value={selectedModel}
            onChange={(e) => {
              const isDefaultModel = filteredModels[0] && e.target.value === filteredModels[0].name;
              setSelectedModel(e.target.value);
            }}
            className="text-sm px-3 py-1 border border-gray-300 rounded-md bg-white w-60"
          >
            {filteredModels.map((model, index) => (
              <option key={index} value={model.name}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Advance Section */}
      <div className="w-full md:w-1/2 border border-gray-300 rounded-md p-4 mb-6">
        <h4 className="font-bold text-base mb-4">Advance</h4>

        {/* Model Display */}
        {/* Provider Selector */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-700">Provider</p>
            <p className="text-xs text-gray-500">Choose the model provider</p>
          </div>
          <select
            value={advancedProvider}
            onChange={(e) => {
              const newProvider = e.target.value;
              setAdvancedProvider(newProvider);
              setAdvancedApiKey(providerKeys[newProvider] || "");
            }}
            className="text-sm px-3 py-1 border border-gray-300 rounded-md bg-white w-60"
          >
            <option value="">Select Provider</option>
            {providerFields.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>

        {/* Model Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="mb-2 sm:mb-0 pr-2">
            <p className="text-sm font-medium text-gray-700">Key</p>
            <p className="text-xs text-gray-500">Your API key</p>
          </div>
          <input
            type="text"
            value={advancedApiKey}
            onChange={(e) => {
              const updatedKey = e.target.value;
              setAdvancedApiKey(updatedKey);
              setHasChanges(true);
              setProviderKeys((prev) => ({
                ...prev,
                [advancedProvider]: updatedKey,
              }));
            }}
            className="text-sm px-3 py-1 border border-gray-300 rounded-md bg-white w-60"
            disabled={advancedProvider === ""}
            placeholder="api key"
          />

        </div>

      </div>

      {/* Save Button */}
      <div className="w-full md:w-1/2 flex justify-start">
        <button
          onClick={handleSaveChanges}
          disabled={!hasChanges}
          className={`px-4 py-2 rounded-md text-white font-medium ${hasChanges ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Save
        </button>
      </div>

    </div>
  );
};

export default SettingsInside;