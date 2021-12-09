import React from "react";
import Profile from '../../assets/avatar.jpg';
import {ReactComponent as ThreeDot} from '../../assets/three-dots.svg';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';

const SubHeader = (props) => {

    return (
        <div class="flex flex-row items-end py-2 justify-around h-16 bg-gradient-to-r from-gradient-lightviolet to-gradient-lightmagenta rounded-t-2xl rounded-b-md">
            <div class="flex flex-row items-center">
                <LeftArrow/>
                <div class="container w-7 h-7 border rounded-3xl border-white">
                    <img src={Profile} alt="Profile photo" class="container max-w-max max-h-max rounded-3xl"/>
                </div>
                <div class="px-2 text-white">
                    <h2 class="text-sm font-semibold leading-none">{props.profile}</h2>
                    <p class="text-xs leading-none">{props.status}</p>
                </div>
            </div>
            <div class="py-1">
                <ThreeDot/>
            </div>
        </div>
    );
}

export default SubHeader;