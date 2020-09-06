import styled from 'styled-components';

export const CalculatorStyles = styled.div`
    background: #122F41;
    height: 100%;
    display: grid;
    justify-items: center;
    grid-template-areas:
        'display'
        'numbers';

    button {
        width: 100%;
        height: 80px;
        border-radius: 20px;
        border: 3px solid white;
        font-size: 2rem;
        color: #1F1F1F;
        font-family: 'Orbitron', serif;
        background: #C5C4C9;
            &:focus {
                outline: none;
            }
    }

    .display {
        font-family: 'Orbitron', serif;
        font-weight: 700;
        grid-area: display;
        h1 {
            font-size: 4rem;
            color: white;
            text-align: center;
            margin: 40px 0;
        }
    }

    .number-pad {
        grid-area: numbers;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(4, 1fr);
        padding: 0 0 30px;
        width: 450px;
        .button-div:focus {
            outline: none;
        }
    }
    .zero-button {
    grid-column: 1/3;
    }

    .white-button {
        background: #F6833D;
    }

    .button-clear {
        background: red;
    }

    .function-button {
        background: #F6833D;
    }
    `;

export const DisplayStyles = styled.div`
    display: grid;
    grid-template-rows: 90px 50px;
    grid-template-columns: 1fr;
    border: 4px solid white;
    margin: 10px;
    width: 441px;
    align-items: center;
    border-radius: 20px;
    background: #F6833D;

    h2,
    p {
        text-align: center;
        color: white;
    }

    h2 {
        font-size: 3rem;
        margin: 0;
        text-align: right;
        padding: 0px;
        border-bottom: 4px solid white;
        padding: 15px 20px;
    }

    p {
        margin: 5px 0;
    }
    `;