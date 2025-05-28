import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

type RecipeTagProps = {
  tags: string[];
};

const RecipeTags: React.FC<RecipeTagProps> = ({ tags }) => (
  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "0.25rem 0", justifyContent: 'start', alignItems: 'start' }}>
    {tags.map((tag, idx) => (
      <span
        key={idx}
        style={{
          background: "#eee",
          borderRadius: "12px",
          padding: "0.25rem 0.75rem",
          fontSize: "0.85rem",
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
};

const RecipeTile: React.FC<RecipeTileProps> = ({ image, title, tags, description }) => (
  <div
    style={{
      padding: "1rem",
      boxSizing: "border-box",
      border: "1px solid #ddd",
      borderRadius: "8px",
      height: 250,
      width: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      background: "#fff",
      flexShrink: 0,
      position: 'relative'
    }}
  >
    <div
      style={{
        width: "100%",
        height: 125,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "0.2rem",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
    </div>
    <h3 style={{ margin: "0 0 0rem 0", fontSize: "1.2rem", textAlign: "center" }}>{title}</h3>
    <RecipeTags tags={tags} />
    <span style={{ fontSize: "0.95rem", color: "#555", textAlign: "center", marginTop: '0.25rem' }}>{description}</span>
    <FaArrowCircleRight color={'#333'} size={'1.5rem'} style={{ position: 'absolute', right: '1rem', bottom: '1rem' }} />
  </div>
);

export default RecipeTile;