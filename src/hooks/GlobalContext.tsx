import { createContext, useContext, useState, type ReactNode } from "react";

type GlobalContextType = {
  // message facet
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  savedRecipes: String[];
  setSavedRecipes: React.Dispatch<React.SetStateAction<String[]>>;
  // Alert facet
  alertTitle: string|undefined;
  alertSubtitle: string|undefined;
  setAlert: (title?: string, subtitle?: string) => void;
  // Add other facets here as needed
};



const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
export type Message = {
  sender?: string;
  text: string;
  thinking?: boolean;
  audioSrc?: string;
  recipe?: string;
};

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  // saved recipes state
  const [savedRecipes, setSavedRecipes] = useState<String[]>([]);
  // message state
  const [messages, setMessages] = useState<Message[]>([]);

  // Alert state
  const [alertTitle, setAlertTitle] = useState<string|undefined>("");
  const [alertSubtitle, setAlertSubtitle] = useState<string|undefined>("");

  const setAlert = (title?: string, subtitle?: string) => {
    setAlertTitle(title);
    setAlertSubtitle(subtitle);
  };

  // Add other facets' state and handlers here

  return (
    <GlobalContext.Provider
      value={{
        alertTitle,
        alertSubtitle,
        setAlert,
        messages,
        setMessages,
        savedRecipes,
        setSavedRecipes
        // Add other facets here
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};

// Optionally, for backwards compatibility:
export const useAlert = () => {
  const { alertTitle, alertSubtitle, setAlert } = useGlobal();
  return { alertTitle, alertSubtitle, setAlert };
};