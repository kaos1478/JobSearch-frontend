import facepaint from 'facepaint'
import styled from 'styled-components'

import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.gray};
  height: calc(100vh - 3rem - 36px);
  overflow: hidden;
  position: relative;
  width: 100%;
`

export const Header = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  box-shadow: 0 4px 12px rgb(0 0 0 / 6%);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 132px;
`

export const Description = styled.div`
  height: 80%;
  overflow-y: scroll;
  padding: 2rem;
`

export const Buttons = styled.div`
  display: flex;

  & > button:first-child {
    ${mq({ display: ['block', 'block', 'none'] })}
  }
`
