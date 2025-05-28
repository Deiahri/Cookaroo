import React, { useState } from "react";
import { FaClock, FaDollarSign, FaUsers } from "react-icons/fa";
import Header from "../../components/Header/Header";

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

const Recipe: React.FC = () => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

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
      <Header title="Recipe: Beef Tacos" />
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
        alt="Tacos"
        style={{
          width: "90vw",
          height: "50vw",
          objectFit: "cover",
          borderRadius: "1rem",
          maxWidth: 600,
          maxHeight: 350,
        }}
      />
      <div style={{ fontSize: "0.9rem", color: "#666", margin: "1rem 0 2rem", width: '90%', textAlign: 'center' }}>
        Delicious homemade chicken tacos with fresh toppings.
      </div>
      <div style={{ width: "90vw", maxWidth: 600 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FaClock size={24} style={{ marginRight: 12 }} />
          <span>Prep Time: 20 mins</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <FaDollarSign size={24} style={{ marginRight: 12 }} />
          <span>Cost: $10</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <FaUsers size={24} style={{ marginRight: 12 }} />
          <span>Servings: 4</span>
        </div>
        {/* Ingredients Dropdown */}
        <div style={{ marginBottom: "1rem" }}>
          <button
            onClick={() => setShowIngredients((v) => !v)}
            style={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
              background: "#f5f5f5",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              textAlign: "left",
              marginBottom: showIngredients ? "1rem" : 0,
            }}
          >
            {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
          </button>
          {showIngredients && (
            <div>
              {ingredients.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.5rem 0.75rem",
                    borderBottom: "1px solid #eee",
                    background: idx % 2 === 0 ? "#fafafa" : "#fff",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Recipe Steps Dropdown */}
        <div>
          <button
            onClick={() => setShowSteps((v) => !v)}
            style={{
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
              background: "#f5f5f5",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              textAlign: "left",
              marginBottom: showSteps ? "1rem" : 0,
            }}
          >
            {showSteps ? "Hide Recipe Steps" : "Show Recipe Steps"}
          </button>
          {showSteps && (
            <div
              style={{
                padding: "0.75rem",
                background: "#fafafa",
                borderRadius: "0.5rem",
              }}
              dangerouslySetInnerHTML={{ __html: recipeSteps }}
            />
          )}
        </div>
      </div>
      <div style={{ height: '5rem' }} />
    </div>
  );
};

export default Recipe;