import { useEffect, useState } from "react";
import { useColorTheme } from "../../hooks/useColorTheme";
import { FaSun, FaMoon } from "react-icons/fa";
import Button from "../../components/Button/Button";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import Pricing from "../../assets/pricing.png";

// Define your page components
function PickATheme({ onComplete }: { onComplete: () => void }) {
  const { setTheme, theme, colors } = useColorTheme();

  const handleThemeSelect = (selectedTheme: "light" | "dark") => {
    setTheme(selectedTheme);
    onComplete();
  };

  useEffect(() => {
    onComplete();
  }, []);

  const isLightTheme = theme == "light";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "color 0.3s, background-color 0.3s",
      }}
    >
      <span
        style={{
          fontSize: "1.5rem",
          marginBottom: 24,
          color: colors.text,
          fontWeight: 500,
          transition: "color 0.3s",
        }}
      >
        Choose your theme
      </span>
      <span
        style={{
          fontSize: "1.25rem",
          color: colors.textSecondary,
          marginBottom: "0.75rem",
          marginTop: 24,
          transition: "color 0.3s",
        }}
      >
        {theme == "dark" ? "For the night owls" : "For the day breakers"}
      </span>
      <div style={{ display: "flex", gap: 16 }}>
        <Button
          onClick={() => handleThemeSelect("light")}
          style={{
            padding: "0.75rem 2rem",
            borderRadius: 8,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            opacity: isLightTheme ? 1 : 0.5,
            transform: `scale(${isLightTheme ? 1.0 : 0.8})`,
            transition: "opacity 0.3s, transform 0.3s",
            zIndex: 1,
          }}
        >
          <FaSun style={{ color: "#fbbf24" }} />
          Light
        </Button>
        <ButtonSecondary
          onClick={() => handleThemeSelect("dark")}
          style={{
            padding: "0.75rem 2rem",
            borderRadius: 8,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            opacity: !isLightTheme ? 1 : 0.5,
            transform: `scale(${!isLightTheme ? 1.0 : 0.8})`,
            transition: "opacity 0.3s, transform 0.3s",
          }}
        >
          <FaMoon style={{ color: "#60a5fa" }} />
          Dark
        </ButtonSecondary>
      </div>
      <span
        style={{
          fontSize: "1rem",
          marginTop: "1rem",
          color: colors.textSecondary,
          transition: "color 0.3s",
        }}
      >
        You can change this later
      </span>
    </div>
  );
}

// Define your page components
function DietarySelectGroup({
  label,
  options,
  selected,
  onSelect,
  onRemove,
  placeholder,
}: {
  label: string;
  options: string[];
  selected: string[];
  onSelect: (value: string) => void;
  onRemove: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <span style={{ fontSize: "1.1rem" }}>{label}</span>
      <CustomSelect
        options={options}
        selected={selected}
        onSelect={onSelect}
        placeholder={placeholder}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginTop: "0.5rem",
        }}
      >
        {selected.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.25rem 0.5rem",
              backgroundColor: Theme.orange,
              borderRadius: "3rem",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => onRemove(item)}
          >
            <span
              style={{
                color: "white",
                fontWeight: 600,
                lineHeight: "1.5rem",
                marginRight: 2,
                fontSize: '0.8rem'
              }}
            >
              {item}
            </span>
            <LuX color={"white"} size={14} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Custom Select component
