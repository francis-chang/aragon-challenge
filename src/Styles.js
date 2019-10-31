import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body {
        font-family: "Ubuntu Mono", sans-serif;
        background-color: #e8e9eb;
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
    width: 100%;
    padding: 1rem 0rem;
    font-size: 1.5rem;
    margin: 0 auto;
    border-bottom: 3px solid #3c3f44;
    background-color: #e8e9eb;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BlockNumber = styled.div`
    padding: 1rem 1.5rem;
    background-color: #313638;
    border-radius: 4px;
    color: #f9d8b9;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 700;
    font-size: 28px;
    width: 130px;
    text-align: center;
`;

const LeftTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 50px;
`;

const HashContainer = styled.div`
    font-size: 1.3rem;
`;

export {
    BlockContainer,
    BlockTitle,
    Container,
    Global,
    BlockNumber,
    LeftTitleContainer,
    HashContainer,
};
