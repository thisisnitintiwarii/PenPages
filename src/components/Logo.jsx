import React from "react";
function Logo({ width = "90px" }) {
  return (
    <div>
      <img
        src="./penpagess.png"
        alt="Logo"

        style={{ width }}
        className="bg-transparent"
      />
    </div>
  );
}

export default Logo;
