import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body {
        font-family: "Ubuntu Mono", sans-serif;
        background-color: #d6d8db;
        color: #313638;
    }
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const BlockContainer = styled.div`
    margin-bottom: 1rem;
`;

const BlockTitle = styled.div`
    position: relative;
    width: 70%;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #e8e9eb;
    z-index: 3;
    height: 80px;
`;

const BlockInformation = styled(BlockContainer)`
    background-color: #313e50;
`;

export { BlockContainer, BlockTitle, BlockInformation, Container, Global };
