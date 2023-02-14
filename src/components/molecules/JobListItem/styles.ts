import styled, { css } from 'styled-components'

interface IContainer {
  active: boolean
}

const ActiveStyle = css`
  border-color: ${props => props.theme.colors.primary};
`
export const Container = styled.li<IContainer>`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 0 15px 20px -19px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 1rem;
  transition: all 0.5s;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 0.8rem;
  }

  ${props => props.active && ActiveStyle}
`

export const Title = styled.div``

export const Company = styled.div``

export const Description = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  display: -webkit-box;
  height: 98px;
  overflow: hidden;
  text-overflow: ellipsis;
`
