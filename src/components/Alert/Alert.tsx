import React, { useEffect, useState } from "react";
import { useGlobal } from "../../hooks/GlobalContext";
import styles from './Alert.module.css';
import { useLocation } from "react-router-dom";

const Alert: React.FC = () => {
  const { alertTitle, alertSubtitle, setAlert, showAlertMS } = useGlobal();
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isHomeMain = location.pathname === "/main/home";

  useEffect(() => {
    if (alertTitle || alertSubtitle) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setAlert(undefined, undefined);
        }, 500);
      }, showAlertMS);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [alertTitle, alertSubtitle, setAlert]);

  // if (!visible || (!alertTitle && !alertSubtitle)) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: isHomeMain ? '1rem' : "4.5rem",
        width: "100%",
        zIndex: 99999,
        justifyContent: "center",
        display: "flex",
      }}
      className={`${styles.alert} ${visible && styles.alertActive}`}
    >
      <div
        style={{
          width: "90vw",
          padding: "1rem",
          backgroundColor: '#E0691AEE',
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          boxSizing: "border-box",
          backdropFilter: 'blur(5px)',
          border: `1px solid #0002`,
          color: 'white'
        }}
      >
        <span style={{ fontSize: "1.1rem", fontWeight: 700 }}>
          {alertTitle}
        </span>
        <span style={{ fontSize: "1rem", fontWeight: 500 }}>
          {alertSubtitle}
        </span>
      </div>
    </div>
  );
};

export default Alert;
