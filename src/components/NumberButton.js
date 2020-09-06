import React, {useContext} from 'react';
import {NumberContext} from './NumberProvider';

const NumberButton = ({btnValue}) => {
    const {handleSetDisplayValue} = useContext(NumberContext);

    return (
        <button type='button'
                onClick={ () => handleSetDisplayValue(btnValue)}>
            {btnValue}
        </button>
    );
};

export default NumberButton;