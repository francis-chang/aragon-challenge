import React, { useEffect, useState } from "react";
import Web3 from "web3";

function App() {
    const [blocks, setBlocks] = useState([]);
    useEffect(() => {
        const fetchBlocks = async () => {
            try {
                const { ethereum } = window;
                const web3 = new Web3(ethereum);
                await ethereum.enable();
                const latest = await web3.eth.getBlockNumber();
                for (let i = 0; i < 10; i++) {
                    const block = await web3.eth.getBlock(latest - i);
                    setBlocks(previousBlocks => [
                        ...previousBlocks,
                        block.number
                    ]);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchBlocks();
    }, []);

    useEffect(() => {
        console.log(blocks);
    });
    return <div className="App"></div>;
}

export default App;

// batch requests return null in callback

// const fetchBlocks = async () => {
//     try {
//         const { ethereum } = window;
//         const web3 = new Web3(ethereum);
//         await ethereum.enable();
//         const latest = await web3.eth.getBlockNumber();
//         const batch = new web3.eth.BatchRequest();
//         for (let i = 0; i < 10; i++) {
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
