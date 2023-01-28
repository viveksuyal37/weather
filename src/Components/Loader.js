import React from "react";

export default function Loader() {
  return (
    <div style={{width:"200px", margin:"50px auto"}}>
      <div
        className="spinner-border mt-2"
        style={{width: "4rem", height: "4rem"}}
        role="status"
      >
      
      </div>
    </div>
  );
}
