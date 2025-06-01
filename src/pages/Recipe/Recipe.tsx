import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getRecipeById,
  type IngredientItem,
  type IngredientPart,
} from "../../utils/recipeData";
import RecipeBookmark from "../../components/RecipeBookmark/RecipeBookmark";
import { RecipeTags } from "../../components/RecipeTile/RecipeTile";
import { IoIosTimer } from "react-icons/io";
import { PiMoneyDuotone } from "react-icons/pi";
import { LuUtensils } from "react-icons/lu";
import styles from "./Recipe.module.css";

type tabs = "Ingredients" | "Instructions" | "Nutrition";
const Tabs: tabs[] = ["Ingredients", "Instructions", "Nutrition"];
const Recipe: React.FC = () => {
  const [getParams, _] = useSearchParams();
  const [tab, setTab] = useState<tabs>("Ingredients");
  const {
    selectMode,
    setSelectMode,
    setSelectedInstructions,
    setSelected,
    selected,
  } = useGlobal();
  const navigate = useNavigate();

  const handleTabChange = (newTab: tabs) => {
    setSelectMode(false);
    setTab(newTab);
    setSelected([]);
    setSelectedInstructions([]);
  };

  const onSend = () => {
    navigate("/main/sue");
  };

  const recipeID = getParams.get("id");
  if (!recipeID) {
    return <span>No recipe</span>;
  }
  const recipeObj = getRecipeById(recipeID);
  if (!recipeObj) {
    return <span>id invalid</span>;
  }

  let recipeTitle = `Recipe: ${recipeObj.title}`;
  if (recipeTitle.length > 30) {
    recipeTitle = recipeTitle.substring(0, 29).trim() + "...";
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // padding: "2rem 0",
        paddingBottom: "7.5rem",
      }}
    >
      <div
        style={{
          width: "95%",
          padding: "0.5rem",
          boxSizing: "border-box",
          position: "fixed",
          bottom: "4.3rem",
          borderRadius: "0.7rem",
          backgroundColor: "#fff",
          border: "1px solid #0008",
          zIndex: 100,
          margin: "0 0.5rem",
        }}
      >
        {!selectMode && (
          <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <button
              style={{
                flex: 1,
                padding: "0.75rem 1.25rem",
                borderRadius: 6,
                border: "1px solid #ccc",
                background: Theme.orangeAccent,
                cursor: "pointer",
                fontWeight: 600,
                color: "white",
                fontSize: "1.1rem",
              }}
            >
              Discuss with Chef Sue
            </button>
            <button
              style={{
                flex: 1,
                padding: "0.75rem 1.25rem",
                borderRadius: 6,
                border: "1px solid #ccc",
                background: Theme.orangeAccent,
                cursor: "pointer",
                fontWeight: 600,
                color: "white",
                fontSize: "1.1rem",
              }}
            >
              Cook with Chef Sue
            </button>
          </div>
        )}
        {selectMode && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <span style={{ marginBottom: 3 }}>
              Ask Sue to swap or answer questions
            </span>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: 'start',
                marginBottom: "0.5rem",
                gap: "0.5rem",
                flexShrink: 0,
                flexWrap: "nowrap",
                overflow: "scroll",
              }}
            >
              {selected.map((s) => {
                return <SelectedItemDisplay />;
              })}
            </div>
            <ChefSueKeyboard onSend={onSend} style={{ position: "unset" }} />
            {/* <button
              style={{
                flex: 1,
                padding: "0.75rem 1.25rem",
                borderRadius: 6,
                border: "1px solid #ccc",
                background: Theme.orangeAccent,
                cursor: "pointer",
                fontWeight: 600,
                color: "white",
                fontSize: "1.1rem",
                width: '100%'
              }}
            >
              Ask Chef Sue
            </button> */}
          </div>
        )}
      </div>

      <Header
        style={{ top: "0", position: "fixed", zIndex: 20 }}
        title={recipeTitle}
      />
      <RecipeBookmark
        size={"1.5rem"}
        style={{
          position: "fixed",
          top: "1.5rem",
          right: "1.1rem",
          zIndex: 21,
        }}
        id={recipeID}
      />
      <div style={{ height: "3.8vh" }} />
      <img
        src={recipeObj.image}
        alt="Tacos"
        style={{
          width: "100vw",
          height: "30vh",
          objectFit: "cover",
          borderRadius: "0.2rem",
          maxWidth: 600,
          maxHeight: 350,
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: 60,
          alignItems: "center",
        }}
      >
        <RecipeTags tags={recipeObj.tags} />
      </div>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span
          style={{ fontSize: "1.5rem", fontWeight: 700, textAlign: "center" }}
        >
          {recipeObj.title}
        </span>
        <span style={{ fontSize: "1rem", textAlign: "center" }}>
          {recipeObj.fullDescription}
        </span>
      </div>

      <div
        style={{
          width: "60%",
          height: 80,
          paddingTop: 20,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoIosTimer size={"2rem"} />
          <span>{recipeObj.time} m</span>
        </div>
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PiMoneyDuotone size={"2rem"} />
          <span>${recipeObj.cost}</span>
        </div>
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LuUtensils size={"2rem"} />
          <span>{recipeObj.time} m</span>
        </div>
      </div>

      <div
        className={styles.hide_scrollbar}
        style={{
          width: "100%",
          display: "flex",
          overflowX: "scroll",
          justifyContent: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "1rem",
          paddingBottom: "0.5rem",
          boxSizing: "border-box",
          alignItems: "center",
          marginBottom: "0.5rem",
          height: "3rem",
          position: "sticky",
          backgroundColor: "white",
          top: 70,
          zIndex: 10,
        }}
      >
        {Tabs.map((name) => (
          <div
            key={name}
            onClick={() => handleTabChange(name)}
            style={{
              margin: "0rem 1rem",
              fontSize: "1.1rem",
              fontWeight: tab === name ? 700 : 400,
              cursor: "pointer",
              borderBottom: tab === name ? "2px solid #333" : "none",
              color: tab === name ? "#333" : "#888",
              transition: "color 0.2s, border-bottom 0.2s",
            }}
          >
            {name}
          </div>
        ))}
      </div>
      {tab == "Nutrition" && <Nutrition recipeID={recipeID} />}
      {tab == "Ingredients" && <Ingredients recipeID={recipeID} />}
      {tab == "Instructions" && <Instructions recipeID={recipeID} />}
      <div style={{ height: !selectMode ? "1.25rem" : "5rem" }} />
    </div>
  );
};
export default Recipe;

