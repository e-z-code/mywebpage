import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const words = ['goal', 'story', 'on', 'code', 'else'];

function StartPage() {

    /* State Hook : Which index is at the center */
    const [center, setCenter] = useState(2);
    const navigate = useNavigate();

    /* Functions for Buttons */ 
    const moveUp = () => {
        if (center > 0) {
            setCenter((prevCenter) => (prevCenter - 1));
        }
    };
    const moveDown = () => {
        if (center < words.length - 1) {
            setCenter((prevCenter) => (prevCenter + 1));
        }
    };
    const toIndividualPage = () => {
        const target_loc = `${words[center]}`;
        navigate(target_loc);
    };

    /* Effect Hook for Keys */
    useEffect(() => {

        const onKey = (e) => {
            if (e.key === 'ArrowUp') {
                moveUp();
            }
            if (e.key === 'ArrowDown') {
                moveDown();
            }
            if (e.key === 'Enter') {
                toIndividualPage();
            }
        };

        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);

    }, [center]);

    /* Rendering */ 
    return (
        
        <div className="h-screen w-screen flex items-center justify-center bg-white relative overflow-hidden">
            
            {/* Prefix */}
            <div className="absolute left-1/2 -translate-x-[150px] text-5xl font-bold font-mono">
                ez_
            </div>

            {/* Word Slider */}
            <div className="absolute h-screen w-[200px] translate-x-[50px] flex flex-col justify-center bg-white-100">
                {words.map((word, i) => {
                    const distFromCenter = i - center;
                    let style = "absolute flex ps-3 items-center w-[200px] h-[150px] font-bold transition-all duration-300 font-mono";
                    if (distFromCenter === 0) {
                        style += " text-white bg-[#3c0241] text-5xl";
                    } else if (Math.abs(distFromCenter) === 1) {
                        style += " text-[#3c0421] text-3xl opacity-70";
                    } else {
                        style += " text-[#3c0421] text-2xl opacity-30";
                    }

                    return (
                        <div
                            key={i} className={style} style={{
                                transform: `translateY(${distFromCenter * 150}px)`,
                            }}
                        >
                            {word}
                        </div>
                    );
                })}
            </div>
            
            {/* Buttons */}
            <div className="absolute right-1/2 translate-x-[225px] flex flex-col bg-white items-center gap-2">
                <button onClick={moveUp} className="w-8 h-8 rounded-full bg-[#3c0241] text-white text-sm">
                    ▲
                </button>
                <button onClick={toIndividualPage} className="bg-[#3c0241] text-white text-sm px-2 py-1 font-bold font-mono">
                    ENTER
                </button>
                <button onClick={moveDown} className="w-8 h-8 rounded-full bg-[#3c0241] text-white text-sm">
                    ▼
                </button>
            </div>
        
        </div>

    );

}

export default StartPage;