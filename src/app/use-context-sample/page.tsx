"use client";

import ButtonSample from "@/components/atoms/ButtonSample";
import ThemeContext from "./themeContext";
import stylex from "@stylexjs/stylex";

const h1Style = stylex.create({
  blueColorStyle: {
    backgroundColor: "gray",
  },
});

export default function UseContextSamplePage() {
  return (
    <>
      <ThemeContext.Provider value={"dark"}>
        <h1 {...stylex.props(h1Style.blueColorStyle)}>
          useContext Sample Page
        </h1>
        <ButtonSample />
      </ThemeContext.Provider>
    </>
  );
}
