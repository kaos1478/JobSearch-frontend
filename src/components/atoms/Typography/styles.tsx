import styled, { css } from 'styled-components'

import { ITypographyProps } from './index'

interface IContainerProps extends ITypographyProps {
  styles?: string
}

export const parsedTypographys = {
  heading1: {
    tag: 'h1',
    style: css`
      color: ${props => props.theme.colors.textBlack};
      font-size: ${props => props.theme.fontSizes.large};
      font-weight: 400;
    `
  },
  heading2: {
    tag: 'h2',
    style: css`
      color: ${props => props.theme.colors.textBlack};
      font-size: ${props => props.theme.fontSizes.medium};
      font-weight: 400;
    `
  },
  body1: {
    tag: 'span',
    style: css`
      color: ${props => props.theme.colors.textBlack};
      font-size: ${props => props.theme.fontSizes.medium};
      font-weight: 300;
    `
  },
  body2: {
    tag: 'span',
    style: css`
      color: ${props => props.theme.colors.textBlack};
      font-size: ${props => props.theme.fontSizes.medium};
      font-weight: 400;
    `
  },
  div: {
    tag: 'div',
    style: css``
  }
}

export const Container = styled('div').attrs<ITypographyProps>(
  ({ as = 'heading1' }) => ({
    styles: parsedTypographys[as].style,
    as: parsedTypographys[as].tag
  })
)<IContainerProps>`
  ${props => props.styles};
  ${props => props.theme.colors.textBlack};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-top: ${props => props.marginTop || '0'};
  text-align: ${props => props.align || 'inherit'};
`
