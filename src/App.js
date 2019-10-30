import React, { useEffect } from "react";
import Web3 from "web3";

function App() {
    useEffect(() => {
        try {
            const { ethereum } = window;
            const web3 = new Web3(ethereum);
            ethereum.enable().then(() => {
                web3.eth.getBlock("latest").then(block => console.log(block));
            });
        } catch (e) {
            console.log(e);
        }
    }, []);
    return <div className="App"></div>;
}

export default App;
