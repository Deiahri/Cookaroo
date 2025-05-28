import React from "react";
import Header from "../../components/Header/Header";
import { FaRegMessage } from "react-icons/fa6";
import { FaArrowCircleRight, FaMicrophone } from "react-icons/fa";
import { Theme } from "../../utils/globals";
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {
  // Placeholder function to handle selection
  const [includeList, setIncludeList] = React.useState<string[]>([]);
  const [excludeList, setExcludeList] = React.useState<string[]>([]);
  const navigate = useNavigate();

  const handleIngredientSelect = (
    ingredient: string,
    type: "include" | "exclude"
  ) => {
    if (type === "include") {
      setIncludeList((prev) =>
        prev.includes(ingredient) ? prev : [...prev, ingredient]
      );
    } else {
      setExcludeList((prev) =>
        prev.includes(ingredient) ? prev : [...prev, ingredient]
      );
    }
    console.log(`Selected ${ingredient} as ${type}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: "#fafafa",
      }}
    >
      <Header title="Search" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "85vh",
        }}
      >
        <div
          style={{ position: "relative", width: "320px", marginBottom: "1rem" }}
        >
          <input
            type="text"
            placeholder="What are you craving?"
            style={{
              borderRadius: "999px",
              padding: "1rem 2rem",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "1.1rem",
              width: "100%",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              boxSizing: "border-box",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#00796b",
              fontSize: "1.6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title="Search"
          >
            {/* FaArrowCircleRight icon */}
            {/** @ts-ignore */}
            {<FaArrowCircleRight color={Theme.orange} />}
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            width: "320px",
          }}
        >
          <select
            style={{
              borderRadius: "20px",
              padding: "0.75rem 1rem",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) {
                handleIngredientSelect(e.target.value, "include");
              }
            }}
          >
            <option value="" disabled>
              Include
            </option>
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="pork">Pork</option>
            <option value="fish">Fish</option>
            <option value="seafood">Seafood</option>
            <option value="turkey">Turkey</option>
            <option value="lamb">Lamb</option>
            <option value="duck">Duck</option>
            <option value="tofu">Tofu</option>
            <option value="tempeh">Tempeh</option>
            <option value="eggs">Eggs</option>
            <option value="cheese">Cheese</option>
            <option value="milk">Milk</option>
            <option value="yogurt">Yogurt</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
            <option value="low-carb">Low-Carb</option>
            <option value="keto">Keto</option>
            <option value="paleo">Paleo</option>
            <option value="whole30">Whole30</option>
            <option value="nuts">Nuts</option>
            <option value="soy">Soy</option>
            <option value="beans">Beans</option>
            <option value="lentils">Lentils</option>
            <option value="rice">Rice</option>
            <option value="quinoa">Quinoa</option>
            <option value="potato">Potato</option>
            <option value="corn">Corn</option>
            <option value="mushrooms">Mushrooms</option>
            <option value="spinach">Spinach</option>
            <option value="broccoli">Broccoli</option>
            <option value="tomato">Tomato</option>
            <option value="onion">Onion</option>
            <option value="garlic">Garlic</option>
            <option value="peppers">Peppers</option>
            <option value="carrot">Carrot</option>
            <option value="zucchini">Zucchini</option>
            <option value="eggplant">Eggplant</option>
            <option value="fruit">Fruit</option>
            <option value="berries">Berries</option>
            <option value="banana">Banana</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="grapes">Grapes</option>
            <option value="avocado">Avocado</option>
            {/* Add more options as needed */}
          </select>
          <select
            style={{
              borderRadius: "20px",
              padding: "0.75rem 1rem",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) {
                handleIngredientSelect(e.target.value, "exclude");
              }
            }}
          >
            <option value="" disabled>
              Exclude
            </option>
            <option value="nuts">Nuts</option>
            <option value="dairy">Dairy</option>
            <option value="gluten">Gluten</option>
            <option value="seafood">Seafood</option>
            <option value="soy">Soy</option>
            <option value="eggs">Eggs</option>
            <option value="shellfish">Shellfish</option>
            <option value="peanuts">Peanuts</option>
            <option value="sesame">Sesame</option>
            <option value="mustard">Mustard</option>
            <option value="celery">Celery</option>
            <option value="lupin">Lupin</option>
            <option value="sulfites">Sulfites</option>
            <option value="fish">Fish</option>
            <option value="pork">Pork</option>
            <option value="beef">Beef</option>
            <option value="chicken">Chicken</option>
            <option value="lamb">Lamb</option>
            <option value="duck">Duck</option>
            <option value="turkey">Turkey</option>
            <option value="tofu">Tofu</option>
            <option value="tempeh">Tempeh</option>
            <option value="beans">Beans</option>
            <option value="lentils">Lentils</option>
            <option value="rice">Rice</option>
            <option value="quinoa">Quinoa</option>
            <option value="potato">Potato</option>
            <option value="corn">Corn</option>
            <option value="mushrooms">Mushrooms</option>
            <option value="spinach">Spinach</option>
            <option value="broccoli">Broccoli</option>
            <option value="tomato">Tomato</option>
            <option value="onion">Onion</option>
            <option value="garlic">Garlic</option>
            <option value="peppers">Peppers</option>
            <option value="carrot">Carrot</option>
            <option value="zucchini">Zucchini</option>
            <option value="eggplant">Eggplant</option>
            <option value="fruit">Fruit</option>
            <option value="berries">Berries</option>
            <option value="banana">Banana</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="grapes">Grapes</option>
            <option value="avocado">Avocado</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div
          style={{
            marginTop: "2rem",
            width: "320px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              marginBottom: "1rem",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <strong>Include:</strong>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "0.5rem",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {includeList.length === 0 ? (
                <span style={{ color: "#aaa" }}>None</span>
              ) : (
                includeList.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setIncludeList((prev) => prev.filter((i) => i !== item))
                    }
                    style={{
                      background: "#e0f7fa",
                      border: "none",
                      borderRadius: "16px",
                      padding: "0.4rem 1rem",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      color: "#00796b",
                      transition: "background 0.2s",
                    }}
                    title="Remove"
                  >
                    {item} &times;
                  </button>
                ))
              )}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <strong>Exclude:</strong>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "0.5rem",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {excludeList.length === 0 ? (
                <span style={{ color: "#aaa" }}>None</span>
              ) : (
                excludeList.map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setExcludeList((prev) => prev.filter((i) => i !== item))
                    }
                    style={{
                      background: "#ffebee",
                      border: "none",
                      borderRadius: "16px",
                      padding: "0.4rem 1rem",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      color: "#c62828",
                      transition: "background 0.2s",
                    }}
                    title="Remove"
                  >
                    {item} &times;
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "3.5rem",
          left: 0,
          width: "100vw",
          background: "#fff",
          boxShadow: "0 -2px 12px rgba(0,0,0,0.08)",
          padding: "1rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0rem",
          zIndex: 100,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            marginBottom: "0.5rem",
            color: "#444",
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          Let Chef Sue help you find the perfect recipe!
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: Theme.orangeAccent,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              transition: "background 0.2s",
            }}
            onClick={() => navigate('/main/sue')}
          >
            <span>
              <FaRegMessage color="white" size={"1rem"} />
            </span>
            Text Chef Sue
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#c62828",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              transition: "background 0.2s",
            }}
            onClick={() => navigate('/main/sue?v=true')}
          >
            <span>
              <FaMicrophone color="white" size={"1rem"} />
            </span>
            Talk with Chef Sue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
