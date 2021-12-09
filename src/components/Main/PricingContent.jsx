import React from "react";

const PricingContent = (props) => {
    return (
        <div class="flex flex-row justify-between w-full h-full">
            <div class="flex flex-row gap-2 items-center">
                <input type="checkbox" class="bg-transparent" disabled/>
                <p class="text-white ">{props.content}</p>
            </div>
            <p class="font-extrabold text-base text-white">{props.price}</p>
        </div>
    );
}

export default PricingContent;