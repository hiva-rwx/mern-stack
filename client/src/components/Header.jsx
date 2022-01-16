import React from "react";

const Header = ({ title, children }) => {
  return (
    <div className="text-center">
      <h1 className="py-3">{title}</h1>
      <div className="py-3">{children}</div>
    </div>
  );
};

export default Header;
