import React from "react";

import TextWrapper from "../Wrapper/TextWrapper";
import PricingContent from "./PricingContent";

import imageUm from "../../assets/dog-image-1.jpg"
import imageDois from "../../assets/dog-image-2.jpg"
import imageTres from "../../assets/dog-image-3.jpg"

const Chat = () => {

    return(
        <div class={`flex flex-col gap-2 justify-between m-2 max-w-max max-h-max`}>
            <TextWrapper className="text-primary-moderateviolet bg-gray-200" content="That sounds great. I`d be happy do discuss more."></TextWrapper>            
            <TextWrapper className="text-primary-moderateviolet bg-gray-200" content="Could you send over some pictures of your dog, please?"></TextWrapper>      
                <div class="flex flex-col gap-2 items-end">
                    <TextWrapper className="flex max-w-max gap-2"> 
                        <img src={imageUm} alt="Imagem de um cachorro" class="w-10 h-10 rounded-md"/>
                        <img src={imageDois} alt="Imagem de um cachorro" class="w-10 h-10 rounded-md"/>
                        <img src={imageTres} alt="Imagem de um cachorro" class="w-10 h-10 rounded-md"/>
                    </TextWrapper>
                    <TextWrapper className="max-w-max" content="Here are a few pictures. She`s a happy girl!"></TextWrapper>
                    <TextWrapper className="max-w-max" content="Can you maker it?"></TextWrapper>
                </div>
            <TextWrapper className="text-primary-moderateviolet bg-gray-200" content="She looks so happy! The time we discussesd word. How long shall i take her out for?"></TextWrapper>
            <TextWrapper className="bg-gradient-to-r to-gradient-lightviolet from-gradient-lightmagenta">
                <PricingContent content="30 minutes walk" price="$29"/>
            </TextWrapper>
            <TextWrapper className="bg-gradient-to-r to-gradient-lightviolet from-gradient-lightmagenta">
                <PricingContent content="1 hour walk" price="$49"/>
            </TextWrapper>        
        </div>
    );
}

export default Chat;