import React, { useState } from "react";
import { FaClock, FaDollarSign, FaUsers } from "react-icons/fa";
import Header from "../../components/Header/Header";
import { useSearchParams } from "react-router-dom";
import { getRecipeById } from "../../utils/recipeData";
import RecipeBookmark from "../../components/RecipeBookmark/RecipeBookmark";
import { RecipeTags } from "../../components/RecipeTile/RecipeTile";
import { IoIosTimer } from "react-icons/io";
import { PiMoneyDuotone } from "react-icons/pi";
import { LuUtensils } from "react-icons/lu";
import styles from "./Recipe.module.css";

const ingredients = [
  "8 small corn tortillas",
  "2 cups cooked and shredded chicken",
  "1 cup shredded lettuce",
  "1/2 cup diced tomatoes",
  "1/2 cup shredded cheese",
  "1/4 cup chopped onions",
  "1/4 cup chopped cilantro",
  "Salsa, to taste",
  "Lime wedges, for serving",
];

const recipeSteps = `
<ol>
  <li>Warm the corn tortillas in a skillet or microwave until soft.</li>
  <li>Fill each tortilla with shredded chicken.</li>
  <li>Top with lettuce, tomatoes, cheese, onions, and cilantro.</li>
  <li>Add salsa to taste.</li>
  <li>Serve with lime wedges on the side. Enjoy your tacos!</li>
</ol>
`;

type tabs = "Nutrition" | "Ingredients" | "Instructions" | "Video";
const Tabs: tabs[] = ["Nutrition", "Ingredients", "Instructions", "Video"];
const Recipe: React.FC = () => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showSteps, setShowSteps] = useState(false);
  const [getParams, _] = useSearchParams();
  const [tab, setTab] = useState<tabs>("Nutrition");

  const handleTabChange = (newTab: tabs) => {
    setTab(newTab);
  };

  const recipeID = getParams.get("id");
  console.log(recipeID);
  if (!recipeID) {
    return <span>No recipe</span>;
  }
  const recipeObj = getRecipeById(recipeID);
  if (!recipeObj) {
    return <span>id invalid</span>;
  }
  console.log(recipeObj);

  let recipeTitle = `Recipe: ${recipeObj.title}`;
  if (recipeTitle.length > 35) {
    recipeTitle = recipeTitle.substring(0, 32).trim() + "...";
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
      }}
    >
      <Header style={{ top: "0", position: "fixed" }} title={recipeTitle} />
      <RecipeBookmark
        size={"1.5rem"}
        style={{ position: "fixed", top: "1.5rem", right: "1.1rem" }}
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
          paddingLeft: "1rem",
          paddingRight: "1rem",
          boxSizing: "border-box",
          height: "3rem",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        {Tabs.map((name) => (
          <div
            key={name}
            onClick={() => handleTabChange(name)}
            style={{
              margin: "0rem 1.5rem",
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
      {tab == "Nutrition" && <Nutrition />}
      <div style={{ height: "5rem" }} />
    </div>
  );
};
export default Recipe;

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function Nutrition() {
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

  return (
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
          gap: '0.75rem'
        }}
      >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{width: 60, display: 'flex', justifyContent: 'end'}}>
            <div
              style={{
                border: `4px solid ${chartColors[0]}`,
                backgroundColor: chartColors[0] + "88",
                aspectRatio: 1,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.8rem",
                padding: "0.4rem",
                borderRadius: "50%",
                width: 25
              }}
            >
              <span>87g</span>
            </div>
          </div>
          <span style={{fontSize: '1.25rem', marginLeft: '0.5rem', fontWeight: 500, width: 100}}>Carbs</span>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{width: 60, display: 'flex', justifyContent: 'end'}}>
            <div
              style={{
                border: `4px solid ${chartColors[1]}`,
                backgroundColor: chartColors[1] + "88",
                aspectRatio: 1,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.8rem",
                padding: "0.4rem",
                borderRadius: "50%",
                width: 25
              }}
            >
              <span>24g</span>
            </div>
          </div>
          <span style={{fontSize: '1.25rem', marginLeft: '0.5rem', fontWeight: 500, width: 100}}>Fat</span>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{width: 60, display: 'flex', justifyContent: 'end'}}>
            <div
              style={{
                border: `4px solid ${chartColors[2]}`,
                backgroundColor: chartColors[2] + "88",
                aspectRatio: 1,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.8rem",
                padding: "0.4rem",
                borderRadius: "50%",
                width: 25
              }}
            >
              <span>144g</span>
            </div>
          </div>
          <span style={{fontSize: '1.25rem', marginLeft: '0.5rem', fontWeight: 500, width: 100}}>Protein</span>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginRight: '1rem',
          boxSizing: 'border-box'
        }}
      >
        <Doughnut data={data} options={options} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: -12 }}
          >
            1500
          </span>
          <span style={{ fontSize: "1rem", fontWeight: 700 }}>kcal</span>
        </div>
      </div>
    </div>
  );
}
