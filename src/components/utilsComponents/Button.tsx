'use client';

import { ReactNode } from "react";

interface Props {
    handleClick: Function;
    children: ReactNode;
    className?: string;
}

export default function Button({handleClick, children, className}:Props) {
    return (
        <button
            onClick={(e) => handleClick(e)}
            className={`bg-green-header-first text-white w-32 py-3 rounded top-44 left-20 ${className}`}
        >
            {children}
        </button>
    )
}