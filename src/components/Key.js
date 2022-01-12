import React from "react";

export const Key = ({
  value,
  backgroundColor,
  textColor,
  textSize = "text-xl",
  shadowColor,
  onClickFn,
}) => {
  return (
    <div
      className={`rounded-lg w-full h-10 flex items-center justify-center cursor-pointer ${shadowColor} ${textSize} ${backgroundColor}`}
      onClick={() => onClickFn(value)}
    >
      <p className={`${textColor}`}>{value}</p>
    </div>
  );
};