const SelectedItemDisplay = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      style={{
        padding: "0.5rem",
        backgroundColor: "#0000001a",
        borderRadius: "0.5rem",
      }}
    >
      {children ?? "Nothing Selected"}
    </div>
  );
};

import {
  type InstructionGroup,
  type InstructionStep,
} from "../../utils/recipeData";
function Instructions({ recipeID }: { recipeID: string }) {
  const { selectMode, setSelectMode, setSelectedInstructions } = useGlobal();
  const InstructionGroup: InstructionGroup[] | undefined =
    getRecipeById(recipeID)?.instructions;
  if (!InstructionGroup) {
    return <span>Instructions</span>;
  }

  const toggleSelect = () => {
    setSelectMode((s) => !s);
    setSelectedInstructions([]);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "0rem 0rem",
        boxSizing: "border-box",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          boxSizing: "border-box",
          width: "100%",
          marginBottom: "0.5rem",
          gap: "0.5rem",
          backgroundColor: "white",
          borderBottom: "1px solid #0004",
          zIndex: 1,
          position: "sticky",
          top: 110,
        }}
      >
        <button
          style={{
            padding: "0.75rem 1.25rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: Theme.orangeAccent,
            cursor: "pointer",
            fontWeight: 600,
            color: "white",
            fontSize: "1.25rem",
            width: "100%",
          }}
          onClick={toggleSelect}
        >
          {!selectMode ? "Select" : "Selecting"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0rem 1rem",
        }}
      >
        {InstructionGroup.map((group, i) => {
          return (
            <InstructionGroupComp
              groupID={i.toString().padStart(2, "0")}
              data={group}
              key={i}
            />
          );
        })}
      </div>
      <div style={{ height: "2.5rem" }} />
    </div>
  );
}

