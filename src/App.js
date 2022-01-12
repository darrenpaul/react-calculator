import React, { useState } from "react";
import { Key } from "./components/Key";
import { ToggleSwitch } from "./components/ToggleSwitch";

const App = () => {
  const theme = [
    {
      mainBackground: "bg-theme-1-main-background",
      toggleBackground: "bg-theme-1-toggle-background",
      screenBackground: "bg-theme-1-screen-background",
      keyBackground1: "bg-theme-1-key-background-1",
      keyBackground2: "bg-theme-1-key-background-2",
      keyBackground3: "bg-theme-1-key-background-3",
      textColor1: "text-app-theme-1-text-color-1",
      textColor2: "text-app-theme-1-text-color-2",
      textColor3: "text-app-theme-1-text-color-3",
      buttonText1: "text-app-theme-1-text-color-1",
      screenTextColor: "text-theme-white",
      titleTextColor: "text-theme-white",
      keyShadow1: "shadow-[inset_0_-4px_1px_0_#404E72]",
      keyShadow2: "shadow-[inset_0_-4px_1px_0_#93261A]",
      keyShadow3: "shadow-[inset_0_-4px_1px_0_#B4A597]",
    },
    {
      mainBackground: "bg-theme-2-main-background",
      toggleBackground: "bg-theme-2-toggle-background",
      screenBackground: "bg-theme-2-screen-background",
      keyBackground1: "bg-theme-2-key-background-1",
      keyBackground2: "bg-theme-2-key-background-2",
      keyBackground3: "bg-theme-2-key-background-3",
      textColor1: "text-app-theme-2-text-color-1",
      textColor2: "text-app-theme-2-text-color-2",
      textColor3: "text-app-theme-2-text-color-3",
      buttonText1: "text-app-theme-2-text-color-1",
      screenTextColor: "text-theme-2-screen-text-color",
      titleTextColor: "text-theme-2-screen-text-color",
      keyShadow1: "shadow-[inset_0_-4px_1px_0_#1B5F65]",
      keyShadow2: "shadow-[inset_0_-4px_1px_0_#893901]",
      keyShadow3: "shadow-[inset_0_-4px_1px_0_#A69D91]",
    },
    {
      mainBackground: "bg-theme-3-main-background",
      toggleBackground: "bg-theme-3-toggle-background",
      screenBackground: "bg-theme-3-screen-background",
      keyBackground1: "bg-theme-3-key-background-1",
      keyBackground2: "bg-theme-3-key-background-2",
      keyBackground3: "bg-theme-3-key-background-3",
      textColor1: "text-app-theme-3-text-color-1",
      textColor2: "text-app-theme-3-text-color-2",
      textColor3: "text-app-theme-3-text-color-3",
      buttonText1: "text-app-theme-3-text-color-3",
      screenTextColor: "text-theme-3-screen-text-color",
      titleTextColor: "text-theme-3-screen-text-color",
      keyShadow1: "shadow-[inset_0_-4px_1px_0_#BC15F4]",
      keyShadow2: "shadow-[inset_0_-4px_1px_0_#6CF9F2]",
      keyShadow3: "shadow-[inset_0_-4px_1px_0_#871C9C]",
    },
  ];

  const [themeIndex, setThemeIndex] = useState(0);

  const [userInput, setUserInput] = useState("");

  const addDigit = (value) => {
    const newString = `${userInput}${value}`;
    setUserInput(newString);
  };

  const addSymbol = (symbol) => {
    const lastChar = userInput.charAt(userInput.length - 1);

    if (!["/", "x", "+", "-"].includes(lastChar) && userInput.length > 0) {
      const newString = `${userInput}${symbol}`;
      setUserInput(newString);
    }
  };

  const deleteDigit = () => {
    if (userInput.length > 0) {
      const newString = userInput.slice(0, -1);
      setUserInput(newString);
    }
  };

  const calculate = () => {
    const cleanStr = userInput.replaceAll("x", "*");
    setUserInput(eval(cleanStr).toString());
  };

  const reset = () => {
    setUserInput("");
  };

  const changeTheme = () => {
    const currentIndex = themeIndex;
    let nextIndex = currentIndex + 1;
    if (nextIndex === 3) {
      nextIndex = 0;
    }

    setThemeIndex(nextIndex);
  };

  const setThemeIndexValue = (value) => {
    setThemeIndex(value);
  };

  return (
    <div
      className={`${theme[themeIndex].mainBackground} w-screen h-screen flex items-center justify-center font-spartan font-bold p-4`}
    >
      <div className="flex flex-col gap-4 w-96">
        <div className="flex flex-row items-end justify-between">
          <p className={`${theme[themeIndex].titleTextColor} text-2xl`}>calc</p>
          <div className="flex items-end gap-4">
            <p
              className={`uppercase ${theme[themeIndex].titleTextColor} text-xs`}
            >
              theme
            </p>
            <ToggleSwitch
              activeIndex={themeIndex}
              backgroundColor={theme[themeIndex].toggleBackground}
              switchColor={theme[themeIndex].keyBackground2}
              textColor={theme[themeIndex].titleTextColor}
              onToggleClickFn={changeTheme}
              onClickFn={setThemeIndexValue}
            />
          </div>
        </div>

        <div
          className={`${theme[themeIndex].screenBackground} w-full h-20 rounded-lg flex items-center justify-end p-4`}
        >
          <p className={`${theme[themeIndex].screenTextColor} text-3xl`}>
            {userInput}
          </p>
        </div>

        <div
          className={`${theme[themeIndex].toggleBackground} grid grid-rows-5 w-full rounded-lg gap-4 p-4`}
        >
          <div className="grid grid-cols-4 gap-4">
            <Key
              value={7}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={8}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={9}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={"del"}
              backgroundColor={theme[themeIndex].keyBackground1}
              shadowColor={theme[themeIndex].keyShadow1}
              textColor={theme[themeIndex].buttonText1}
              textSize={"text-sm"}
              onClickFn={deleteDigit}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Key
              value={4}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={5}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={6}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={"+"}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addSymbol}
              textColor={theme[themeIndex].textColor2}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Key
              value={1}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={2}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={3}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={"-"}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addSymbol}
              textColor={theme[themeIndex].textColor2}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Key
              value={"."}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addSymbol}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={0}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addDigit}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={"/"}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addSymbol}
              textColor={theme[themeIndex].textColor2}
            />
            <Key
              value={"x"}
              backgroundColor={theme[themeIndex].keyBackground3}
              shadowColor={theme[themeIndex].keyShadow3}
              onClickFn={addSymbol}
              textColor={theme[themeIndex].textColor2}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Key
              value={"RESET"}
              backgroundColor={theme[themeIndex].keyBackground1}
              shadowColor={theme[themeIndex].keyShadow1}
              textColor={theme[themeIndex].buttonText1}
              textSize={"text-sm"}
              onClickFn={reset}
            />
            <Key
              value={"="}
              backgroundColor={theme[themeIndex].keyBackground2}
              shadowColor={theme[themeIndex].keyShadow2}
              textColor={theme[themeIndex].textColor1}
              onClickFn={calculate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
