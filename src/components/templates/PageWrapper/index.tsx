// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IPageWrapperProps {
  padding?: string
}

const PageWrapper: React.FC<IPageWrapperProps> = ({ children, ...rest }) => {
  return (
    <Styled.Container>
      <Styled.Content {...rest}>{children}</Styled.Content>
    </Styled.Container>
  )
}

export default PageWrapper
