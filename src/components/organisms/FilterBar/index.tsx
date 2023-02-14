// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'
import CompanyNameFilter from './CompanyNameFilter'

// Services

// Types

const FilterBar: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <CompanyNameFilter />
      </Styled.Content>
    </Styled.Container>
  )
}

export default FilterBar
