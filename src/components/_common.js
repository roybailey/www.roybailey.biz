'use strict'
import React from "react";

export const DivIfPresent = ((props) => {

    return (props.show) ? (
        <div className={props.className}>
            {props.children}
        </div>
    ) : null;
});
