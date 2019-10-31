import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import { BlockTitle, BlockContainer, AllContainer } from './Styles';

const Block = ({ block }) => {
    const [toggle, setToggle] = useState(false);

    const blockInfo = useSpring({
        width: '70%',
        padding: '1rem 2rem',
        fontSize: '1.5rem',
        margin: '0 auto',
        borderRadius: '10px',
        backgroundColor: '#313e50',
        height: toggle ? '700px' : '100px',
        zIndex: 2,
        position: 'absolute',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    });

    return (
        <BlockContainer>
            <BlockTitle>{block.number}</BlockTitle>
            <animated.div style={blockInfo}>
                <button
                    style={{ marginTop: '70px' }}
                    onClick={() => setToggle(!toggle)}
                >
                    toggle
                </button>
            </animated.div>
        </BlockContainer>
    );
};

export default Block;
