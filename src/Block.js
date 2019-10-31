import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import {
    BlockTitle,
    BlockContainer,
    BlockNumber,
    BlockNumberContainer,
    BlockNumberTitle,
    ToggleButton,
    ToggleButtonSVG,
} from './Styles';

const Block = ({ block }) => {
    const [blockToggle, setBlockToggle] = useState(false);
    const [txToggle, setTxToggle] = useState(false);

    const blockInfo = useSpring({
        position: 'relative',
        width: '80%',
        padding: '0.5rem 1rem',
        fontSize: '1.5rem',
        margin: '0 auto',
        backgroundColor: '#313e50',
        height: blockToggle ? '300px' : '30px',
        display: 'flex',
        alignItems: 'center',
    });
    const txInfo = useSpring({
        position: 'relative',
        width: '80%',
        padding: '0.5rem 1rem',
        fontSize: '1.5rem',
        margin: '0 auto',
        backgroundColor: '#313638',
        height: txToggle ? '300px' : '30px',
        display: 'flex',
        alignItems: 'center',
    });

    return (
        <BlockContainer>
            <BlockTitle>
                <BlockNumberContainer>
                    <BlockNumberTitle>Block Number</BlockNumberTitle>
                    <BlockNumber>{block.number}</BlockNumber>
                </BlockNumberContainer>

                <div>{block.timestamp}</div>
            </BlockTitle>
            <animated.div style={blockInfo}>
                <ToggleButton
                    color="#313e50"
                    onClick={() => setBlockToggle(!blockToggle)}
                >
                    <ToggleButtonSVG>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={faChevronDown}
                        />
                    </ToggleButtonSVG>
                    View Block Information
                </ToggleButton>
            </animated.div>
            <animated.div style={txInfo}>
                <ToggleButton
                    color="#313638"
                    onClick={() => setTxToggle(!txToggle)}
                >
                    <ToggleButtonSVG>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={faChevronDown}
                        />
                    </ToggleButtonSVG>
                    View Transactions
                </ToggleButton>
            </animated.div>
        </BlockContainer>
    );
};

export default Block;
