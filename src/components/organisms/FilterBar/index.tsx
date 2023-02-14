// External libs

// Assets

// Componentes

// Subcomponentes and style
import PageWrapper from '@/components/templates/PageWrapper'
import CompanyNameFilter from './CompanyNameFilter'
import * as Styled from './styles'

// Services

// Types

const FilterBar: React.FC = () => {
  return (
    <Styled.Container>
      <PageWrapper padding="1rem 1rem 0 1rem">
        <CompanyNameFilter />
      </PageWrapper>
    </Styled.Container>
  )
}

export default FilterBar
