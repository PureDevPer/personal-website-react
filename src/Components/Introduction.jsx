import React from "react";
import styled from "styled-components";
import { INTRODUCTION, PARAGRAPH } from "./constants/Introduction";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${(props) => props.theme.blackColor};
`;

const ContainerWrapper = styled.div`
    width: 100%;
    max-width: ${(props) => props.theme.maxWidth};
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    flex-direction: column;
    letter-spacing: 2px;
`;

const Intro = styled.span`
    font-size: 24px;
    font-weight: 400;
    margin: 40px 0px;
    line-height: 1.5em;
`;

const Paragraph = styled.span`
    line-height: 1.5em;
    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &:last-child {
        margin-bottom: 80px;
    }
`;

export default () => {
    return (
        <Container>
            <ContainerWrapper>
                <Intro>{INTRODUCTION}</Intro>
                {Object.values(PARAGRAPH).map((details, idx) => (
                    <Paragraph key={idx}>{details}</Paragraph>
                ))}
            </ContainerWrapper>
        </Container>
    );
};
