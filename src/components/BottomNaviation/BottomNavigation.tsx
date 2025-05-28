import React from "react";
import { FaBookmark, FaChartLine } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LuChefHat } from "react-icons/lu";
import { MdHomeFilled } from "react-icons/md";
import { Theme } from "../../utils/globals";
import { useColorTheme } from "../../hooks/useColorTheme";
import { useNavigate, type NavigateOptions, type To } from "react-router-dom";

type NavButton = {
  label: string;
  icon?: React.ReactNode; // icon can be an <img> or any ReactNode
  onClick?: () => void;
};

interface BottomNavigationProps {
  buttons?: NavButton[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = () => {
  const navigate = useNavigate();
  const { theme } = useColorTheme();
  const isLightTheme = theme == "light";
  const iconColor = isLightTheme ? Theme.orange : Theme.orange;
  const textColor = isLightTheme ? Theme.orange : Theme.almostWhite;
  const backgroundColor = isLightTheme
    ? Theme.almostWhiteAccent
    : Theme.darkGreyAccent;

  const nav = (To: To, NavigateOptions?: NavigateOptions) => {
    navigate(To, NavigateOptions);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  const buttons: NavButton[] = [
    { label: "Home", icon: <MdHomeFilled onClick={() => nav('/main/home')} size={24} color={iconColor} /> },
    { label: "Savings", icon: <FaChartLine onClick={() => nav('/main/savings')} size={24} color={iconColor} /> },
    { label: "Chef Sue", icon: <LuChefHat onClick={() => nav('/main/sue')} size={24} color={iconColor} /> },
    { label: "Recipes", icon: <FaBookmark onClick={() => nav('/main/saved-recipes')} size={20} color={iconColor} /> },
    { label: "Profile", icon: <IoPerson onClick={() => nav('/main/profile')} size={24} color={iconColor} /> },
  ];
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: backgroundColor,
        display: "flex",
        zIndex: 100,
        height: 60,
        borderTop: "1px solid #0004",
      }}
    >
      {buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={btn.onClick}
          style={{
            flex: 1,
            padding: 0,
            paddingTop: 10,
            margin: 0,
            font: "inherit",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            borderLeft: "1px solid #0002",
            borderRight: "1px solid #0002",
            borderRadius: 0,
            // boxShadow:
            //   "inset 12px 0 18px -15px #0002, inset -12px 0 18px -15px #0002"
          }}
        >
          {btn.icon && (
            <span style={{ display: "block", marginBottom: -5 }}>
              {btn.icon}
            </span>
          )}
          <span style={{ fontSize: 11, color: textColor }}>{btn.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavigation;
