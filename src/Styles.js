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

const AllContainer = styled.div`
    min-height: 200px;
`;

const BlockContainer = styled.div`
    position: relative;
    min-height: 200px;
`;

const BlockTitle = styled.div`
    width: 70%;
    padding: 1rem 2rem;
    font-size: 1.5rem;

    border-radius: 10px;
    background-color: #e8e9eb;
    z-index: 3;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`;

const BlockInformation = styled(BlockContainer)`
    background-color: #313e50;
`;

export {
    BlockContainer,
    BlockTitle,
    BlockInformation,
    Container,
    Global,
    AllContainer,
};
