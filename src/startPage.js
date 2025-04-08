import React, { useState } from 'react';

const words = ['goal', 'story', 'on', 'code', 'else'];

function StartPage() {

    const [position, setPosition] = useState(2);

    const moveUp = () => {
        if (position > 0) {
            setPosition((prevPosition) => (prevPosition - 1));
        }
    };

    const moveDown = () => {
        if (position < words.length - 1) {
            setPosition((prevPosition) => (prevPosition + 1));
        }
    };


    return (
        
        <div className="h-screen w-screen flex items-center justify-center bg-white relative overflow-hidden">
            
            {/* Prefix */}
            <div className="absolute left-1/2 -translate-x-[150px] text-5xl font-bold">
                ez_
            </div>

            {/* Word Slider */}
            
            {/* Buttons */}

        </div>

    );
}

export default StartPage;