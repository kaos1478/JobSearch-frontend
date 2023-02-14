import theme from '@/styles/theme'
import facepaint from 'facepaint'
import styled from 'styled-components'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 2;
  ${mq({ display: ['block', 'block', 'none'] })}
`
