import React from "react";

const Wrapper = (props) => {

    return (
        <div class="w-2/3 h-3/5 rounded-3xl border-8 border-white z-20">
            {props.children}
        </div>
    );
}

export default Wrapper