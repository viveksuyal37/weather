import React from "react";

export default function Recent(props) {

  const liItems = props.recent.map((item, index) => {
    return <li onClick={()=>{props.recentSearch(item)}} className="recent-li-item fw-bold bg-dark text-light" key={index}>{item}</li>;
  });
  return (
    <div className="position-absolute start-0 recent-container">
      <h4>Recent cities:</h4>
      <ul className="list-group">{liItems}</ul>
    </div>
  );
}