function CustomSelect({
  options,
  selected,
  onSelect,
  placeholder,
}: {
  options: string[];
  selected: string[];
  onSelect: (value: string) => void;
  placeholder: string;
}) {
  const { colors } = useColorTheme();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        tabIndex={0}
        style={{
          width: "100%",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid #0004",
          background: colors.background,
          cursor: "pointer",
          userSelect: "none",
          color: colors.text,
          boxSizing: "border-box",
        }}
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setOpen(false)}
      >
        <span style={{ color: selected.length === 0 ? colors.textSecondary : colors.text }}>
          {selected.length === 0 ? placeholder : "Select more..."}
        </span>
      </div>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            width: "100%",
            background: colors.background,
            border: "1px solid #0004",
            borderRadius: "0.5rem",
            zIndex: 10,
            boxShadow: "0 2px 8px #0002",
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              style={{
                padding: "0.5rem 1rem",
                cursor: "pointer",
                background: selected.includes(option) ? Theme.orange : "transparent",
                color: selected.includes(option) ? "#fff" : colors.text,
                fontWeight: selected.includes(option) ? 600 : 400,
                borderRadius: "0.5rem",
                margin: "2px 4px",
                transition: "background 0.2s",
              }}
              onMouseDown={(e) => {
                e.preventDefault();
                onSelect(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Dietary({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    onComplete();
  }, []);

  const [dietTypes, setDietTypes] = useState<string[]>([]);
  const [healthConditions, setHealthConditions] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);

  const dietOptions = [
    "None",
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Keto",
    "Paleo",
    "Mediterranean",
    "Low-Carb",
    "Gluten-Free",
  ];
  const healthConditionOptions = [
    "None",
    "Diabetes",
    "Hypertension",
    "High Cholesterol",
    "Celiac Disease",
    "IBS",
    "Heart Disease",
  ];
  const allergyOptions = [
    "None",
    "Peanuts",
    "Tree Nuts",
    "Dairy",
    "Eggs",
    "Soy",
    "Wheat",
    "Fish",
    "Shellfish",
    "Sesame",
  ];

  const handleSelect = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (value === "None") {
      setSelected([]);
    } else if (!selected.includes(value)) {
      setSelected([...selected, value]);
    }
  };

  const handleRemove = (
    value: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected(selected.filter((item) => item !== value));
  };

  const { colors } = useColorTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "color 0.3s, background-color 0.3s",
        width: "70vw",
      }}
    >
      <span
        style={{
          fontSize: "1.5rem",
          marginBottom: 24,
          color: colors.text,
          fontWeight: 500,
          transition: "color 0.3s",
        }}
      >
        Dietary Preferences
      </span>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "1rem",
        }}
      >
        <DietarySelectGroup
          label="Diet Type"
          options={dietOptions}
          selected={dietTypes}
          onSelect={(value) => handleSelect(value, dietTypes, setDietTypes)}
          onRemove={(value) => handleRemove(value, dietTypes, setDietTypes)}
          placeholder="Select diet type..."
        />
        <DietarySelectGroup
          label="Health Conditions"
          options={healthConditionOptions}
          selected={healthConditions}
          onSelect={(value) =>
            handleSelect(value, healthConditions, setHealthConditions)
          }
          onRemove={(value) =>
            handleRemove(value, healthConditions, setHealthConditions)
          }
          placeholder="Select health condition..."
        />
        <DietarySelectGroup
          label="Allergies"
          options={allergyOptions}
          selected={allergies}
          onSelect={(value) => handleSelect(value, allergies, setAllergies)}
          onRemove={(value) => handleRemove(value, allergies, setAllergies)}
          placeholder="Select allergy..."
        />
      </div>
    </div>
  );
}

import { FaCarrot, FaAppleAlt } from "react-icons/fa";
import { Theme } from "../../utils/globals";
import ChefSueVisualizer from "../../components/ChefSueVisualizer/ChefSueVisualizer";
import { useNavigate } from "react-router-dom";
import { LuX } from "react-icons/lu";
function SwapYourIngredients({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    onComplete();
  }, []);
  const { theme } = useColorTheme();
  const isLightTheme = theme == "light";
  const iconColor = isLightTheme ? Theme.darkGrey : "#eee";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "50vw",
          minWidth: 250,
          maxWidth: 400,
          height: "auto",
          gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "3.5rem", color: iconColor }}>
          <FaAppleAlt />
        </span>
        <span
          style={{
            fontSize: "3.2rem",
            color: iconColor,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Arrow icon */}
          <svg
            width="3.2rem"
            height="3.2rem"
            viewBox="0 0 24 24"
            fill="none"
            style={{ display: "block" }}
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke={iconColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span style={{ fontSize: "3.5rem", color: iconColor }}>
          <FaCarrot />
        </span>
      </div>
      <span
        style={{
          color: isLightTheme ? Theme.darkGrey : Theme.almostWhite, // fallback, will be overridden by theme
          marginTop: 24,
          fontWeight: 600,
          fontSize: "1.2rem",
        }}
      >
        Swap Ingredients, Not Your Plans
      </span>
      <span
        style={{
          color: isLightTheme ? Theme.darkGreyAccent : Theme.almostWhiteAccent, // fallback, will be overridden by theme
          // marginTop: 24,
          fontWeight: 300,
          fontSize: "1.24rem",
        }}
      >
        Swap your ingredients for personalized recipes!
      </span>
    </div>
  );
}

