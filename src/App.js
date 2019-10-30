import React, { useEffect, useState } from 'react'
import './fonts.css'
import Web3 from 'web3'
import BrowserError from './BrowserError'
import { Container, Global } from './Styles'

function App() {
    const [browserError, setBrowserError] = useState(false)
    const [metaMaskAccess, setMetaMaskAccess] = useState(true)
    const [blocks, setBlocks] = useState([])
    useEffect(() => {
        ;(async () => {
            const { ethereum } = window
            if (ethereum) {
                try {
                    // Request account access
                    const web3 = new Web3(ethereum)
                    await ethereum.enable()
                    const latest = await web3.eth.getBlockNumber()
                    // Request iteratively for the latest 10 blocks
                    // issues with BatchRequest - callback returns null (see bottom of file)
                    const block = await web3.eth.getBlock(latest)
                    const batch = new web3.eth.BatchRequest()
                    for (const tx in block.transactions) {
                        batch.add(
                            web3.eth.getTransaction.request(
                                block.transactions[tx],
                                (_, a) => {
                                    if (a.value > 0) {
                                        console.log(a)
                                    }
                                }
                            )
                        )
                        // batch.add(
                        //     web3.eth.getTransactionReceipt.request(
                        //         block.transactions[tx],
                        //         d => console.log(d)
                        //     )
                        // )
                    }
                    batch.execute()
                    // for (let i = 0; i < 10; i++) {
                    //     const block = await web3.eth.getBlock(latest - i)
                    //     console.log(block.transactions)
                    //     setBlocks(previousState => [...previousState, block])
                    // }
                } catch (error) {
                    // User unable to access account
                    // Cannot find a way to reach this path
                    setMetaMaskAccess(false)
                }
            } else {
                setBrowserError(true)
            }
        })()
    }, [])

    // useEffect(() => {
    //     console.log(blocks)
    // })
    return (
        <div>
            <Global />
            {!metaMaskAccess && <div>Please login correctly</div>}
            {browserError && <BrowserError />}
            {!browserError && blocks.length < 10 && <div>Loading...</div>}
            {!browserError && blocks.length === 10 && (
                <Container>
                    {blocks.map(block => (
                        <div key={block.number}>
                            {block.gasPrice} | {block.gasLimit} |{' '}
                            {block.gasUsed}
                        </div>
                    ))}
                </Container>
            )}
        </div>
    )
}

export default App

// batch requests return null in callback

// const fetchBlocks = async () => {
//     try {
//         const { ethereum } = window;
//         const web3 = new Web3(ethereum);
//         await ethereum.enable();
//         const latest = await web3.eth.getBlockNumber();
//         const batch = new web3.eth.BatchRequest();
//         for (let i = 0; i < 10; i++) {
//         // Callback here has be as null
//         // There are concerns that it may not return in order - from latest to oldest
//             batch.add(
//                 web3.eth.getBlock.request(latest - i, b =>
//                     console.log(b)
//                 )
//             );
//         }
//         batch.execute();
//     } catch (e) {
//         console.log(e);
//     }
// };
// fetchBlocks();
