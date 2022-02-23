import React, { ReactNode } from 'react';
import styled from 'styled-components';
import './Card.css'

interface CardProps{
    children: ReactNode;
    background?: string;
    backgroundImage?: string;
}

const CardContrainer = styled.div<CardProps>`
    border-radius: 10px;
    background-color: ${(props) => 
        props.background ? props.background : '#FFF'
    };
    background-image: ${(props) => 'url('+props.backgroundImage+')'};
    background-size: cover;
    color: #7B8591;
    h3{
        color: #303336;
    }
    box-sizing: border-box;
    overflow: hidden;
`;

export default function Card(props: CardProps){

    return(
        <CardContrainer {...props}>
            {props.children}
        </CardContrainer>
    );
}