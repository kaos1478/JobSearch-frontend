import styled, { css } from 'styled-components'

interface IContainer {
  active: boolean
}

const ActiveStyles = css`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`

export const Container = styled.label<IContainer>`
  align-items: center;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  height: min-content;
  justify-content: center;
  margin: 0.3rem;
  padding: 0.6rem;
  transition: all 0.5s;
  width: min-content;
  ${props => props.active && ActiveStyles}
`

export const Content = styled.input`
  display: none;
`
