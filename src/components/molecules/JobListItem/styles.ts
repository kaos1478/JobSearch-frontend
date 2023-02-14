import styled, { css } from 'styled-components'

interface IContainer {
  active: boolean
}

const ActiveStyle = css`
  border-color: ${props => props.theme.colors.primary};
`
export const Container = styled.li<IContainer>`
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 0 15px 20px -19px rgb(0 0 0 / 20%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  transition: all 0.5s;
  width: 100%;

  &:not(:first-child) {
    margin-top: 0.8rem;
  }

  ${props => props.active && ActiveStyle}
`

export const PostedAt = styled.div`
  bottom: 1rem;
  position: absolute;
  right: 1rem;
`
