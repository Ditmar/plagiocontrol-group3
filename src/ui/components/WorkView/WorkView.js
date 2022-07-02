import React from "react";
import {Text} from "./Text"
import "./Styles.css"
export const WorkView = () => {
    return (
        <div className="container-workview">
            <div className="top">
                <div className="top-autor">
                    <Text text = "AUTOR. ING. RAUL GOMEZ"></Text>
                </div>
                <div className="top-details">
                    <Text text = "Ver detalles"></Text>
                </div>
            </div>
            <div className="middle">
                <div className="middle-section">
                    <div className="middle-description">
                        <Text text = "Analisis de la investigacion sobre radio bolivia..."></Text>
                    </div>
                    <div className="middle-number-page">
                        <Text text = "321 Pag."></Text>
                    </div>
                </div>
                <div className="middle-image">
                    <img className="image" src="https://sb.studylib.es/store/data/006336918_1-374a2ba2f0c375de8f833467b631eed6.png"></img>
                </div>
            </div>
        </div>
    )
}