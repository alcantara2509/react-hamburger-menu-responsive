import React, { useState, useEffect } from "react";

export function HamburgerMenu({
  barsColor = "black",
  closeColor = "white",
  trigger,
  setTrigger,
  backgroundColor = "black",
  children,
  childrenStyle,
  breakPoint = 768,
}: {
  barsColor?: string;
  closeColor?: string;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundColor?: string;
  children?: React.ReactNode;
  childrenStyle?: React.CSSProperties;
  breakPoint?: number;
}) {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);

  useEffect(() => {
    if (!window) return;
    const handleResize = () => {
      setWindowWidth(window?.innerWidth);
    };

    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBreakPoint = () => {
    if (!windowWidth) return "";

    if (windowWidth >= breakPoint) {
      return "none";
    }

    return "";
  };

  return (
    <div style={{ display: handleBreakPoint() }}>
      <button
        onClick={() => setTrigger(!trigger)}
        style={{ position: "relative", zIndex: 100 }}
      >
        <div
          style={{
            backgroundColor: trigger ? closeColor : barsColor,
            borderRadius: "50px",
            height: "3px",
            position: trigger ? "absolute" : "static",
            rotate: trigger ? "45deg" : "0deg",
            transitionDuration: "0.5s",
            zIndex: "10",
            width: "28px",
          }}
        />
        <div
          style={{
            backgroundColor: barsColor,
            display: trigger ? "none" : "",
            width: "28px",
            height: "3px",
            borderRadius: "50px",
            zIndex: "10",
            margin: "4px 0",
          }}
        />
        <div
          className="bars down-bar"
          style={{
            backgroundColor: trigger ? closeColor : barsColor,
            borderRadius: "50px",
            height: "3px",
            marginBottom: trigger ? "4px" : 0,
            rotate: trigger ? "-45deg" : "0deg",
            transitionDuration: "0.5s",
            zIndex: "10",
            width: "28px",
          }}
        />
      </button>
      <div
        style={{
          top: trigger ? "0px" : "-100%",
          backgroundColor: backgroundColor,
          width: "100vw",
          position: "absolute",
          left: "0",
          transitionDuration: "0.5s",
          zIndex: "1",
        }}
      >
        <div style={childrenStyle}>{children}</div>
      </div>
    </div>
  );
}
