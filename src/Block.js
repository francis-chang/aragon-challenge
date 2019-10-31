import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { BlockTitle, BlockContainer, AllContainer } from './Styles';

const Block = ({ block }) => {
    const [blockToggle, setBlockToggle] = useState(false);
    const [txToggle, setTxToggle] = useState(false);

    const blockInfo = useSpring({
        position: 'relative',
        width: '70%',
        padding: '1rem 2rem',
        fontSize: '1.5rem',
        margin: '0 auto',
        borderRadius: '10px',
        backgroundColor: '#313e50',
        height: blockToggle ? '300px' : '50px',
        marginTop: '-2rem',
        zIndex: 2,
    });
    const txInfo = useSpring({
        position: 'relative',
        width: '70%',
        padding: '1rem 2rem',
        fontSize: '1.5rem',
        margin: '0 auto',
        borderRadius: '10px',
        backgroundColor: '#313638',
        height: txToggle ? '300px' : '50px',
        marginTop: '-2rem',
        zIndex: 1,
    });

    return (
        <BlockContainer>
            <BlockTitle>{block.number}</BlockTitle>
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
