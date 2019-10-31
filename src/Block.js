import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import {
    BlockTitle,
    BlockContainer,
    BlockNumber,
    LeftTitleContainer,
    HashContainer,
} from './Styles';

const Block = ({ block }) => {
    const [blockToggle, setBlockToggle] = useState(false);
    const [txToggle, setTxToggle] = useState(false);

    const blockInfo = useSpring({
        position: 'relative',
        width: '80%',
        padding: '1rem 2rem',
        fontSize: '1.5rem',
        margin: '0 auto',

        backgroundColor: '#313e50',
        height: blockToggle ? '300px' : '35px',

        zIndex: 2,
    });
    const txInfo = useSpring({
        position: 'relative',
        width: '80%',
        padding: '1rem 2rem',
        fontSize: '1.5rem',
        margin: '0 auto',

        backgroundColor: '#313638',
        height: txToggle ? '300px' : '35px',

        zIndex: 1,
    });

    return (
        <BlockContainer>
            <BlockTitle>
                <BlockNumber>{block.number}</BlockNumber>
                <LeftTitleContainer>
                    <HashContainer>{block.hash}</HashContainer>
                    <div>{block.timestamp}</div>
                </LeftTitleContainer>
            </BlockTitle>
            <animated.div style={blockInfo}>
                <button onClick={() => setBlockToggle(!blockToggle)}>
                    toggle
                </button>
            </animated.div>
            <animated.div style={txInfo}>
                <button onClick={() => setTxToggle(!txToggle)}>toggle</button>
            </animated.div>
        </BlockContainer>
    );
};

export default Block;
