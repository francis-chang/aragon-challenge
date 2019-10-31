import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    body {
        font-family: "Ubuntu Mono", sans-serif;
        background-color: #e8e9eb;
        color: #313638;
    }

    button::-moz-focus-inner {
        border: 0;
    }
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const BlockContainer = styled.div`
    margin-bottom: 1rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const BlockTitle = styled.div`
    position: relative;
    width: 90%;
    padding: 1rem;
    font-size: 1.5rem;
    margin: 0 auto;
    border-bottom: 3px solid #3c3f44;
    background-color: #e8e9eb;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    z-index: 10;
`;

const BlockNumber = styled.div`
    font-weight: 700;
    font-size: 1.8rem;
`;

const BlockNumberContainer = styled.div`
    padding: 1rem;
    background-color: #313638;
    border-radius: 4px;
    color: #f9d8b9;
    font-family: 'Merriweather Sans', sans-serif;
    width: 150px;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const BlockNumberTitle = styled.div`
    font-size: 1rem;
    font-weight: 700;
`;

const ToggleButton = styled.button`
    position: absolute;
    bottom: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 100%;
    background-color: ${props => props.color};
    border: none;
    color: #e8e9eb;
    text-align: center;
    outline: none;
    font-size: 1.2rem;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 300ms;
    &:hover .fa-icon {
        color: #f9d8b9;
    }
`;

const ToggleButtonSVG = styled.div`
    font-size: 1.5rem;
    padding: 0rem 1rem;
`;

const Time = styled.div`
    font-size: 1.6rem;
    font-weight: 700;
`;

const BlockInformationContainer = styled.div`
    color: #e8e9eb;
`;

export {
    BlockContainer,
    BlockTitle,
    Container,
    Global,
    BlockNumber,
    BlockNumberContainer,
    BlockNumberTitle,
    ToggleButton,
    ToggleButtonSVG,
    Time,
    BlockInformationContainer,
};
