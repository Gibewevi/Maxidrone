"use client"
import { useState } from "react";

export default function Title(props) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div className="flex flex-col justify-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <li className="pr-4 pl-4"><a href="#lien1" className=" text-slate-800 hover:text-slate-400 duration-300 ease-in-out transition-all">{props.name}</a></li>
            <div className={`${isHover ? 'w-full' : 'w-0'} h-[3px] bg-sky-400 duration-500 ease-in-out transition-all`}></div>
        </div>

    );
}
