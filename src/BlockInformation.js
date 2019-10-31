import React from 'react';
import { BlockInformationContainer, BlockInformationLine } from './Styles';

const BlockInformation = ({ block }) => {
    return (
        <BlockInformationContainer>
            <BlockInformationLine>Hash: {block.hash}</BlockInformationLine>
            <BlockInformationLine>Miner: {block.miner}</BlockInformationLine>
            <BlockInformationLine>
                Difficulty: {block.difficulty}
            </BlockInformationLine>
            <BlockInformationLine>size: {block.size}</BlockInformationLine>
            <BlockInformationLine>
                Gas Limit: {block.gasLimit}
            </BlockInformationLine>
            <BlockInformationLine>
                Gas Used : {block.gasUsed}
            </BlockInformationLine>
        </BlockInformationContainer>
    );
};

export default BlockInformation;
