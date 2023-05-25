'use client';
import { CounterContext } from "@/context/Context";
import { AlignJustify } from "lucide-react";
import { useContext, useState } from "react";

export default function MenuMobile() {
    const { state, dispatch } = useContext(CounterContext);
    
    return (
        <button onClick={() => dispatch({ type: "MENUMOBILE", payload: !state.clickMenu })}>
            <AlignJustify size={50} />
        </button>
    )
}
