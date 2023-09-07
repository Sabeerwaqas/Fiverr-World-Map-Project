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
import franceMap from "../../Images/Map French.png";
import englishMap from "../../Images/Map English.png";
import RussianMap from "../../Images/Map Russian.png";
import Italianmap from "../../Images/Map Italy.png";
import Spanishmap from "../../Images/Map Spanish.png";
import Ukranianmap from "../../Images/Map Ukrainian.png";
import Chinesemap from "../../Images/Map Chinese.png";
import Dutchmap from "../../Images/Map Dutch.png";
import Germanmap from "../../Images/Map German.png";
import Habrewmap from "../../Images/Map Hebrew.png";
import Polandmap from "../../Images/Map Polish.png";
import Portugalmap from "../../Images/Map Portuguese.png";
import Sinhalamap from "../../Images/Map Sinhala.png";
import goButton from "../../Images/Go Button.png" 

const World = () => {
  const [visibility, setVisibility] = useState({});

  const handleClick = (mapName) => {
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [mapName]: !prevVisibility[mapName],
    }));
  };

  return (
    <>
      <div>
        <div className="world-image-div">
          <img className="world-image" src={Map} alt="World Map Image" />
          <img className="go-button" src={goButton} alt="Go Button" />
          <img
            className={`saudia-map ${visibility["saudia"] ? "" : "visible"}`}
            src={saudiaMap}
            alt="Saudia's Map"
          />
          <img className={`india-map ${visibility["india"] ? "" : "visible"}`} src={indiaMap} alt="India's Map" />
          <img className={`france-map ${visibility["france"] ? "" : "visible"}`} src={franceMap} alt="France's Map" />
          <img className={`english-map ${visibility["english"] ? "" : "visible"}`} src={englishMap} alt="England's Map" />
          <img className={`russian-map ${visibility["russia"] ? "" : "visible"}`} src={RussianMap} alt="Russian Map" />
          <img className={`italian-map ${visibility["italy"] ? "" : "visible"}`} src={Italianmap} alt="Italian Map" />
          <img className={`spanish-map ${visibility["spain"] ? "" : "visible"}`} src={Spanishmap} alt="Spanish Map" />
          <img className={`ukranian-map ${visibility["ukrain"] ? "" : "visible"}`} src={Ukranianmap} alt="Ukranian Map" />
          <img className={`china-map ${visibility["china"] ? "" : "visible"}`} src={Chinesemap} alt="China Map" />
          <img className={`dutch-map ${visibility["dutch"] ? "" : "visible"}`} src={Dutchmap} alt="Dutch Map" />
          <img className={`german-map ${visibility["germany"] ? "" : "visible"}`} src={Germanmap} alt="German's Map" />
          <img className={`habrew-map ${visibility["habrew"] ? "" : "visible"}`} src={Habrewmap} alt="Habrew's map" />
          <img className={`poland-map ${visibility["poland"] ? "" : "visible"}`} src={Polandmap} alt="Poland's Map" />
          <img
            className={`portugal-map ${visibility["portugal"] ? "" : "visible"}`}
            src={Portugalmap}
            alt="Portugal's Map"
          />
          <img className={`sinhala-map ${visibility["sinhala"] ? "" : "visible"}`} src={Sinhalamap} alt="Sinhala's Map" />
          <div className="buttons-parent">
            <div>
              <button
                onClick={() => handleClick("saudia")}
                className="arabic-button"
              >
                Arabic
                <img className="flag" src={Arabic} alt="Arabic's Flag" />
                العربية
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("china")} className="chinese-button">
                Chinese
                <img className="flag" src={ChineseFlag} alt="China's Flag" />
                中国人
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("dutch")} className=" dutch-button">
                Dutch
                <img className="flag" src={dutchFlag} alt="Dutch's Flag" />
                Dutch
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("english")} className="english-button">
                English
                <img className="flag" src={englishFlag} alt="England's Flag" />
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("france")} className="french-button">
                French
                <img className="flag" src={frenchFlag} alt="France's Flag" />
                Français
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("germany")}  className="german-button">
                German
                <img className="flag" src={germanFlag} alt="German's Flag" />
                Deutsch
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("habrew")}  className="habrew-button">
                Habrew
                <img className="flag" src={habrewFlag} alt="Habrew's Flag" />
                العربية
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("india")} className="hindi-button">
                Hindi
                <img className="flag" src={indianFlag} alt="India's Flag" />
                हिंदी
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("italy")}  className="italian-button">
                Italian
                <img className="flag" src={italianFlag} alt="Italy's Flag" />
                Italiano
              </button>
            </div>
            {/* <div>
              <button onClick={() => handleClick("malyalam")}  className="malyalam-button">
                Malyalam
                <img
                  className="flag"
                  src={malyalamFlag}
                  alt="Malyalam's Flag"
                />
                മലയാളം
              </button>
            </div> */}
            <div>
              <button onClick={() => handleClick("poland")}  className="polish-button">
                Polish
                <img className="flag" src={polishFlag} alt="Poland's Flag" />
                POLSKI
              </button>
            </div>
            <div>
              <button onClick={() => handleClick("portugal")}  className="portugees-button">
                Portugees
                <img
                  className="flag"
                  src={portugeesFlag}
                  alt="Portugal's Flag"
                />
                português
              </button>
              <button onClick={() => handleClick("russia")}  className="russian-button">
                Russian
                <img className="flag" src={russianFlag} alt="Russia's Flag" />
                Русский
              </button>
              <button onClick={() => handleClick("sinhala")}  className="sinhala-button">
                Sinhala
                <img
                  className="flag"
                  src={sinhalianFlag}
                  alt="Sinhala's Flag"
                />
                සිංහල
              </button>
              <button onClick={() => handleClick("spain")}  className="spanish-button">
                Spanish
                <img className="flag" src={spanishFlag} alt="Spain's Flag" />
                Española
              </button>
              <button onClick={() => handleClick("ukrain")}  className="ukranian-button">
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
