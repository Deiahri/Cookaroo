import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { useSearchParams } from "react-router-dom";
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

// const ingredients = [
//   "8 small corn tortillas",
//   "2 cups cooked and shredded chicken",
//   "1 cup shredded lettuce",
//   "1/2 cup diced tomatoes",
//   "1/2 cup shredded cheese",
//   "1/4 cup chopped onions",
//   "1/4 cup chopped cilantro",
//   "Salsa, to taste",
//   "Lime wedges, for serving",
// ];

// const recipeSteps = `
// <ol>
//   <li>Warm the corn tortillas in a skillet or microwave until soft.</li>
//   <li>Fill each tortilla with shredded chicken.</li>
//   <li>Top with lettuce, tomatoes, cheese, onions, and cilantro.</li>
//   <li>Add salsa to taste.</li>
//   <li>Serve with lime wedges on the side. Enjoy your tacos!</li>
// </ol>
// `;

type tabs = "Nutrition" | "Ingredients" | "Instructions";
const Tabs: tabs[] = ["Nutrition", "Ingredients", "Instructions"];
const Recipe: React.FC = () => {
  const [getParams, _] = useSearchParams();
  const [tab, setTab] = useState<tabs>("Nutrition");

  const handleTabChange = (newTab: tabs) => {
    setTab(newTab);
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
        padding: "2rem 0",
        paddingBottom: '7.5rem'
      }}
    >
      <div
        style={{
          width: "95%",
          padding: "0.5rem",
          boxSizing: "border-box",
          position: "fixed",
          bottom: "4.3rem",
          borderRadius: '0.7rem',
          backgroundColor: '#fff',
          border: '1px solid #0008',
          zIndex: 100,
          margin: '0 0.5rem'
        }}
      >
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
          marginTop: "1rem",
          boxSizing: "border-box",
          alignItems: "center",
          marginBottom: "0.5rem",
          height: "2rem",
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
      <div style={{ height: "1.25rem" }} />
    </div>
  );
};
export default Recipe;

type Ingredient = {
  name: string;
  quantity: string;
  cost: number;
};
const organizationOptions = [
  { value: "logical", label: "Logical" },
  { value: "summarized", label: "Summarized" },
];

function Ingredients({ recipeID }: { recipeID: string }) {
  const [organization, setOrganization] = useState("logical");
  const recipeObj = getRecipeById(recipeID);

  if (!recipeObj || !recipeObj.ingredients) {
    return <span>No ingredients found.</span>;
  }

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
        }}
      >
        <button
          style={{
            padding: "0.75rem 1.25rem",
            borderRadius: 6,
            border: "1px solid #ccc",
            background: Theme.orangeAccent,
            cursor: "pointer",
            width: "100%",
            fontWeight: 600,
            color: "white",
            fontSize: "1.25rem",
          }}
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
          <IngredientGroup key={idx} {...ing} />
        ))}
      </div>
      <div style={{ height: "1.5rem" }} />
    </div>
  );
}

function IngredientGroup({ name, ingredients }: IngredientPart) {
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
        return (
          <IngredientEntry
            key={i}
            style={{ backgroundColor: i % 2 == 0 ? "#00000006" : "#00000012 " }}
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
}: IngredientItem & { style?: React.CSSProperties }) {
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
        ...style,
      }}
    >
      <span style={{ flex: 2 }}>{name}</span>
      <span style={{ flex: 1, textAlign: "center" }}>{quantity}</span>
      <span style={{ flex: 1, textAlign: "right" }}>${price.toFixed(2)}</span>
    </div>
  );
}

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Theme } from "../../utils/globals";
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
                  width: 25,
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
                  width: 25,
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
                  width: 25,
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
