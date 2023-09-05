import React from "react";
import "./world.css";
import Map from "../../Images/Full Map.png";
import Arabic from "../../Images/arabicFlag.png";

const World = () => {
  return (
    <>
      <div>
        <div className="world-image-div">
          <img className="world-image" src={Map} alt="World Map Image" />
          <div className="buttons-parent">
            <div>
              <button className="arabic-button">
                Arabic <img className="arabic-flag" src={Arabic} alt="" />
                العربية
              </button>
            </div>
            <div>
              <button className="arabic-button">
                Chinese <img className="arabic-flag" src={Arabic} alt="" />
                中国人
              </button>
            </div>
            <div>
              <button className="arabic-button">
                Dutch <img className="arabic-flag" src={Arabic} alt="" />Dutch
              </button>
            </div>
            <div>
              <button className="arabic-button">
                English <img className="arabic-flag" src={Arabic} alt="" />
              </button>
            </div>
            <div>
              <button className="arabic-button">
                French <img className="arabic-flag" src={Arabic} alt="" />
                Français
              </button>
            </div>
            <div>
              <button className="arabic-button">
                German <img className="arabic-flag" src={Arabic} alt="" />
                Deutsch
              </button>
            </div>
            <div>
              <button className="arabic-button">
                Habrew <img className="arabic-flag" src={Arabic} alt="" />
                العربية
              </button>
            </div>
            <div>
              <button className="arabic-button">
                Hindi <img className="arabic-flag" src={Arabic} alt="" />
                हिंदी
              </button>
            </div>
            <div>
              <button className="arabic-button">
                Italian <img className="arabic-flag" src={Arabic} alt="" />
                Italiano
              </button>
            </div>
            <div>
              <button className="arabic-button">
                Malayalam <img className="arabic-flag" src={Arabic} alt="" />
                മലയാളം
              </button>
            </div>
            <div>
              <button className="arabic-button">
                Polish <img className="arabic-flag" src={Arabic} alt="" />{" "}
                POLSKI
              </button>
            </div>
            <div>
              <button className="arabic-button">
                Portugees <img className="arabic-flag" src={Arabic} alt="" />{" "}
                português
              </button>
              <button className="arabic-button">
                Russian <img className="arabic-flag" src={Arabic} alt="" />{" "}
                Русский
              </button>
              <button className="arabic-button">
                Sinhala <img className="arabic-flag" src={Arabic} alt="" />{" "}
                සිංහල
              </button>
              <button className="arabic-button">
                Spanish <img className="arabic-flag" src={Arabic} alt="" />{" "}
                Española
              </button>
              <button className="arabic-button">
                Ukranian <img className="arabic-flag" src={Arabic} alt="" />{" "}
                українська
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default World;
