// External libs

// Assets

// Componentes
import JobDetails from '@/components/organisms/JobDetails'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Modal: React.FC = () => {
  return (
    <Styled.Container>
      <JobDetails />
    </Styled.Container>
  )
}

export default Modal
