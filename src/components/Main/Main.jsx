import React from "react";

import Wrapper from "../Wrapper/Wrapper";
import Button from "./Button";
import SubHeader from "./SubHeader";
import Chat from "./Chat";

const Main = ()=>{
    return (
        <Wrapper>
            <div class="flex flex-col justify-between bg-secondary-lightgrayishviolet w-full h-full">
                <SubHeader profile="Samuel Green" status="Available to Walk"/>
                <Chat/>
                <Button placeholder="Type a message..."/>
            </div>
        </Wrapper>
    );
}

export default Main;