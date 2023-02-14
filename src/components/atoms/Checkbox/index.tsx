// External libs
import { InputHTMLAttributes } from 'react'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  active: boolean
  label: string
}

const Checkbox: React.FC<ICheckbox> = ({ label, active, ...rest }) => {
  return (
    <Styled.Container active={active}>
      <Styled.Content {...rest} type="checkbox" />
      {label}
    </Styled.Container>
  )
}

export default Checkbox
