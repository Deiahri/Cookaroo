import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RecipeBookmark from "../RecipeBookmark/RecipeBookmark";
import { Theme } from "../../utils/globals";

type RecipeTagProps = {
  tags: string[];
  small?: boolean;
};

export const RecipeTags: React.FC<RecipeTagProps> = ({ tags, small = false }) => (
  <div
    style={{
      display: "flex",
      gap: small ? "0.3rem" : "0.5rem",
      flexWrap: "wrap",
      margin: "0.25rem 0",
      justifyContent: "start",
      alignItems: "start",
    }}
  >
    {tags.map((tag, idx) => (
      <span
        key={idx}
        style={{
          background: "#eee",
          borderRadius: "12px",
          padding: small ? "0.15rem 0.5rem" : "0.25rem 0.75rem",
          fontSize: small ? "0.7rem" : "0.85rem",
        }}
      >
        {tag}
      </span>
    ))}
  </div>
);

type RecipeTileProps = {
  image: string;
  title: string;
  tags: string[];
  description: string;
  small?: boolean;
  id?: string;
};

const RecipeTile: React.FC<RecipeTileProps> = ({
  image,
  title,
  tags,
  description,
  small = false,
  id,
}) => {
  const navigate = useNavigate();
  const goToRecipePage = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate("/main/recipe?id=" + id);
  };
  const tileStyles = small
    ? {
        padding: "0.5rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        height: 160,
        width: 180,
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "start",
        background: "#fff",
        flexShrink: 0,
        position: "relative" as const,
        boxSizing: "border-box" as const,
        color: Theme.darkGrey
      }
    : {
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        height: 250,
        width: 300,
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "start",
        background: "#fff",
        flexShrink: 0,
        position: "relative" as const,
        boxSizing: "border-box" as const,
      };

  const imageStyles = small
    ? {
        width: "100%",
        height: 100,
        objectFit: "cover" as const,
        borderRadius: "6px",
      }
    : {
        width: "100%",
        height: "100%",
        objectFit: "cover" as const,
        borderRadius: "6px",
      };

  const imageContainerStyles = small
    ? {
        width: "100%",
        height: 100,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0.2rem",
      }
    : {
        width: "100%",
        height: 125,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0.2rem",
      };

  return (
    <div style={tileStyles}>
      <div style={imageContainerStyles}>
        <img src={image} alt={title} style={imageStyles} />
      </div>
      <h3
        style={{
          margin: "0 0 0rem 0",
          fontSize: small ? "0.9rem" : "1.2rem",
          lineHeight: small ? "1rem" : "2rem",
          textAlign: "start",
        }}
      >
        {title}
      </h3>
      <RecipeTags tags={tags} small={small} />
      <span
        style={{
          fontSize: small ? "0.75rem" : "0.95rem",
          color: "#555",
          textAlign: "center",
          marginTop: "0.25rem",
        }}
      >
        {description}
      </span>
      {!small && <RecipeBookmark
        size={"1.5rem"}
        style={{
          position: "absolute",
          right: "3rem",
          bottom: "1rem",
        }}
        id={id}
      />}
      <FaArrowCircleRight
        onClick={goToRecipePage}
        color={"#333"}
        size={small ? "1.1rem" : "1.5rem"}
        style={{
          position: "absolute",
          right: small ? "0.5rem" : "1rem",
          bottom: small ? "0.5rem" : "1rem",
        }}
      />
    </div>
  );
};

export default RecipeTile;
