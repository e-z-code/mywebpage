import React from 'react';

function PageTitle(props) {
    
    return (
        <div className="min-h-screen bg-white text-black flex flex-col font-bold font-mono">
            <header className="p-8 text-4xl">
                ez_
                <span className="inline-block translate-x-[10px] w-[150px] ml-1 px-2 py-0.5 bg-[#3c0421] text-white">
                    {props.title}
                </span>
            </header>
        </div>
    );

}

export default PageTitle;