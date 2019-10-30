import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    body {
        font-family: "Ubuntu Mono", sans-serif;
        background-color: #313638;
        color: #e8e9eb;
    }
`

const Container = styled.div`
    width: 100%;
`

export { Container, Global }
