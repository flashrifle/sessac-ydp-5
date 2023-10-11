import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const rotation10 = keyframes`
    0% {
        transform: translate(0px, 0px);
    }
    25% {
        transform: translate(100px, 0px);
    }
    50% {
        transform: translate(50px, 100px);
    }
    75% {
        transform: translate(0px, 100px);
    }
    100% {
        transform: translate(0px, 0px);
    }
`;

const rotation20 = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(200px, 0px);
  }
  50% {
    transform: translate(200px, 200px);
  }
  75% {
    transform: translate(0px, 200px);
  }
  100% {
    transform: translate(0px, 0px);
  }`;

const rotation30 = keyframes`
    0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(300px, 0px);
  }
  50% {
    transform: translate(300px, 300px);
  }
  75% {
    transform: translate(0px, 300px);
  }
  100% {
    transform: translate(0px, 0px);
  }
`;

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: ${(props) => props.bgColor};
`;

const PinkCircle = styled(StyledBox)`
    animation: ${rotation10} infinite 2s linear;
`;
const YellowCircle = styled(StyledBox)`
    animation: ${rotation20} infinite 2s linear;
`;
const GreenCircle = styled(StyledBox)`
    animation: ${rotation30} infinite 2s linear;
`;

export default function Sass_ex2() {
    return (
        <>
            <StyledContainer>
                <PinkCircle bgColor="pink"></PinkCircle>
                <YellowCircle bgColor="yellow"></YellowCircle>
                <GreenCircle bgColor="green"></GreenCircle>
            </StyledContainer>
        </>
    );
}
