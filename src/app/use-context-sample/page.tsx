"use client";

import ButtonSample from "@/components/atoms/button-sample";
import ThemeContext from "./themeContext";

export default function UseContextSamplePage() {
  return (
    <>
      <ThemeContext.Provider value={"dark"}>
        <h1>useContext Sample Page</h1>
        <ButtonSample />
      </ThemeContext.Provider>
    </>
  );
}
