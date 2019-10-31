import React from 'react';
import { BlockInformationContainer } from './Styles';

const BlockInformation = ({ block }) => {
    return (
        <BlockInformationContainer>
            Hash: {block.hash} <br />
            Miner: {block.miner} <br />
            difficulty: {block.difficulty}
            <br />
            size: {block.size}
            <br />
            gasLimit: {block.gasLimit}
            <br />
            gasUsed : {block.gasUsed} <br />
        </BlockInformationContainer>
    );
};

export default BlockInformation;
