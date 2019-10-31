import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body {
        font-family: "Ubuntu Mono", sans-serif;
        background-color: #313638;
        color: #e8e9eb;
    }
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const BlockContainer = styled.div`
    width: 70%;
    padding: 2rem 3rem;
    font-size: 1.5rem;
    border-bottom: 3px solid #e8e9eb;
    margin: 0 auto;
`;

export { BlockContainer, Container, Global };
