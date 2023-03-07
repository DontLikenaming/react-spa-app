import React from 'react';
import {useLocation} from "react-router-dom";

export function Home() {
    return(
        <div>
            <h1>[Company Website]</h1>
        </div>
    );
}

export function About() {
    return(
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Events() {
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Products() {
    return(
        <div>
            <h1>[Products]</h1>
        </div>
    );
}

export function Contect() {
    return(
        <div>
            <h1>[Contect]</h1>
        </div>
    );
}

export function NotFound() {
    let loc = useLocation();    // 요청한 경로를 변수에 넣음
    return(
        <div>
            <h1>{loc.pathname} 🤔 not found</h1>
        </div>
    );
}

