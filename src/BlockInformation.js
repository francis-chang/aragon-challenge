import React from 'react';
import { BlockInformationContainer, BlockInformationLine } from './Styles';

const BlockInformation = ({ block }) => {
    return (
        <BlockInformationContainer>
            <BlockInformationLine>Hash: {block.hash}</BlockInformationLine>
            <BlockInformationLine>Miner: {block.miner}</BlockInformationLine>
            <BlockInformationLine>
                difficulty: {block.difficulty}
            </BlockInformationLine>
            <BlockInformationLine>size: {block.size}</BlockInformationLine>
            <BlockInformationLine>
                gasLimit: {block.gasLimit}
            </BlockInformationLine>
            <BlockInformationLine>
                gasUsed : {block.gasUsed}
            </BlockInformationLine>
        </BlockInformationContainer>
    );
};

export default BlockInformation;
