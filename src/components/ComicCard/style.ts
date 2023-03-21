import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    padding: 5px;
    border: 1px solid black;
    border-radius: 10px;
`
export const ImageContainer = styled.div<{background: string}>`
    width: 100%;
    background-image:${props => `url(${props.background})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

export const DetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    gap: 10px 10px;
`

