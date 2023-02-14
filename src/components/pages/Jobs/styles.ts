import styled from 'styled-components'
import facepaint from 'facepaint'

import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div``

export const Content = styled.div`
  display: grid;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 0rem 1rem;
  grid-template-columns: 1fr 1fr;
  ${mq({ 'grid-template-columns': ['1fr', '1fr', '1fr 1fr'] })}
`

export const RelativeDetails = styled.div`
  ${mq({ display: ['none', 'none', 'block'] })}
`