function RealTimePricing({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    onComplete();
  }, []);
  const { theme } = useColorTheme();
  const isLightTheme = theme == "light";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <img
        src={Pricing}
        alt="Real-time Pricing"
        style={{
          width: "50vw",
          height: "50vw",
          border: "1px solid #0004",
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
          borderRadius: "50%",
        }}
      />
      <span
        style={{
          color: isLightTheme ? Theme.darkGrey : Theme.almostWhite, // fallback, will be overridden by theme
          marginTop: 24,
          fontWeight: 600,
          fontSize: "1.24rem",
        }}
      >
        Smarter Recipes, Real Prices
      </span>
      <span
        style={{
          color: isLightTheme ? Theme.darkGreyAccent : Theme.almostWhiteAccent, // fallback, will be overridden by theme
          // marginTop: 24,
          fontWeight: 300,
          width: "90%",
          fontSize: "1.24rem",
        }}
      >
        We match you with affordable recipes using live grocery prices from
        stores near you.
      </span>
    </div>
  );
}

function MeetChefSue({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    onComplete();
  }, []);
  const { theme } = useColorTheme();
  const isLightTheme = theme == "light";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <ChefSueVisualizer />
      <span
        style={{
          color: isLightTheme ? Theme.darkGrey : Theme.almostWhite, // fallback, will be overridden by theme
          marginTop: 24,
          fontWeight: 600,
          fontSize: "1.24rem",
        }}
      >
        Meet Chef Sue
      </span>
      <span
        style={{
          color: isLightTheme ? Theme.darkGreyAccent : Theme.almostWhiteAccent, // fallback, will be overridden by theme
          // marginTop: 24,
          fontWeight: 300,
          width: "90%",
          fontSize: "1.24rem",
          marginBottom: "1rem",
        }}
      >
        Your personal chef assistant.
      </span>
      <span
        style={{
          color: isLightTheme ? Theme.darkGreyAccent : Theme.almostWhiteAccent, // fallback, will be overridden by theme
          // marginTop: 24,
          fontWeight: 300,
          width: "90%",
          fontSize: "1.24rem",
          marginBottom: "0rem",
        }}
      >
        Find recipes effortlessly
      </span>
      <span
        style={{
          color: isLightTheme ? Theme.darkGreyAccent : Theme.almostWhiteAccent, // fallback, will be overridden by theme
          // marginTop: 24,
          fontWeight: 300,
          width: "95%",
          fontSize: "1.24rem",
        }}
      >
        Get <span style={{ fontWeight: 600 }}>step-by-step cooking help</span>{" "}
        and all your kitchen questions answered.
      </span>
    </div>
  );
}

// function GetStartedPage({ onComplete }: { onComplete: () => void }) {
//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//     >
//       <span style={{ fontSize: "1.5rem", marginBottom: 16 }}>
//         Get started now!
//       </span>
//       <button style={{ marginTop: 24 }} onClick={onComplete}>
//         Finish
//       </button>
//     </div>
//   );
// }

// Carousel page definitions
const carouselPages = [
  {
    id: 1,
    render: (onComplete: () => void) => <PickATheme onComplete={onComplete} />,
  },
  {
    id: 2,
    render: (onComplete: () => void) => (
      <SwapYourIngredients onComplete={onComplete} />
    ),
  },
  {
    id: 3,
    render: (onComplete: () => void) => (
      <RealTimePricing onComplete={onComplete} />
    ),
  },
  {
    id: 4,
    render: (onComplete: () => void) => <MeetChefSue onComplete={onComplete} />,
  },
  {
    id: 5,
    render: (onComplete: () => void) => <Dietary onComplete={onComplete} />,
  },
];

export default function Onboarding() {
  const navigate = useNavigate();
  const [position, setPosition] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(
    Array(carouselPages.length).fill(false)
  );
  const { colors } = useColorTheme();

  const handlePrev = () => {
    setPosition((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    if (completed[position]) {
      if (position == carouselPages.length - 1) {
        navigate("/main/home");
        return;
      }
      setPosition((prev) =>
        prev < carouselPages.length - 1 ? prev + 1 : prev
      );
    }
  };

  const markComplete = () => {
    setCompleted((prev) => {
      const next = [...prev];
      next[position] = true;
      return next;
    });
  };

  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: colors.background,
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <div
        style={{
          padding: 32,
          minHeight: 120,
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {carouselPages[position].render(markComplete)}
      </div>
      <div>
        <ButtonSecondary
          onClick={handlePrev}
          disabled={position === 0}
          style={{ marginRight: 16 }}
        >
          Previous
        </ButtonSecondary>
        <Button onClick={handleNext}>
          {position != carouselPages.length - 1 ? "Next" : "Let's Go!"}
        </Button>
      </div>
    </div>
  );
}
