import React from 'react';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import {CalculatorStyles} from './styles/CalculatorStyles';

const Calculator = () => (
    <CalculatorStyles>
        <div className='display'>
            <h1>Calculator</h1>
            <Display />
        </div>
        <div className='number-pad'>
            <ClearButton />
            <BackButton />
            <NegativeButton />

            <FunctionButton btnValue='/'/>
            <NumberButton btnValue={7} />
            <NumberButton btnValue={8} />
            <NumberButton btnValue={9} />

            <FunctionButton btnValue='*'/>
            <NumberButton btnValue={4} />
            <NumberButton btnValue={5} />
            <NumberButton btnValue={6} />

            <FunctionButton btnValue='-'/>
            <NumberButton btnValue={1} />
            <NumberButton btnValue={2} />
            <NumberButton btnValue={3} />

            <FunctionButton btnValue='+'/>
            <div className='zero-button'>
                <NumberButton btnValue={0} />
            </div> 
            <NumberButton btnValue='.' />
            <EqualButton />
        </div>
    </CalculatorStyles>
);

export default Calculator;

