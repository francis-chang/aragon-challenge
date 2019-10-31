import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-sizing: border-box;
    padding: 2rem;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
`;
const Link = styled.a`
    color: #f1bf98;

    &:hover {
    }
`;

const BrowserError = () => {
    return (
        <Container>
            Your browser does not support Ethereum.
            <br />
            <br /> Download MetaMask{' '}
            <Link
                href="http://metamask.io"
                title="Open a new tab to Metamask"
                target="_blank"
            >
                here
            </Link>
        </Container>
    );
};

export default BrowserError;
