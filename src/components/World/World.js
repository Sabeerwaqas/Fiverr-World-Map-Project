import React from "react";
import "./world.css";
import Map from "../../Images/Full Map.png";
import Arabic from "../../Images/Map Arabic.png"

const World = () => {
  return (
    <>
      <div>
        <div className="world-image-div">
          <img className="world-image" src={Map} alt="World Map Image" />
          <div className="buttons-parent">
            <div>
                <button className="arabic-button">
                        
                </button>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default World;
