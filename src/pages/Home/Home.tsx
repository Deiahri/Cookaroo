import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import RecipeTile from "../../components/RecipeTile/RecipeTile";
import { useNavigate } from "react-router-dom";

const RecommendedItems = () => (
  <>
    <RecipeTile
      id="5a9b2-fd21e83-3c77b1-4f6c02e-91ab4fc"
      image="https://www.simplyrecipes.com/thmb/3R8GlHzhL5qigI173Ovk-Hiv0As=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chinese-Orange-Chicken-LEAD-3-d2eb0aec5ec149c0b4ba7da2121cbabc.jpg"
      title="Orange Chicken"
      tags={["20 minutes", "gluten-free"]}
      description="9 Ingredients required"
    />
    <RecipeTile
      image="https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-2-1200.jpg"
      title="Classic Spaghetti"
      tags={["30 minutes", "vegetarian"]}
      description="7 Ingredients required"
    />
    <RecipeTile
      image="https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos-1200x1200.jpg"
      title="Beef Tacos"
      tags={["25 minutes", "dairy-free"]}
      description="10 Ingredients required"
    />
  </>
);

const TopSellers = () => (
  <>
    <RecipeTile
      image="https://www.simplyrecipes.com/thmb/3R8GlHzhL5qigI173Ovk-Hiv0As=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chinese-Orange-Chicken-LEAD-3-d2eb0aec5ec149c0b4ba7da2121cbabc.jpg"
      title="Orange Chicken"
      tags={["20 minutes", "gluten-free"]}
      description="9 Ingredients required"
    />
    <RecipeTile
      image="https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-2-1200.jpg"
      title="Classic Spaghetti"
      tags={["30 minutes", "vegetarian"]}
      description="7 Ingredients required"
    />
    <RecipeTile
      image="https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos-1200x1200.jpg"
      title="Beef Tacos"
      tags={["25 minutes", "dairy-free"]}
      description="10 Ingredients required"
    />
  </>
);

const TryCuisines = () => (
  <div style={{ display: "flex", gap: "0.5rem" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
      src="https://www.simplyrecipes.com/thmb/3R8GlHzhL5qigI173Ovk-Hiv0As=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chinese-Orange-Chicken-LEAD-3-d2eb0aec5ec149c0b4ba7da2121cbabc.jpg"
      alt="Orange Chicken"
      style={{
        width: 90,
        height: 90,
        borderRadius: "50%",
        objectFit: "cover",
        border: "1px solid #0008"
      }}
      />
      <span style={{ marginTop: "0.5rem", fontSize: "1rem" }}>Chinese</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
      src="https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-2-1200.jpg"
      alt="Classic Spaghetti"
      style={{
        width: 90,
        height: 90,
        borderRadius: "50%",
        objectFit: "cover",
        border: "1px solid #0008"
      }}
      />
      <span style={{ marginTop: "0.5rem", fontSize: "1rem" }}>Italian</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
      src="https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos-1200x1200.jpg"
      alt="Beef Tacos"
      style={{
        width: 90,
        height: 90,
        borderRadius: "50%",
        objectFit: "cover",
        border: "1px solid #0008"
      }}
      />
      <span style={{ marginTop: "0.5rem", fontSize: "1rem" }}>Mexican</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
      src="https://www.johansens.com/wp-content/uploads/2021/02/French-Food-97-e1689959796172.jpg"
      alt="Beef Tacos"
      style={{
        width: 90,
        height: 90,
        borderRadius: "50%",
        objectFit: "cover",
        border: "1px solid #0008"
      }}
      />
      <span style={{ marginTop: "0.5rem", fontSize: "1rem" }}>French</span>
    </div>
  </div>
);

const sections = [
  // {
  //   title: "Recommended for You",
  //   content: <RecommendedItems />,
  // },
  {
    title: "Trending Recipes",
    content: <TopSellers />,
  },
  {
    title: "Try these cuisine",
    content: <TryCuisines />,
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        boxSizing: "border-box",
        padding: "3rem 0rem 0rem 1.5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        background: "#fafafa",
        overflowX: "hidden",
      }}
    >
      <h1 style={{ margin: 0, marginTop: '2rem', fontSize: "1.5rem", marginBottom: "1rem" }}>
        Howdy, Stephen!
      </h1>

      {/* Search Bar */}
      <button
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: '93%',
          padding: "0.75rem 1rem",
          paddingLeft: "2.5rem",
          paddingTop: "0.85rem",
          marginRight: '3rem',
          borderRadius: 50,
          border: "1px solid #ddd",
          fontSize: "1rem",
          background: "#fff",
          cursor: "pointer",
          outline: "none",
          boxSizing: 'border-box',
          justifyContent: "flex-start",
        }}
        onClick={() => navigate('/main/sue')}
      >
        <FaMagnifyingGlass
          style={{
        position: "absolute",
        left: "1rem",
        pointerEvents: "none",
          }}
        />
        <span style={{ color: "#888" }}>Ask Sue for Recipes</span>
      </button>

      {/* Sections */}
      <div style={{ width: "100%", marginTop: "2rem" }}></div>
      {sections.map((section) => (
        <div key={section.title} style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
            {section.title}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              alignItems: "center",
              width: "93vw",
              flexWrap: "nowrap",
              gap: "0.5rem",
              paddingRight: '2rem',
              boxSizing: 'border-box'
            }}
          >
            {section.content}
          </div>
        </div>
      ))}
      <div style={{height: '5rem'}} />
    </div>
  );
};

export default Home;