function InstructionGroupComp({
  data,
  groupID,
}: {
  data: InstructionGroup;
  groupID: string;
}) {
  const { selectedInstructions, setSelectedInstructions, selectMode } =
    useGlobal();
  const selectInstruction = (id: number) => {
    if (!selectMode) {
      return;
    }
    const newSI = [...selectedInstructions];
    if (id == 0) {
      if (selectedInstructions.includes(groupID + id)) {
        for (let i = 0; i < 10; i++) {
          if (newSI.includes(groupID + i)) {
            newSI.splice(newSI.indexOf(groupID + i), 1);
          }
        }
      } else {
        for (let i = 0; i < 10; i++) {
          if (newSI.includes(groupID + i)) {
            continue;
          }
          newSI.push(groupID + i);
        }
      }
    } else {
      const totalID = groupID + id;
      if (newSI.includes(totalID)) {
        newSI.splice(newSI.indexOf(totalID), 1);
      } else {
        newSI.push(totalID);
      }
    }
    setSelectedInstructions(newSI);
  };
  // console.log(groupID);
  console.log(selectedInstructions);

  return (
    <div>
      <div
        onClick={() => selectInstruction(0)}
        style={{
          display: "flex",
          height: !selectMode ? 28 : 60,
          paddingLeft: !selectMode ? 0 : 20,
          boxSizing: "border-box",
          alignItems: "center",
          width: "100%",
          backgroundColor: selectedInstructions.includes(groupID + 0)
            ? "#bfb"
            : "transparent",
        }}
      >
        <SelectButton selected={selectedInstructions.includes(groupID + 0)} />
        <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>
          {data.name}
        </span>
      </div>
      {data.steps.map((step, i) => {
        return (
          <div
            style={{
              paddingLeft: !selectMode ? "1rem" : "3rem",
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              boxSizing: "border-box",
              backgroundColor: selectedInstructions.includes(groupID + (i + 1))
                ? "#bfb"
                : "transparent",
            }}
            key={i}
          >
            <div
              style={{ display: "flex", width: "100%", alignItems: "center" }}
              onClick={() => selectInstruction(i + 1)}
            >
              <SelectButton
                selected={selectedInstructions.includes(groupID + (i + 1))}
              />
              <span
                style={{
                  transition: "height 0.2s",
                }}
              >
                {i + 1}. {step.text}
              </span>
            </div>
            {step.image && (
              <img
                style={{
                  width: "95%",
                  aspectRatio: 16 / 9,
                  overflow: "hidden",
                  objectFit: "cover",
                  marginTop: 6,
                  boxSizing: "border-box",
                  borderRadius: 10,
                  marginBottom: -10,
                }}
                src={step.image}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Ingredients({ recipeID }: { recipeID: string }) {
  const { selectMode, setSelectMode, selected, setSelected } = useGlobal();
  const recipeObj = getRecipeById(recipeID);

  if (!recipeObj || !recipeObj.ingredients) {
    return <span>No ingredients found.</span>;
  }

  const toggleSelect = () => {
    setSelectMode((s) => !s);
    setSelected([]);
  };

  const toggleSelectedItem = (s: IngredientItem) => {
    const newSelected = [...selected];
    let index = newSelected.findIndex(
      (item) =>
        item.name === s.name &&
        item.quantity === s.quantity &&
        item.price === s.price
    );
    if (index != -1) {
      newSelected.splice(index, 1);
    } else {
      newSelected.push(s);
    }
    setSelected(newSelected);
  };

  // For demonstration, just use the full list for both organizations
  // You can implement different organizations as needed
  const ingredients: IngredientPart[] = recipeObj.ingredients;

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          boxSizing: "border-box",
          width: "100%",
          marginBottom: "0.5rem",
          position: "sticky",
          top: 110,
          gap: "0.5rem",
          backgroundColor: "white",
          borderBottom: "1px solid #0004",
          zIndex: 10,
        }}
      >
        <button
          style={{
            padding: "0.75rem 1.25rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: Theme.orangeAccent,
            cursor: "pointer",
            fontWeight: 600,
            color: "white",
            fontSize: "1.25rem",
            zIndex: 10,
          }}
          onClick={toggleSelect}
        >
          {!selectMode ? "Select" : "Selecting"}
        </button>
        <button
          style={{
            padding: "0.75rem 1.25rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: Theme.orangeAccent,
            cursor: "pointer",
            fontWeight: 600,
            color: "white",
            fontSize: "1.25rem",
            width: "100%",
            opacity: selectMode ? 0.5 : 1,
          }}
          disabled={selectMode ? true : false}
        >
          Locate Ingredients
        </button>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {ingredients.map((ing, idx) => (
          <IngredientGroup
            toggleSelectedItem={toggleSelectedItem}
            selected={selected}
            selectMode={selectMode}
            key={idx}
            {...ing}
          />
        ))}
      </div>
      <div style={{ height: "1.5rem" }} />
    </div>
  );
}

function IngredientGroup({
  name,
  ingredients,
  selected,
  selectMode,
  toggleSelectedItem,
}: IngredientPart & {
  selected: Array<IngredientItem>;
  selectMode: boolean;
  toggleSelectedItem: (s: IngredientItem) => void;
}) {
  return (
    <div
      style={{
        margin: "0 1rem",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          paddingBottom: "0.5rem",
        }}
      >
        {name}
      </span>
      {ingredients.map((ingIte, i) => {
        const index = selected.findIndex(
          (item) =>
            item.name === ingIte.name &&
            item.quantity === ingIte.quantity &&
            item.price === ingIte.price
        );
        const isSelected = index != -1;
        const modifier = isSelected ? 3 : 1;
        const st = (modifier * (i % 2 == 0 ? 8 : 16))
          .toString()
          .padStart(2, "0");
        return (
          <IngredientEntry
            selected={isSelected}
            selectMode={selectMode}
            key={i}
            style={{
              backgroundColor:
                i % 2 == 0
                  ? isSelected
                    ? "#00ff00" + st
                    : "#000000" + st
                  : isSelected
                  ? "#00ff00" + st
                  : "#000000" + st,
            }}
            toggleSelectedItem={toggleSelectedItem}
            {...ingIte}
          />
        );
      })}
    </div>
  );
}

function IngredientEntry({
  name,
  quantity,
  price,
  style,
  selected,
  selectMode,
  toggleSelectedItem,
}: IngredientItem & {
  style?: React.CSSProperties;
  selected: boolean;
  selectMode: boolean;
  toggleSelectedItem: (s: IngredientItem) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 1rem",
        borderBottom: "1px solid #eee",
        fontSize: "1rem",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#020a",
        transition: "background-color 100ms ease-in-out",
        ...style,
      }}
      onClick={() => toggleSelectedItem({ name, quantity, price })}
    >
      <SelectButton selected={selected} />
      <span style={{ flex: 2 }}>{name}</span>
      <span style={{ flex: 1, textAlign: "center" }}>{quantity}</span>
      <span style={{ flex: 1, textAlign: "right" }}>${price.toFixed(2)}</span>
    </div>
  );
}

function SelectButton({ selected }: { selected: boolean }) {
  const { selectMode } = useGlobal();
  return (
    <div
      style={{
        overflow: "visible",
        width: selectMode ? 35 : 0,
        transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s",
        opacity: selectMode ? 1 : 0,
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          margin: 5,
          marginRight: 20,
          transform: "scale(300%)",
          boxSizing: "border-box",
          borderRadius: "50%",
          border: "1px solid #0004",
          backgroundColor: !selected ? "white" : "#0a0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaCheck
          style={{ transition: "opacity 300ms", opacity: selected ? 1 : 0 }}
          size={6}
          color={"white"}
        />
      </div>
    </div>
  );
}

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Theme } from "../../utils/globals";
import { FaCheck } from "react-icons/fa";
import { useGlobal } from "../../hooks/GlobalContext";
import { ChefSueKeyboard } from "../ChefSue/ChefSue";
ChartJS.register(ArcElement, Tooltip, Legend);

function Nutrition({ recipeID }: { recipeID: string }) {
  const chartColors = ["#FF6384", "#36A2EB", "#FFCE56"];
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [100, 30, 300],
        backgroundColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: "90%",
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
    },
  };

  const recipeObj = getRecipeById(recipeID);
  if (!recipeObj) {
    return <span>No nutrition data available</span>;
  }

  const nutrition = recipeObj.nutrition;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: 60, display: "flex", justifyContent: "end" }}>
              <div
                style={{
                  border: `4px solid ${chartColors[0]}`,
                  backgroundColor: chartColors[0] + "88",
                  aspectRatio: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  padding: "0.4rem",
                  borderRadius: "50%",
                  width: 15,
                  height: 15,
                }}
              >
                <span>{nutrition.totalCarbohydrates}g</span>
              </div>
            </div>
            <span
              style={{
                fontSize: "1.25rem",
                marginLeft: "0.5rem",
                fontWeight: 500,
                width: 100,
              }}
            >
              Carbs
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: 60, display: "flex", justifyContent: "end" }}>
              <div
                style={{
                  border: `4px solid ${chartColors[1]}`,
                  backgroundColor: chartColors[1] + "88",
                  aspectRatio: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  padding: "0.4rem",
                  borderRadius: "50%",
                  width: 15,
                  height: 15,
                }}
              >
                <span>{nutrition.totalFat}g</span>
              </div>
            </div>
            <span
              style={{
                fontSize: "1.25rem",
                marginLeft: "0.5rem",
                fontWeight: 500,
                width: 100,
              }}
            >
              Fat
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: 60, display: "flex", justifyContent: "end" }}>
              <div
                style={{
                  border: `4px solid ${chartColors[2]}`,
                  backgroundColor: chartColors[2] + "88",
                  aspectRatio: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  padding: "0.4rem",
                  borderRadius: "50%",
                  width: 15,
                  height: 15,
                }}
              >
                <span>{nutrition.protein}g</span>
              </div>
            </div>
            <span
              style={{
                fontSize: "1.25rem",
                marginLeft: "0.5rem",
                fontWeight: 500,
                width: 100,
              }}
            >
              Protein
            </span>
          </div>
        </div>
        <div
          style={{
            width: "45%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginRight: "1rem",
            boxSizing: "border-box",
          }}
        >
          <Doughnut data={data} options={options} />
          <div
            style={{
              position: "absolute",
              // height: '100%',
              top: "50%",
              right: "50%",
              transform: "translate(50%, -55%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: -12 }}
            >
              {nutrition.calories}
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 700 }}>Cal</span>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          padding: 24,
          boxSizing: "border-box",
        }}
      >
        <div style={{ borderRadius: 10, overflow: "hidden" }}>
          {Object.entries(nutrition).map(([key, value], idx) => (
            <div
              key={key}
              style={{
                width: "100%",
                display: "flex",
                height: 50,
                backgroundColor: idx % 2 === 0 ? "#0001" : "#0002",
                padding: "1rem",
                boxSizing: "border-box",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: "60%",
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                {key.replace(/([A-Z])/g, " $1")}
              </span>
              <span style={{ width: "20%" }}>
                {value}{" "}
                {(() => {
                  // Show units based on key
                  if (
                    [
                      "totalFat",
                      "saturatedFat",
                      "transFat",
                      "totalCarbohydrates",
                      "dietaryFiber",
                      "totalSugars",
                      "addedSugars",
                      "protein",
                    ].includes(key)
                  )
                    return "g";
                  if (
                    [
                      "cholesterol",
                      "sodium",
                      "calcium",
                      "iron",
                      "potassium",
                    ].includes(key)
                  )
                    return "mg";
                  if (key === "vitaminD") return "mcg";
                  if (key === "calories") return "Cal";
                  return "";
                })()}
              </span>
              <span style={{ width: "20%" }}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
