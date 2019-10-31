import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import BlockInformation from './BlockInformation';

import {
    BlockTitle,
    BlockContainer,
    BlockNumber,
    BlockNumberContainer,
    BlockNumberTitle,
    ToggleButton,
    ToggleButtonSVG,
    Time,
} from './Styles';

const Block = ({ block }) => {
    const [blockToggle, setBlockToggle] = useState(false);
    const [txToggle, setTxToggle] = useState(false);
    const [time, setTime] = useState(
        Math.floor(Date.now() / 1000 - block.timestamp)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 3);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    });

    const blockInfo = useSpring({
        position: 'relative',
        width: '80%',
        padding: '0.5rem 1rem',
        fontSize: '1.5rem',
        margin: '0 auto',
        marginTop: blockToggle ? '-270px' : '0px',
        backgroundColor: '#313e50',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        zIndex: 1,
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

                <Time>{time} seconds ago</Time>
            </BlockTitle>
            <animated.div style={blockInfo}>
                <BlockInformation block={block}></BlockInformation>
                <ToggleButton
                    color="#313e50"
                    onClick={() => setBlockToggle(!blockToggle)}
                >
                    <ToggleButtonSVG>
                        <FontAwesomeIcon
                            className="fa-icon"
                            icon={blockToggle ? faChevronUp : faChevronDown}
                        />
                    </ToggleButtonSVG>

                    {blockToggle
                        ? 'Close Block Information'
                        : 'View Block Information'}
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
                            icon={txToggle ? faChevronUp : faChevronDown}
                        />
                    </ToggleButtonSVG>
                    {txToggle ? 'Close Transactions' : 'View Transactions'}
                </ToggleButton>
            </animated.div>
        </BlockContainer>
    );
};

export default Block;
