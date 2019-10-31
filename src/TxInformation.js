import React from 'react';
import {
    TxInformationContainer,
    TxInformationLine,
    TxInformationToFrom,
    TxInformationValue,
} from './Styles';

const TxInformation = ({ txs }) => {
    return (
        <TxInformationContainer>
            {txs.length === 0 && (
                <div style={{ width: '100%', textAlign: 'center' }}>
                    Loading...
                </div>
            )}
            {txs.map(tx => (
                <TxInformationLine key={tx.hash}>
                    <TxInformationToFrom>
                        <div>from: {tx.from}</div>

                        <div>
                            to: {'  '}
                            {tx.to}
                        </div>
                    </TxInformationToFrom>
                    <TxInformationValue>
                        {window.web3.utils.fromWei(tx.value).substring(0, 10)}{' '}
                        ETH
                    </TxInformationValue>
                </TxInformationLine>
            ))}
        </TxInformationContainer>
    );
};

export default TxInformation;
