import React from "react";

import "./css/ContentSide.css";

const ContentSide = () => {
  const mass = {
    hello: [
      { content: "none" },
      { content: "none", img: "", logo: "" },
    ],
  };
  return (
    <div className="main-content-side">
      <div className="main-header">this is empty block</div>
      <div className="main-content">
        {mass.hello.map((el) => {
          if ("img" in el) {
            return( 
              <div className="main-post-allin">
                <div className="post-header">
                  <div className="post-up">{el.logo}</div>
                  <div className="post-down">{el.content}</div>
                </div>
                <div className="post-body">{el.img}</div>
              </div>
            );
          } else {
            return( 
              <div className="main-post-text">
                {el.content}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ContentSide;
