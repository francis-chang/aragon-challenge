import React, { useEffect, useState } from 'react';
import './fonts.css';
import Web3 from 'web3';
import BrowserError from './BrowserError';
import { Container, Global } from './Styles';
import Block from './Block';

function App() {
    const [browserError, setBrowserError] = useState(false);
    const [metaMaskAccess, setMetaMaskAccess] = useState(true);
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        (async () => {
            const { ethereum } = window;
            if (ethereum) {
                try {
                    window.web3 = new Web3(ethereum);
                    await ethereum.enable();
                    const latest = await window.web3.eth.getBlockNumber();
                    const batch = new window.web3.eth.BatchRequest();
                    for (let i = 0; i < 10; i++) {
                        batch.add(
                            window.web3.eth.getBlock.request(
                                latest - i,
                                getBlockCallBack
                            )
                        );
                    }
                    batch.execute();
                } catch (error) {
                    // User unable to access account
                    // Cannot find a way to reach this path
                    // MetaMask will always give you a password prompt even if you entered it wrong multiple times
                    setMetaMaskAccess(false);
                }
            } else {
                setBrowserError(true);
            }
        })();
    }, []);

    const getBlockCallBack = (_, block) => {
        block.sentTxs = [];
        const txBatch = new window.web3.eth.BatchRequest();
        for (const tx in block.transactions) {
            txBatch.add(
                window.web3.eth.getTransaction.request(
                    block.transactions[tx],
                    (_, transaction) => {
                        if (transaction && transaction.value > 0) {
                            block.sentTxs.push(transaction);
                        }
                    }
                )
            );
        }
        txBatch.execute();
        //since execute is not async, could there be a race condition?
        setBlocks(prevState => [...prevState, block]);
    };

    return (
        <div>
            <Global />
            {!metaMaskAccess && <div>Please login correctly</div>}
            {browserError && <BrowserError />}
            {!browserError && blocks.length < 10 && <div>Loading...</div>}
            {!browserError && blocks.length === 10 && (
                <Container>
                    {blocks.map(block => (
                        <Block key={block.number} block={block} />
                    ))}
                </Container>
            )}
        </div>
    );
}

export default App;
