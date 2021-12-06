import React from 'react';

const paragraph = "Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you can rate your walker and book again all through the chat."

const Head = () => {
    return (
        <main class=' container flex flex-col gap-5 font-Rubik justify-center items-center'>            
                <h1 class='text-4xl text-primary-verydarkdesaturatedviolet font-medium'>Simple booking</h1>
                <p class='text-primary-darkgrayishviolet text-center px-8'>{paragraph}</p>
        </main>
    )
}

export default Head;