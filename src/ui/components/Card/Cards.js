import React from "react";
import "./Cards.css"
import {Card} from "./Card";
export const Cards = () => {
    
    return <div className="container">
            <div className="document">
                <Card title="Documentos" number="60"/> 
            </div>
            <div className="reviewed">
                <Card title="Revisados" number="16"/> 
            </div>
            <div className="copies-detected">
                <Card title="Copias Detectadas" number="43"/> 
            </div>
    </div>
}