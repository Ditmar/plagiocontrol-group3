import React from "react";
import "./Styles.css"

export const Text = ({text,classname}) => {
    return (
        <p className={classname}>
            {text}
        </p>
    )
}