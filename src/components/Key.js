import React from "react";

export const Key = ({ value, backgroundColor, textColor, onClickFn }) => {
  return (
    <div
      className={`rounded-lg w-full h-10 flex items-center justify-center cursor-pointer ${backgroundColor}`}
      onClick={() => onClickFn(value)}
    >
      <p className={`${textColor}`}>{value}</p>
    </div>
  );
};
