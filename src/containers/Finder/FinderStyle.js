import styled from 'styled-components'

export const Body = styled.div`
    min-height: 100vh;
    background: #424242;
    -moz-box-shadow:    inset 0 0 100px #000000;
    -webkit-box-shadow: inset 0 0 100px #000000;
    box-shadow:         inset 0 0 100px #000000;
    padding: 80px 0;
`

export const Title = styled.div`
    text-align: center;
    color: #FACC2E;
    text-shadow: 4px 4px rgba(0,0,0,0.5);
    font-family: 'Pacifico';
    font-size: 4em;
    margin-bottom: 50px;

    span {
        display: block;
        margin-top: -5px;
        font-size: 0.4em;
    }
`