import styled from 'styled-components'
import facepaint from 'facepaint'

import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
`

export const RelativeDetails = styled.div`
  ${mq({ display: ['none', 'none', 'block'] })}
`
