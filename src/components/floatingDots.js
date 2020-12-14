import React, {useState} from "react";
import {Box} from 'jsxstyle'
import { prop } from "rambdax";

const FloatingDots = () => {
    
    return (
    <Box 
    position="absolute" 
    left="0px" 
    top="0px" 
    width="100%" 
    height="100%"
    zIndex="-1"
    opacity="0.7"
    background="rgba(0, 0, 0, 0)">
        <svg xmlns="http://www.w3.org/2000/svg" 
            height="100%"
            width="100%"
            viewBox="0 0 100 50">
            <defs>
                <radialGradient id="myGradient1">
                    <stop offset="20%" stopColor="rgba(107, 112, 230, 0.12)" />
                    <stop offset="60%" stopColor="rgba(107, 112, 230, 0.09)" />
                    <stop offset="100%" stopColor="rgba(107, 112, 230, 0)" />
                </radialGradient>
                <radialGradient id="myGradient2">
                    <stop offset="20%" stopColor="rgba(107, 200, 230, 0.2)" />
                    <stop offset="60%" stopColor="rgba(107, 200, 230, 0.16)" />
                    <stop offset="100%" stopColor="rgba(107, 200, 230, 0)" />
                </radialGradient>
                <radialGradient id="myGradient3">
                    <stop offset="20%" stopColor="rgba(255, 238, 171, 0.24)" />
                    <stop offset="60%" stopColor="rgba(255, 238, 171, 0.2)" />
                    <stop offset="100%" stopColor="rgba(255, 238, 171, 0)" />
                </radialGradient>
            </defs>
            <circle id="animated-circle-1" cx="30" cy="25" r="25" fill="url('#myGradient1')" />
            <circle id="animated-circle-2" cx="10" cy="45" r="30" fill="url('#myGradient2')" />
            <circle id="animated-circle-3" cx="75" cy="10" r="35" fill="url('#myGradient3')" />
        </svg>
    </Box>)
}

export default FloatingDots;
