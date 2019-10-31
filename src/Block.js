import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { BlockContainer } from './Styles';

const Block = ({ block }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <React.Fragment>
            <BlockContainer>{block.number}</BlockContainer>
            <Collapse isOpened={false}>
                <div>Random content</div>
            </Collapse>
        </React.Fragment>
    );
};

export default Block;
