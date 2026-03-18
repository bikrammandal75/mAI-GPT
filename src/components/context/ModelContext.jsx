import { createContext, useContext, useState, useEffect } from "react";
import { GETALL_MODALS } from "../chat/Api/get";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await GETALL_MODALS();
                setModels(response.data);
                setSelectedModel(response.data[0]); // Set default model
            } catch (error) {
                console.error("Error fetching models:", error);
            }
        };

        fetchModels();
    }, []);

    return (
        <ModelContext.Provider value={{ models, selectedModel, setSelectedModel }}>{children}</ModelContext.Provider>
    );
};

export const useModel = () => useContext(ModelContext);
