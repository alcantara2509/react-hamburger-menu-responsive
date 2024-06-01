import React from "react";

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
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ display: windowWidth >= breakPoint ? "none" : "" }}>
      <button onClick={() => setTrigger(!trigger)} className="relative z-[100]">
        <div
          style={{
            backgroundColor: trigger ? closeColor : barsColor,
            rotate: trigger ? "45deg" : "0deg",
            position: trigger ? "absolute" : "static",
            transitionDuration: "0.5s",
            width: "28px",
            height: "3px",
            borderRadius: "50px",
            zIndex: "10",
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
            rotate: trigger ? "-45deg" : "0deg",
            width: "28px",
            height: "3px",
            borderRadius: "50px",
            zIndex: "10",
            transitionDuration: "0.5s",
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
        }}
      >
        <div style={childrenStyle}>{children}</div>
      </div>
    </div>
  );
}
