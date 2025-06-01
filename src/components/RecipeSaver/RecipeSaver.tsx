import React from "react";
import { useGlobal } from "../../hooks/GlobalContext";
import { getRecipeById } from "../../utils/recipeData";
import { FaRegCheckCircle } from "react-icons/fa";
import { Theme } from "../../utils/globals";
import { BiPlus } from "react-icons/bi";
import SavedRecipes from "../../pages/SavedRecipes/SavedRecipes";

// Replace with your actual context import

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.75)",
  zIndex: 99999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  borderRadius: "1rem",
  width: 320,
  // maxWidth: 400,
  height: "70vh",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 4px 32px rgba(0,0,0,0.2)",
};

const headerStyle: React.CSSProperties = {
  padding: "1.5rem 1rem 1rem 1rem",
  fontWeight: 700,
  fontSize: "1.5rem",
  borderBottom: "1px solid #eee",
  textAlign: "center",
};

const contentStyle: React.CSSProperties = {
  paddingTop: 8,
  flex: 1,
  display: "flex",
  justifyContent: "space-evenly",
  alignContent: "start",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  backgroundColor: "#00000022",
};

const buttonStyle: React.CSSProperties = {
  margin: "1rem",
  marginTop: "0.5rem",
  padding: "0.75rem",
  background: "#222",
  color: "#fff",
  border: "none",
  borderRadius: "0.5rem",
  fontWeight: 600,
  cursor: "pointer",
};

const RecipeSaver: React.FC = () => {
  const {
    recipeSaverActive,
    setRecipeSaverActive,
    savedRecipes,
    setSavedRecipes,
    activeRecipeID,
  } = useGlobal();

  if (!recipeSaverActive) return null;

  const allRecipes: string[] = [];
  Object.keys(savedRecipes).forEach((s) => {
    for (let item of savedRecipes[s]) {
      allRecipes.push(item);
    }
  });
  const exists = allRecipes.includes(activeRecipeID);

  const handleRemoveAll = () => {
    if (!exists) {
      return;
    }
    const newSavedRecipes = { ...savedRecipes };
    for (let listKey of Object.keys(newSavedRecipes)) {
      const list = [...savedRecipes[listKey]];
      if (list.includes(activeRecipeID)) {
        list.splice(list.indexOf(activeRecipeID), 1);
        newSavedRecipes[listKey] = list;
      }
    }
    setSavedRecipes(newSavedRecipes);
    // setRecipeSaverActive(false);
  };

  const handleClose = () => {
    // Implement removal logic here
    setRecipeSaverActive(false);
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={headerStyle}>Saved Recipes</div>
        <div style={contentStyle}>
          {Object.keys(savedRecipes).map((key) => {
            return <RecipeListDisplay key={key} listName={key} />;
          })}
          <div
            style={{
              width: 150,
              boxSizing: "border-box",
              height: 176,
              marginBottom: 10,
              borderRadius: 8,
              overflow: "hidden",
              border: "1px solid #0004",
              backgroundColor: "#fff8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <BiPlus size={"4rem"} color={Theme.darkGrey} />
            <span style={{ color: Theme.darkGrey, lineHeight: 0 }}>
              New List
            </span>
          </div>
        </div>
        <button
          style={{
            ...buttonStyle,
            marginBottom: 0,
            marginTop: "0.75rem",
            backgroundColor: Theme.orange,
          }}
          onClick={handleClose}
        >
          Done
        </button>
        <button
          style={{
            ...buttonStyle,
            marginBottom: "0.75rem",
            opacity: exists ? 1 : 0.5,
          }}
          onClick={handleRemoveAll}
          disabled={!exists}
        >
          Remove from all lists
        </button>
      </div>
    </div>
  );
};

interface RecipeListDisplayProps {
  listName: string;
  checkIfInclides?: string;
}

const imageContainerStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
  alignItems: "start",
  height: 148,
  position: "relative",
  backgroundColor: "#fff8",
};

const imageStyle: React.CSSProperties = {
  width: 74,
  aspectRatio: 1,
  overflow: "hidden",
  objectFit: "cover",
  margin: 0,
  padding: 0,
  display: "flex",
};

const listNameStyle: React.CSSProperties = {
  textAlign: "center",
  fontWeight: 600,
  fontSize: "1rem",
  paddingTop: 4,
  backgroundColor: "white",
};

const RecipeListDisplay: React.FC<RecipeListDisplayProps> = ({ listName }) => {
  const { savedRecipes, activeRecipeID, setSavedRecipes } = useGlobal();
  const recipes = savedRecipes?.[listName] || [];

  const imagesToShow = recipes
    .slice(0, 4)
    .map((recipeID) => getRecipeById(recipeID));
  // const extraCount = recipes.length - 4;
  const includesCurrentRecipe = recipes.includes(activeRecipeID);

  const addToRecipeList = () => {
    const newRecipes = [...recipes];
    if (recipes && recipes.includes(activeRecipeID)) {
      newRecipes.splice(newRecipes.indexOf(activeRecipeID), 1);
    } else {
      newRecipes.push(activeRecipeID);
    }
    setSavedRecipes({ ...savedRecipes, [listName]: newRecipes });
  };

  return (
    <div
      style={{
        width: 150,
        boxSizing: "border-box",
        marginBottom: 10,
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid #0004",
      }}
    >
      <div
        style={{
          ...imageContainerStyle,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: includesCurrentRecipe ? "#fff6" : "transparent",
            position: "absolute",
            zIndex: 10,
          }}
          onClick={() => addToRecipeList()}
        />
        {includesCurrentRecipe && (
          <FaRegCheckCircle
            size={"3rem"}
            color="#fffc"
            style={{
              position: "absolute",
              zIndex: 18,
              right: "50%",
              top: "50%",
              transform: "translate(50%, -50%)",
            }}
          />
        )}
        {imagesToShow.length == 0 && (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "0.8rem" }}>Empty List</span>
          </div>
        )}
        {imagesToShow.map((recipe: any, idx: number) => {
          // const hasExtra = idx === 3 && extraCount > 0;
          return (
            <div
              style={{
                margin: 0,
                padding: 0,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
              key={idx}
            >
              {/* {hasExtra && (
                <span style={{ position: "absolute", fontSize: "1.8rem", color: '#ffff', zIndex: 1 }}>
                  +{extraCount}
                </span>
              )} */}
              <img
                src={recipe.image}
                alt={recipe.title || "Recipe"}
                style={{
                  ...imageStyle,
                  padding: 0,
                }}
              />
            </div>
          );
        })}
      </div>
      <div style={listNameStyle}>{listName}</div>
    </div>
  );
};

export default RecipeSaver;
