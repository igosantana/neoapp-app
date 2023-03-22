import styled from 'styled-components'

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    > * {
        margin-right: 0.8rem;
    }
`
export const PaginationButton = styled.button<{disabled: boolean}>`
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 50px;
    ${(props) => (props.disabled ? disabled : enabled)}
`
const enabled = `
    cursor: pointer;
    background-color: gray;
    transition: background-color 0.2s;

    &:hover {
        background-color: red;
    }

    &:active {
        background-color: purple;
    }
`
const disabled = `
    background-color: lightgray;
`

export const PaginationLabel = styled.label`
    font-size: 1rem;
`