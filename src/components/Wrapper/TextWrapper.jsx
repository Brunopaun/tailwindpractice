const TextWrapper = (props)=>{

    return(
        <div class={`flex flex-row rounded-t-xl rounded-br-xl rounded-bl-md bg-white text-ss w-4/5 py-1 px-2 ${props.className}`}>
            {props.content} {props.children}
        </div>
    );
}

export default TextWrapper;