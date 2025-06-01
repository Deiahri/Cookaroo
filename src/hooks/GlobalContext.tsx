import { createContext, useContext, useState, type ReactNode } from "react";
import type { IngredientItem } from "../utils/recipeData";
export type RecipeMap = {
  [key: string]: string[];
};

type GlobalContextType = {
  // message facet
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  // saved recipes faced
  activeRecipeID: string;
  setActiveRecipeID: React.Dispatch<React.SetStateAction<string>>;
  savedRecipes: RecipeMap;
  setSavedRecipes: React.Dispatch<React.SetStateAction<RecipeMap>>;
  recipeSaverActive: Boolean;
  setRecipeSaverActive: React.Dispatch<React.SetStateAction<boolean>>;
  // Alert facet
  alertTitle: string | undefined;
  alertSubtitle: string | undefined;
  setAlert: (title?: string, subtitle?: string, showMS?: number) => void;
  showAlertMS: number;
  selected: IngredientItem[];
  setSelected: React.Dispatch<React.SetStateAction<IngredientItem[]>>;
  selectedInstructions: String[];
  setSelectedInstructions: React.Dispatch<React.SetStateAction<String[]>>;
  selectMode: boolean;
  setSelectMode: React.Dispatch<React.SetStateAction<boolean>>;
  // Add other facets here as needed
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
export type Message = {
  sender?: string;
  text: string;
  thinking?: boolean;
  audioSrc?: string;
  recipe?: string;
  attatchment?: string;
  image?: string;
};

const BaseRecipeMap: RecipeMap = {
  Favorites: [
    "68f45-c6ae9a0-800565-8d3a84c-7c0b371",
    "5a9b2-fd21e83-3c77b1-4f6c02e-91ab4fc"
  ],
};

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  // saved recipes state
  const [savedRecipes, setSavedRecipes] = useState<RecipeMap>(BaseRecipeMap);
  const [activeRecipeID, setActiveRecipeID] = useState<string>('');
  const [recipeSaverActive, setRecipeSaverActive] = useState(false);
  // message state
  const [messages, setMessages] = useState<Message[]>([]);

  // Alert state
  const [alertTitle, setAlertTitle] = useState<string | undefined>("");
  const [alertSubtitle, setAlertSubtitle] = useState<string | undefined>("");
  const [showAlertMS, setShowAlertMS] = useState(1500);

  const [selectMode, setSelectMode] = useState(false);
  const [selected, setSelected] = useState<Array<IngredientItem>>([]);
  const [selectedInstructions, setSelectedInstructions] = useState<String[]>([]);

  const setAlert = (title?: string, subtitle?: string, showMS?: number) => {
    setAlertTitle(title);
    setAlertSubtitle(subtitle);
    setShowAlertMS(showMS||1500);
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
        setSavedRecipes,
        recipeSaverActive,
        setRecipeSaverActive,
        activeRecipeID,
        setActiveRecipeID,
        showAlertMS,
        selected,
        setSelected,
        selectMode,
        setSelectMode,
        selectedInstructions,
        setSelectedInstructions,
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
