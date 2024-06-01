

react-hamburger-menu-responsive
==============

***A customizable and responsive hamburger menu for React Js.***

<img src="https://github.com/alcantara2509/react-hamburger-menu-responsive/blob/main/react-hamburger-menu-responsive.gif" width="240" height="360" />

# Installation

```npm i react-hamburger-menu-responsive```

```yarn add react-hamburger-menu-responsive```


[https://www.npmjs.com/package/react-hamburger-menu-responsive](https://www.npmjs.com/package/react-hamburger-menu-responsive)

# Usage

```
<HamburgerMenu
  barsColor="#3C617A"
  closeColor="#FFFFFF"
  trigger={trigger}
  setTrigger={setTrigger}
  backgroundColor="#3C617A"
  breakPoint={768}
  childrenStyle={
    {
      // your styles
    }
  }
>
  {/* your component links */}
</HamburgerMenu>
```

# Example

```
import { useState } from "react";
import { HamburgerMenu } from "react-hamburger-menu-responsive";

export function Header() {
  const [trigger, setTrigger] = useState(false);
  
  return (
    <header className="container">
      <img src={Logo} alt="My Logo" />
      <HamburgerMenu
        barsColor="#3C617A"
        closeColor="#FFFFFF"
        trigger={trigger}
        setTrigger={setTrigger}
        backgroundColor="#3C617A"
        breakPoint={768}
        childrenStyle={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingBottom: "50px",
        }}
      >
        <button className="buttons">
          Home
        </button>
        <button className="buttons">
          Contact
        </button>
        <button className="buttons">
          About Us
        </button>
      </HamburgerMenu>
    </header>
  );
}
```
