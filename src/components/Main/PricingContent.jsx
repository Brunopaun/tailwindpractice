import React from "react";
import classes from './PricingContent.module.scss';

const PricingContent = (props) => {
    return (
        <div class="flex flex-row justify-between w-full h-full">
            <div class="flex flex-row gap-2 items-center">
                <input type="radio" className={classes.input} />
                <p class="text-white align-baseline pt-1">{props.content}</p>
            </div>
            <p class="font-extrabold text-base text-white">{props.price}</p>
        </div>
    );
}

export default PricingContent;