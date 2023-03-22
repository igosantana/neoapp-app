import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-flow: column;
    border: 1px solid black;
    border-radius: 10px;
`

export const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
        img {
            width: 100%;
            height: 300px;
            border-radius: 10px 10px 0 0;
        }
`

export const DetailContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 5px;
    flex-flow: column;
    gap: 5px;
`
export const CardButton = styled.button`
    width: 100%;
    background-color: gray;
    padding: 8px;
    text-transform: uppercase;
    border: none;
    border: 1px solid black;
    border-radius: 8px;
`

