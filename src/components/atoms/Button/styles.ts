import styled, { css } from 'styled-components'
import { IButtonProps } from '.'

export const colorVariants = {
  primary: css`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  `,
  primaryReverse: css`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  `,
  secondary: css`
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
  `,
  secondaryReverse: css`
    background-color: transparent;
    color: ${props => props.theme.colors.secondary};
    border-color: ${props => props.theme.colors.secondary};
  `
}

export const Container = styled.button<IButtonProps>`
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  transition: all 0.5s;
  font-size: 1.1rem;
  ${props => colorVariants[props.color]}
  margin: ${props => (props.margin ? props.margin : '0')};

  &:hover {
    filter: brightness(0.8);
  }
`
