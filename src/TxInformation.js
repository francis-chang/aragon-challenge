import React, { useEffect } from 'react';
import {
    TxInformationContainer,
    TxInformationLine,
    TxInformationToFrom,
} from './Styles';

const TxInformation = ({ txs }) => {
    useEffect(() => {
        console.log(txs);
    }, []);

    return (
        <TxInformationContainer>
            {txs.length === 0 && <div>Loading...</div>}
            {txs.map(tx => (
                <TxInformationLine>
                    <TxInformationToFrom>
                        <div>from:{tx.from}</div>

                        <div>to: {tx.to}</div>
                    </TxInformationToFrom>
                    <div>value: {tx.value}</div>
                </TxInformationLine>
            ))}
        </TxInformationContainer>
    );
};

export default TxInformation;
