import React from "react";
import {ReactComponent as Btn} from '../../assets/button-bottom.svg';

const Button = (props)=>{

    return (
        <div class="flex items-center justify-between bg-white h-10 max-w-full m-3 pl-5 pr rounded-2xl text-xs text-primary-grayishblue">
            {props.placeholder}
             <Btn/>
            </div>
    );
}

export default Button;