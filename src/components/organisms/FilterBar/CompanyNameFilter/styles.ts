import styled from 'styled-components'

interface IContent {
  show: boolean
}

export const Container = styled.div`
  position: relative;
`

export const Content = styled.div<IContent>`
  background-color: ${props => props.theme.colors.white};
  border-radius: 0 20px 20px 20px;
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap;
  left: 0;
  max-width: 90%;
  padding: 1rem;
  position: absolute;
  top: 100%;
  width: 400px;
`
