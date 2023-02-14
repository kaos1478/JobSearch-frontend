import theme from '@/styles/theme'
import facepaint from 'facepaint'
import styled from 'styled-components'

const mq = facepaint(theme.breakpoints)

export const Container = styled.ul`
  height: calc(100vh - 3rem - 36px);
  list-style: none;
  overflow-y: scroll;
  width: 100%;
  ${mq({ 'padding-right': ['0', '0', '1rem'] })}
`

export const Content = styled.div``
