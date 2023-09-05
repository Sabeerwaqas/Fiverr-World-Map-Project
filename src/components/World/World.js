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
              <button className="chinese-button">
                Chinese <img className="arabic-flag" src={Arabic} alt="" />
                中国人
              </button>
            </div>
            <div>
              <button className=" dutch-button">
                Dutch <img className="arabic-flag" src={Arabic} alt="" />Dutch
              </button>
            </div>
            <div>
              <button className="english-button arabic-button">
                English <img className="arabic-flag" src={Arabic} alt="" />
              </button>
            </div>
            <div>
              <button className="french-button arabic-button">
                French <img className="arabic-flag" src={Arabic} alt="" />
                Français
              </button>
            </div>
            <div>
              <button className="german-button arabic-button">
                German <img className="arabic-flag" src={Arabic} alt="" />
                Deutsch
              </button>
            </div>
            <div>
              <button className="habrew-button arabic-button">
                Habrew <img className="arabic-flag" src={Arabic} alt="" />
                العربية
              </button>
            </div>
            <div>
              <button className="hindi-button arabic-button">
                Hindi <img className="arabic-flag" src={Arabic} alt="" />
                हिंदी
              </button>
            </div>
            <div>
              <button className="italian-button arabic-button">
                Italian <img className="arabic-flag" src={Arabic} alt="" />
                Italiano
              </button>
            </div>
            <div>
              <button className="malyalam-button arabic-button">
                Malayalam <img className="arabic-flag" src={Arabic} alt="" />
                മലയാളം
              </button>
            </div>
            <div>
              <button className="polish-button arabic-button">
                Polish <img className="arabic-flag" src={Arabic} alt="" />{" "}
                POLSKI
              </button>
            </div>
            <div>
              <button className="portugees-button arabic-button">
                Portugees <img className="arabic-flag" src={Arabic} alt="" />{" "}
                português
              </button>
              <button className="russian-button arabic-button">
                Russian <img className="arabic-flag" src={Arabic} alt="" />{" "}
                Русский
              </button>
              <button className="sinhala-button arabic-button">
                Sinhala <img className=" arabic-flag" src={Arabic} alt="" />{" "}
                සිංහල
              </button>
              <button className="spanish-button arabic-button">
                Spanish <img className=" arabic-flag" src={Arabic} alt="" />{" "}
                Española
              </button>
              <button className="ukranian-button arabic-button">
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
