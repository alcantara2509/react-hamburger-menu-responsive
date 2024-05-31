import "./styles.css";
export function HamburgerMenu({
  barsColor = "black",
  closeColor = "white",
  trigger,
  setTrigger,
  backgroundColor = "black",
  children,
  childrenStyle,
}: {
  barsColor?: string;
  closeColor?: string;
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundColor?: string;
  children?: React.ReactNode;
  childrenStyle?: React.CSSProperties;
}) {
  return (
    <>
      <button onClick={() => setTrigger(!trigger)} className="relative z-[100]">
        <div
          className="bars top-bar"
          style={{
            backgroundColor: trigger ? closeColor : barsColor,
            rotate: trigger ? "45deg" : "0deg",
            position: trigger ? "absolute" : "",
          }}
        />
        <div
          className="bars middle-bar"
          style={{
            backgroundColor: barsColor,
            display: trigger ? "none" : "",
          }}
        />
        <div
          className="bars down-bar"
          style={{
            backgroundColor: trigger ? closeColor : barsColor,
            rotate: trigger ? "-45deg" : "0deg",
          }}
        />
      </button>
      <div
        className="container"
        style={{
          top: trigger ? "0px" : "-100%",
          backgroundColor: backgroundColor,
        }}
      >
        <div style={childrenStyle}>{children}</div>
      </div>
    </>
  );
}
