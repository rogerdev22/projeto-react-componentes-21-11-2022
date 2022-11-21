//Atualizado 27/10/2022 as 20:11 


import styled from "styled-components";

import Backgroud from  "../../assets/background1.svg";


export const Container = styled.div `
        background: url(${Backgroud});
        background-size: cover;

        display: flex;
        flex-direction: column;
        align-items: center;
         gap: 40px;
         height: 100%;
         min-height: 100vh;
   `;
export const Image = styled.img`
        margin-top:30px;
`;

export const Inputlabel = styled.p`
        letter-spacing: -0.408px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
         color: #EEEEEE;
         margin-left:25px;
       
`;
export const Input = styled.input`
        background-color:blue;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
        width: 342px;
        height: 78px;
        border:none;
        outline:none;
        padding-left: 25px;
        margin-bottom: 34px;
        font-style: normal;
        font-size:  20px;
        line-height: 28px;
        color:#ffffff;
      
        
`;

