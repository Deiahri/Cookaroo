import ChefSue from "../../assets/logo.png";
import { useColorTheme } from "../../hooks/useColorTheme";
import styles from "./OnBoot.module.css";

export default function OnBoot() {
  const { colors } = useColorTheme();

  return (
    <div
      className={styles["fade-out"]}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: colors.background,
        position: 'fixed',
        zIndex: 1000
      }}
    >
      <img
        src={ChefSue}
        alt="Centered"
        className={styles["fade-in-scale"]}
        style={{
          width: "60vw",
          height: "60vw",
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
