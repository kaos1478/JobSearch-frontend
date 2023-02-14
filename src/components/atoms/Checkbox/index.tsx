// External libs

// Assets

// Componentes

// Subcomponentes and style
import { InputHTMLAttributes } from 'react'
import * as Styled from './styles'

// Services

// Types
interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  active: boolean
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
