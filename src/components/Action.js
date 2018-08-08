import React from "react";
import Header from "./Header";

const Action = (props) => { // this function is equivalent to render
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
};

export default Action;