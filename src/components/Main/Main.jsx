import React from "react";

import Wrapper from "../Wrapper/Wrapper";
import Button from "./Button";
import SubHeader from "./SubHeader";
import Chat from "./Chat";

const Main = ()=>{
    return (
        <Wrapper>
            <div class="bg-secondary-lightgrayishviolet w-full h-full rounded-2xl ">
                <SubHeader/>
                <Chat/>
                <Button/>
            </div>
        </Wrapper>
    );
}

export default Main;