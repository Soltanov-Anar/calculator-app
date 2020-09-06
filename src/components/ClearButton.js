import React, {useContext} from 'react';
import {NumberContext} from './NumberProvider';

const ClearButton = () => {
    const {handleClearValue} = useContext(NumberContext);

    return (
        <button type='button'
                className='white-button button-clear'
                onClick={() => handleClearValue() }>
            C 
        </button>
    );
};

export default ClearButton;