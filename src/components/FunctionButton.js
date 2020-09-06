import React, {useContext} from 'react';
import {NumberContext} from './NumberProvider';

const FunctionButton = ({btnValue}) => {
    const {handleSetCalcFunction} = useContext(NumberContext);

    return (
        <button type='button'
                className='function-button'
                onClick={() => handleSetCalcFunction(btnValue) }>
            {btnValue} 
        </button>
    );
};

export default FunctionButton;