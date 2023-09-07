import React, { useState } from "react";
import "./world.css";
import Map from "../../Images/Full Map.png";
import Arabic from "../../Images/arabicFlag.png";
import ChineseFlag from "../../Images/chineselogo.jpeg";
import dutchFlag from "../../Images/dutch logo.jpeg";
import englishFlag from "../../Images/english logo.jpeg";
import frenchFlag from "../../Images/french.jpeg";
import germanFlag from "../../Images/german logo.jpeg";
import habrewFlag from "../../Images/habrew.png";
import indianFlag from "../../Images/india.jpeg";
import italianFlag from "../../Images/italy.png";
import malyalamFlag from "../../Images/malyalam.jpeg";
import polishFlag from "../../Images/polish.jpeg";
import portugeesFlag from "../../Images/portugees.jpeg";
import russianFlag from "../../Images/russia.jpeg";
import sinhalianFlag from "../../Images/sinhala.png";
import spanishFlag from "../../Images/spanish.png";
import ukranianFlag from "../../Images/ukrain.jpeg";
import saudiaMap from "../../Images/Map Arabic.png";
import indiaMap from "../../Images/Map Hindi.png";

const World = () => {
  const [visibility, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <div>
        <div className="world-image-div">
          <img className="world-image" src={Map} alt="World Map Image" />
          <img className={`saudia-map ${visibility ? "" : "visible"}`} src={saudiaMap} alt="Saudia's Map" />
          <img className={`china-map india-map`} src={indiaMap} alt="China's Map" />
          <div className="buttons-parent">
            <div>
              <button onClick={handleClick} className="arabic-button">
                Arabic
                <img className="flag" src={Arabic} alt="Arabic's Flag" />
                العربية
              </button>
            </div>
            <div>
              <button className="chinese-button">
                Chinese
                <img className="flag" src={ChineseFlag} alt="China's Flag" />
                中国人
              </button>
            </div>
            <div>
              <button className=" dutch-button">
                Dutch
                <img className="flag" src={dutchFlag} alt="Dutch's Flag" />
                Dutch
              </button>
            </div>
            <div>
              <button className="english-button arabic-button">
                English
                <img className="flag" src={englishFlag} alt="England's Flag" />
              </button>
            </div>
            <div>
              <button className="french-button arabic-button">
                French
                <img className="flag" src={frenchFlag} alt="France's Flag" />
                Français
              </button>
            </div>
            <div>
              <button className="german-button arabic-button">
                German
                <img className="flag" src={germanFlag} alt="German's Flag" />
                Deutsch
              </button>
            </div>
            <div>
              <button className="habrew-button arabic-button">
                Habrew
                <img className="flag" src={habrewFlag} alt="Habrew's Flag" />
                العربية
              </button>
            </div>
            <div>
              <button className="hindi-button arabic-button">
                Hindi
                <img className="flag" src={indianFlag} alt="India's Flag" />
                हिंदी
              </button>
            </div>
            <div>
              <button className="italian-button arabic-button">
                Italian
                <img className="flag" src={italianFlag} alt="Italy's Flag" />
                Italiano
              </button>
            </div>
            <div>
              <button className="malyalam-button arabic-button">
                Malyalam
                <img
                  className="flag"
                  src={malyalamFlag}
                  alt="Malyalam's Flag"
                />
                മലയാളം
              </button>
            </div>
            <div>
              <button className="polish-button arabic-button">
                Polish
                <img className="flag" src={polishFlag} alt="Poland's Flag" />
                POLSKI
              </button>
            </div>
            <div>
              <button className="portugees-button arabic-button">
                Portugees
                <img
                  className="flag"
                  src={portugeesFlag}
                  alt="Portugal's Flag"
                />
                português
              </button>
              <button className="russian-button arabic-button">
                Russian
                <img className="flag" src={russianFlag} alt="Russia's Flag" />
                Русский
              </button>
              <button className="sinhala-button arabic-button">
                Sinhala
                <img
                  className="flag"
                  src={sinhalianFlag}
                  alt="Sinhala's Flag"
                />
                සිංහල
              </button>
              <button className="spanish-button arabic-button">
                Spanish{" "}
                <img className="flag" src={spanishFlag} alt="Spain's Flag" />
                Española
              </button>
              <button className="ukranian-button arabic-button">
                Ukranian
                <img className="flag" src={ukranianFlag} alt="Ukrain's Flag" />
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
