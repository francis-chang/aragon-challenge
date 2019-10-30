import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
    body {
        background-color: #313638;
        color: #e8e9eb;
    }
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export { Container, Global }
