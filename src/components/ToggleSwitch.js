import React from "react";

export const ToggleSwitch = ({
  activeIndex,
  backgroundColor,
  switchColor,
  textColor,
  onToggleClickFn,
  onClickFn,
}) => {
  return (
    <div>
      <div className={`rounded-2xl flex p-1 items-center justify-center`}>
        <div
          className={`${textColor} w-4 h-4 text-xs cursor-pointer`}
          onClick={() => onClickFn(0)}
        >
          1
        </div>
        <div
          className={`${textColor} w-4 h-4 text-xs cursor-pointer`}
          onClick={() => onClickFn(1)}
        >
          2
        </div>
        <div
          className={`${textColor} w-4 h-4 text-xs cursor-pointer`}
          onClick={() => onClickFn(2)}
        >
          3
        </div>
      </div>
      <div
        className={`${backgroundColor} rounded-2xl flex p-1 items-center justify-center cursor-pointer`}
        onClick={onToggleClickFn}
      >
        <div
          className={`${
            activeIndex === 0 ? switchColor : ""
          } rounded-full w-4 h-4`}
        ></div>
        <div
          className={`${
            activeIndex === 1 ? switchColor : ""
          } rounded-full w-4 h-4`}
        ></div>
        <div
          className={`${
            activeIndex === 2 ? switchColor : ""
          } rounded-full w-4 h-4`}
        ></div>
      </div>
    </div>
  );
};
