import styled from 'styled-components'
import { IPageWrapperProps } from '.'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Content = styled.div<IPageWrapperProps>`
  width: 100%;
  max-width: 1000px;
  padding: ${props => (props.padding ? props.padding : '')};
`
