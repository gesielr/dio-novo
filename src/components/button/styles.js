import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`

    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px ;
    min-width: 120px;
    width:100%;

    ${({ variant }) =>   variant !== "primary" && css`
    min-width: 167px;
    height: 33px;
    background-color: #e4105d; /* Exemplo de cor */

    &::after {

        content: '';
        position: absolute;
        border: solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }

  `}


`