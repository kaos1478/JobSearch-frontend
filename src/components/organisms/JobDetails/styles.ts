import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
  height: calc(100vh - 3rem - 36px);
  width: 100%;
  overflow: hidden;
`

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
  justify-content: space-between;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 132px;
  justify-content: space-between;
`

export const Description = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 2rem;
`
