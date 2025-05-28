import { useState } from "react";
import Button from "../../components/Button/Button";
import { Theme } from "../../utils/globals";
import Header from "../../components/Header/Header";
import Graph, { type Series } from "../../components/Graph/Graph";
import { BsBookmarkFill } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";

const Savings: React.FC = () => {
  const [selected, setSelected] = useState<"week" | "month" | "year">("week");

  let savingsData: Series[];
  switch (selected) {
    case 'week':
      savingsData = exampleData;
      break;
    case 'month':
      savingsData = exampleDataM;
      break;
    case 'year':
      savingsData = exampleDataY;
      break;
    default:
      savingsData = exampleData;
  }

  return (
    <div
      style={{
        width: "100vw",
        // height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Header title={"Total Savings"} />
      <div
        style={{
          display: "flex",
          gap: "8px",
          margin: "16px 0",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setSelected("week")}
          style={{
            padding: "8px 16px",
            background: selected === "week" ? Theme.orange : "transparent",
            color: selected === "week" ? "#fff" : Theme.orange,
            border: "2px solid",
            borderColor: Theme.orange,
            cursor: "pointer",
          }}
        >
          Week
        </Button>
        <Button
          onClick={() => setSelected("month")}
          style={{
            padding: "8px 16px",
            background: selected === "month" ? Theme.orange : "transparent",
            color: selected === "month" ? "#fff" : Theme.orange,
            border: "2px solid",
            borderColor: Theme.orange,
            cursor: "pointer",
          }}
        >
          Month
        </Button>
        <Button
          onClick={() => setSelected("year")}
          style={{
            padding: "8px 16px",
            background: selected === "year" ? Theme.orange : "transparent",
            color: selected === "year" ? "#fff" : Theme.orange,
            border: "2px solid",
            borderColor: Theme.orange,
            cursor: "pointer",
          }}
        >
          Year
        </Button>
      </div>

      {/* <DateRange/> */}
      <Graph data={savingsData} barColors={[Theme.orange]} />

      <hr
        style={{
          width: "90%",
          border: "none",
          borderTop: `1px solid ${Theme.almostWhiteAccent}`,
          margin: "16px auto",
        }}
      />
      <div
        style={{
          width: "100%",
          padding: "0rem 1rem",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "1.25rem",
            color: Theme.orange,
            width: "100%",
          }}
        >
          Breakdown
        </span>
        <div style={{ height: "1rem" }} />
        <FavoriteCard
          image="https://www.allrecipes.com/thmb/Hjtdsi9pQHMHxQkfXgz2pM35oiw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5887501-d1380073edaa4bb9b42e22efcb35c54c.jpg"
          title="Favorite Dish"
          subtitles={[
            "McMarry's Waffle and Fruits",
            "Prepared 6 times",
            <span key="saved">
              <span style={{ fontWeight: 700 }}>
                $83.88
              </span>{" "}
              saved
            </span>,
          ]}
        />
        <div style={{ height: "1rem" }} />
        <FavoriteCard
          image="https://www.simplyrecipes.com/thmb/3R8GlHzhL5qigI173Ovk-Hiv0As=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chinese-Orange-Chicken-LEAD-3-d2eb0aec5ec149c0b4ba7da2121cbabc.jpg"
          title="Biggest Save"
          subtitles={[
            "Chinese Orange Chicken",
            "Prepared 6 times",
            <span key="saved">
              <span style={{ fontWeight: 700 }}>
                $83.88
              </span>{" "}
              saved
            </span>,
          ]}
        />
      </div>
      {/* Add your content here */}
      <div style={{ height: "15vh" }} />
    </div>
  );
};

type FavoriteCardProps = {
  image: string;
  title: string;
  subtitles: React.ReactNode[];
};

function FavoriteCard({ image, title, subtitles }: FavoriteCardProps) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        aspectRatio: 16 / 9,
        width: "100%",
        borderRadius: '0.5rem'
      }}
    >
      <img style={{ width: "100%" }} src={image} />
      <BsBookmarkFill
        color={Theme.orange}
        size={"2rem"}
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "4rem",
          zIndex: 2,
        }}
      />
      <FaArrowCircleRight 
        color={Theme.orange}
        size={"2rem"}
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          zIndex: 2,
        }} />
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "1rem",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          background: "linear-gradient(to bottom, #000a 60%, transparent 100%)",
        }}
      >
        <span
          style={{
            display: "flex",
            color: Theme.orange,
            fontSize: "1.5rem",
            fontWeight: 700
          }}
        >
          {title}
        </span>
        {subtitles.map((subtitle, idx) => (
          <span
            key={idx}
            style={{
              display: "flex",
              color: idx === 0 ? "white" : "white",
              fontSize: "1rem",
            }}
          >
            {subtitle}
          </span>
        ))}
      </div>
    </div>
  );
}

const exampleData: Series[] = [
  {
    name: "Weekly Savings",
    values: Array.from({ length: 6 }, (_, i) => {
      const startDate = new Date(2024, 4, 21); // May is month 4 (0-indexed)
      const date = new Date(startDate.getTime() + i * 7 * 24 * 60 * 60 * 1000);
      const month = date.toLocaleString("default", { month: "short" });
      const day = date.getDate();
      const x = `${month} ${day}`;
      const y = +(Math.random() * (54.33 - 9.21) + 9.21).toFixed(2);
      return { x, y };
    }),
  },
];

const exampleDataM: Series[] = [
  {
    name: "Monthly Savings",
    values: Array.from({ length: 6 }, (_, i) => {
      const startDate = new Date(2024, 4, 1); // May is month 4 (0-indexed)
      const date = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
      const month = date.toLocaleString("default", { month: "short" });
      const x = `${month} ${date.getFullYear()}`;
      const y = +(Math.random() * (250 - 80) + 80).toFixed(2); // Simulate monthly savings
      return { x, y };
    }),
  },
];

const exampleDataY: Series[] = [
  {
    name: "Yearly Savings",
    values: Array.from({ length: 6 }, (_, i) => {
      const startYear = 2020;
      const year = startYear + i;
      const x = `${year}`;
      const y = +(Math.random() * (2000 - 500) + 500).toFixed(2); // Simulate yearly savings
      return { x, y };
    }),
  },
];

export default Savings;
